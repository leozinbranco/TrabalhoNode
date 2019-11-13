const ProdutosDAO = require('../BD/produtos_dao');

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
                    
                    produtos: resultados[0] // produtos 
                    
                }
            ) 
            })
           
        };
        
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


        }
}

module.exports = new ProdutosControler;