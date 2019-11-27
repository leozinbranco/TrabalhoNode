//instancia db
var db = require('../../config/database');  //da onde vem as tables do mer (CRUDGE)


class ProdutosDAO 
{
  // construtor da classe
    constructor() 
    {
        this._db = db;
    }

    // método de SELECT  na tabela Produtos
    listagemProdutos(callback) 
    {
      var sql =  'SELECT codProduto, preco, descricao, foto, codCategoria FROM PRODUTO';
      console.log(sql);
      this._db.query(sql,
          (erro, resultados) =>{
              callback(erro, resultados)
              console.log(resultados)
              console.log(erro) //null nenhum erro
            }
      )
    }

    listagemProdutosCarrinho(callback)
    {
      console.log("=============ENTROU EM LISTAGEMPRODUTOSCARRINHO==============");
      var sql = 'SELECT nome, qtde, valTotal, valTotalCompra, codProdCarrinho,foto FROM CARRINHO';
      console.log(sql);
      this._db.query(sql,
        (erro, resultados) =>{
          callback(erro, resultados)
          console.log(resultados)
          console.log(erro) //null nenhum erro 
        })
    }

    listagemProdutosPedido(callback)
    { 
      var sql = 'SELECT P.PRECO ,p.foto ,P.descricao, PE.codPedido, PE.CODPRODUTO, PE.QTDE FROM PEDIDO PE, PRODUTO P WHERE P.CODPRODUTO = PE.CODPRODUTO'
      console.log(sql);
      this._db.query(sql,
          (erro,resultados) =>
          {
            callback(erro, resultados)
            console.log(resultados)
            console.log(erro)
          }
      )

    }

    

    inserirProdutosCarrinhoBD(idProduto, cpf)//TA FALTANDO O CPF
    {
      return new Promise((resolve, reject) => {   
        //var sqlValorTotal = "select SUM(valTotal) from carrinho ";
        //var sqlProdutoPreco = "select preco from produto where codProduto = " + idProduto + "";
        //var sqlDescricao = "select descricao from produto where codProduto = " + idProduto + "";
        //var sqlFoto = "select foto from produto where codProduto = " + idProduto + "";
        //var sqlcodCategoria = "select codCategoria from produto where codProduto = " + idProduto + "";
        //var sqlInsere = "insert into carrinho(codProduto, qtde, valTotal, valTotalCompra, nome, foto) values('" + idProduto + "', '" + 1 + "', '"+
        //sqlProdutoPreco + "', '" + sqlValorTotal + "', '" + sqlDescricao +"', '"+ sqlFoto + "')";
        
        console.log(idProduto + "<<<<=============== ESSE É TB");
        var sqlInsere = "insert into carrinho(codProduto, cpf, qtde, valTotal, valTotalCompra, foto, nome)VALUES((select codProduto from produto where codProduto = "+ idProduto +"),"+cpf+",1,(SELECT preco from produto where codProduto = "+ idProduto +"),0,(select foto from produto where codProduto = "+ idProduto +"),(select descricao from produto where codProduto = "+ idProduto +")) "
        this._db.query(sqlInsere,
          
          function(erro) {
            if(erro)
            {
              console.log(erro);
              return reject("Inclusão de produto no carrinho NÃO foi concluida!"); 
            }
            resolve();
          })
    
      });
    }

    inserirPedidosBD(idProduto)
    {
      return new Promise((resolve, reject) => {   
        
        var sqlInsere = "insert into pedido(codUsuario, codProduto, qtde)VALUES(1,"+ idProduto +",1)" + 
        "  insert into itemPedido values((select codPedido from pedido where ))";
        this._db.query(sqlInsere,
          
          function(erro) {
            if(erro)
            {
              console.log(erro);
              return reject("Inclusão de produto no carrinho NÃO foi concluida!"); 
            }
            resolve();
          })
    
      });
    }

    excluirProdutosCarrinhoBD(idProduto)
    {
      return new Promise((resolve, reject) => {
        var sqlExclui = "DELETE FROM CARRINHO WHERE codProdCarrinho = " + idProduto + "";
        console.log(idProduto);
        console.log(sqlExclui);
        this._db.query(sqlExclui,
          function(erro){
            if(erro)
            {
              console.log(erro);
              return reject("EXCLUSÃO de produto no carrinho NÃO foi concluida!");
            }
            console.log("DEU RESOLVE NO EXCLUIR!!!!!!!!!!!");
            resolve();
          })

      });
    }
  

    



}


module.exports = new ProdutosDAO;