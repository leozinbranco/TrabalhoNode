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
      var sql = 'SELECT nome, qtde, valTotal, valTotalCompra FROM CARRINHO';
      console.log(sql);
      this._db.query(sql,
        (erro, resultados) =>{
          callback(erro, resultados)
          console.log(resultados)
          console.log(erro) //null nenhum erro 
        })
    }

    

    inserirProdutosCarrinhoBD(produto)
    {
      return new Promise((resolve, reject) => {
        var sql = "insert into carrinho() values('"+ produto.cpf + "', '" + produto.codProduto + "', '" + produto.qtde + "', '"+
        produto.preco + "', '" + produto.valTotalCompra + "')"
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
  

    



}


module.exports = new ProdutosDAO;