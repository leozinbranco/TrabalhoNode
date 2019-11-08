class ProdutosDAO 
{
  // construtor da classe
    constructor(db) 
    {
        this._db = db;
    }

    // método de SELECT  na tabela Produtos
    listagemProdutos(callback) 
    {
      var sql =  'SELECT codProduto, preco, descricao, foto, codCategoria FROM PRODUTOS';
      console.log(sql);
      this._db.query(sql,
          (erro, resultados) =>
              callback(erro, resultados)
      )
    }
  

    



}


module.exports = ProdutosDAO;