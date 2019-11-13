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
  

    



}


module.exports = new ProdutosDAO;