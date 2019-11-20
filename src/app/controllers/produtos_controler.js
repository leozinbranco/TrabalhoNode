const ProdutosDAO = require('../BD/produtos_dao');
const UsuariosControler = require('../controllers/produtos_controler');

//instancia db
var db = require('../../config/database');  //da onde vem as tables do mer (CRUDGE)

class ProdutosControler
{

    listaProdutos(){
        return function(req, res){
            ProdutosDAO.listagemProdutos(function(error, resultados){
                console.log(resultados)
                res.marko(   
                require('../views/produtos/listagemProduto.marko'),  // manda o marko
                {
                    
                    produtos: resultados // produtos 
                    
                }
            ) 
            })
        }  
    };

    listaProdutosCarrinho()
    {
        return function(req, res){
            ProdutosDAO.listagemProdutosCarrinho(function(error, resultados){
                console.log(resultados)
                res.marko(
                    require('../views/produtos/listagemCarrinho.marko'),
                {
                    produtos: resultados
                }
                )
            })
        }
    }

    inserirProdutoCarrinhoCONTROLER()
    {
        return function(req, res){
            if (req.session.cpf) {
                res.marko(
                    ProdutosDAO.inserirProdutosCarrinhoBD(),
                    require('../views/clientes/listagemCarrinho.marko'));
        }
        else { res.send("<h1>PRIMEIRAMENTE, FAÇA LOGIN!</h1>");  }
        }
    }
}
    
      /*      if(req.session.login) {  //se eu estiver logado 
            produtosDAO.listagemProdutos(function (error,resultados)
            {
        res.marko(   
                require('../views/produtos/listagemProduto.marko'),  // manda o marko
                {
                    produtos: resultados // produtos 
                    
                }
            );
        });
            
        }
        else {
            res.send("<h1>Primeiramente meu irmao faz login ai</h1>")     //response 
        }
    
    }}*/


module.exports = new ProdutosControler;