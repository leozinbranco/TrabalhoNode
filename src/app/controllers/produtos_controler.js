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
          //  if (req.session.login){
            ProdutosDAO.listagemProdutosCarrinho(function(error, resultados){
                console.log("RESULTADOS ========>   " + resultados);
                res.marko(
                    require('../views/produtos/listagemCarrinho.marko'),
                {
                    produtosCarrinho: resultados  //produtosCarrinho = resultado da consulta
                    
                }
                )
            })
        //}
        /*else{
            res.send("<h1>PRIMEIRAMENTE MEU IRMAO FAZ LOGIN AE </h1>");
        }*/
        }
    }

    inserirProdutoCarrinho()
    {
            return function(req, res){
                console.log("ENTROU NO INSERIR PRODUTO CARRINHO");
            // if (req.session.cpf) {
                const id_produto = req.params.idProd;
                //console.log(id_produto + " <============ ESSE E O ID PRODUTO");
                        ProdutosDAO.inserirProdutosCarrinhoBD(id_produto),
                        console.log(" NA TEORIA INSERIU "),
                        require('../views/produtos/listagemCarrinho.marko')
                        res.redirect('/carrinho');
        /* }
            else { res.send("<h1>PRIMEIRAMENTE, FAÇA LOGIN!</h1>");  }
            }*/
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