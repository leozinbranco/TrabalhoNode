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
           if (req.session.cpf){
            console.log("Variavel de Sessao CPF = " + req.session.cpf);
            console.log("Variavel de Sessao SENHA = " + req.session.senha);
            ProdutosDAO.listagemProdutosCarrinho(function(error, resultados){
                console.log("RESULTADOS ========>   " + resultados)
                console.log(error)
                    }).then(resultados =>{

                        var total = 0; 
                        for(var i = 0; i < resultados.length; i++)
                        {
                            console.log(resultados[i].valTotal + " TA NO FOR !!!!!!");
                            total += resultados[i].valTotal;
                            
                        }
                        console.log(total);

                        res.marko(
                        require('../views/produtos/listagemCarrinho.marko'),
                        {
                            produtosCarrinho: resultados,  //produtosCarrinho = resultado da consulta
                            vtotalSum: total
                            
                        })
                        .catch(error => res.send(error));
                        
                    })
                    
                    
            
                
                
        }
        else{  res.send("<h1>PRIMEIRAMENTE FAÇA LOGIN! </h1>");}
            
        }
    }

    listaProdutosPedidos()
    {
        return function(req, res){
            if (req.session.cpf){
                console.log("Variavel de Sessao CPF = " + req.session.cpf);
                console.log("Variavel de Sessao SENHA = " + req.session.senha);
                ProdutosDAO.listagemProdutosPedido(function(error, resultados){
                    console.log(error);
                    res.marko(
                        require('../views/produtos/listagemPedido.marko'),
                    {
                        produtosPedido: resultados  //produtosCarrinho = resultado da consulta
                    }
                    
                    );
                    console.log(resultados[0] +  "          DEU RES.MARKO");
                })
                
                    
            }
            else{
                res.send("<h1>PRIMEIRAMENTE FAÇA LOGIN! </h1>");
            }
            }
        }
    


    inserirProdutoCarrinho()
    {
            return function(req, res){
                console.log("ENTROU NO INSERIR PRODUTO CARRINHO");
            if (req.session.cpf) {
                const id_produto = req.params.idProd;
                //console.log(id_produto + " <============ ESSE E O ID PRODUTO");
                        ProdutosDAO.inserirProdutosCarrinhoBD(id_produto, req.session.cpf),
                        console.log(" NA TEORIA INSERIU "),
                        require('../views/produtos/listagemCarrinho.marko')
                        res.redirect('/carrinho');
        }
            else { res.send("<h1>PRIMEIRAMENTE, FAÇA LOGIN!</h1>");  
            }
        }
    }

    inserirPedido()
    {
            return function(req, res){
                console.log("ENTROU NO INSERIR PEDIDO");
            if (req.session.cpf) {
                const id_produto = req.params.idProd;
                //console.log(id_produto + " <============ ESSE E O ID PRODUTO");
                        ProdutosDAO.inserirPedidoBD(id_produto, req.session.cpf),
                        require('../views/produtos/listagemPedido.marko')
                        res.redirect('/carrinho');
        }
            else { res.send("<h1>PRIMEIRAMENTE, FAÇA LOGIN!</h1>");  
            }
        }
    }
            
    

    excluirProdutoCarrinho()
    {
        return function(req, res){
            console.log("/n/n/n============== ENTROU NO EXCLUI PRODUTO CARRINHO ===============/n/n/n");
            const id_produto = req.params.codProdCarrinho;
            ProdutosDAO.excluirProdutosCarrinhoBD(id_produto),
            console.log(id_produto + "<==============   ID PRODUTO"),
            require('../views/produtos/listagemCarrinho.marko')
            res.redirect('/carrinho');
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