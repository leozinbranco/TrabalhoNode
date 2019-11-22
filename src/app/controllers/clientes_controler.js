//chamando a c lasse ClientesDAO
const ClientesDAO = require('../BD/clientes_dao');

//instancia db
var db = require('../../config/database');

class ClientesControler
{

    listaClientes(){
        return function(req, res){

            if(req.session.login) {
            const clienteDAO = new ClientesDAO(db);
            clienteDAO.listagemClientes(function (error,resultados)
            {
        res.marko(
                require('../views/clientes/listagemClientes.marko'),
                {
                    clientes: resultados
                }
            );
        });
            
        }
        else {
            res.send("<h1>Primeiramente meu irmao faz login ai</h1>")
        }
    
    }}




    exibeForminclusaoNovoCliente(){
        return function(req, res){
            
        res.marko(
                require('../views/clientes/inclusaoClientes.marko'));
        }
    }


    listaDadosClientes() {
        return function (req, res) {
            const idDoCliente = req.params.id;
            const clienteDAO = new ClientesDAO(db);
            clienteDAO.consultaClientePorId(idDoCliente, function (error, resultadosClientes) 
            {
                console.log(resultadosClientes);
                res.marko(
                    require('../views/clientes/atualizaClientes.marko'),
                    { clientes: resultadosClientes[0] }
                );
            });
        }
    }


    atualizaDadosCliente(){
        return  function(req,res){
            
                const clienteDAO = new ClientesDAO(db);
                clienteDAO.atualizaClientes(req.body)
                .then(res.redirect('/clientes'))
                .catch(erro => console.log(erro))       
            }
    }


    insereNovoCliente(){
        return function(req,res){
            
                const clienteDAO = new ClientesDAO(db);
                clienteDAO.incluiClientes(req.body)
                .then(res.redirect('/clientes'))
                .catch(erro => console.log(erro))
            
            
            }
    }

    excluiCliente(){
        return  function(req,res)
        {
        
        const idDoCliente = req.params.id;
        const clienteDAO = new ClientesDAO(db);
        clienteDAO.excluiClientes(idDoCliente)
        .then(res.redirect('/Clientes'))
        .catch(erro => console.log(erro))
        
        }

    }

}

module.exports = ClientesControler;