// chamando a classe ClientesDAO
const UsuariosDAO = require('../BD/usuarios_dao');

// instância do BD configurado
var db = require('../../config/database');


class UsuariosControler
{

    exibeFormAcesso() {
        return function(req, res) {
            res.marko(
                require('../views/usuarios/login.marko'));    
        }
    }

    exibeFormRegistroUsuario() {
        return function(req, res){
            if(req.session.cpf)
            {
                res.send("<h1>Para entrar em outra conta, primeiro deslogue nessa!</h1>");
            }
            else{
            
                res.marko(
                require('../views/usuarios/registrarUsuario.marko'));
            
                
            }
        }
        
    }

    excluirSessions()
    {
        return function(req,res){
            if(req.session.cpf)
            {
                req.session.cpf = null;
                req.session.senha = null;
                console.log("CPF NULO : "+ req.session.cpf);
                console.log("SENHA NULA : "+ req.session.senha);

                res.redirect("/");
            }
            else
            {
                res.send("<h1>VOCÊ NÃO ESTÁ LOGADO!</h1>");
            }
        }
    }


    /*validaAcessoUsuarioCarrinho() {
        return function(req, res) {
            UsuariosDAO.validaAcessoUsuario(req.body.cpf,req.body.senha)
                .then(dados => {
                    if (dados > 0) {
                        // criando 2 variaveis de sessao: CPF e SENHA
                        req.session.cpf = req.body.cpf;
                        req.session.senha = req.body.senha;
                        req.session.login = dados
                        console.log("Variavel de Sessao CPF = " + req.session.cpf);
                        console.log("Variavel de Sessao SENHA = " + req.session.senha);
                        res.redirect('/carrinho');
                    }
            })
            .catch(erro => res.redirect('/'));
            }
        }*/

    validaAcessoUsuarioLogin() {
        return function(req, res) {
            const {cpf, senha} = req.body;
            console.log(cpf, senha);
            UsuariosDAO.validaAcessoUsuario(req.body.cpf,req.body.senha)
                .then( dados => {
                    console.log(dados);
                    if (dados > 0) {
                        // criando 2 variaveis de sessao: CPF e SENHA
                        req.session.cpf = req.body.cpf;
                        req.session.senha = req.body.senha;
                        //req.session.login = dados.cpf;
                        console.log("Variavel de Sessao CPF = " + req.session.cpf);
                        console.log("Variavel de Sessao SENHA = " + req.session.senha);
                        res.redirect('/carrinho');
                        //alert('Logado com sucesso!');
                    }
                    
            }).catch(erro => res.redirect('/')
            );
            
            
            console.log('Erro no login ');
            }
    }

        inserirUsuario()
        {
            return function(req, res){
            
                console.log(req.body + "<===============");
                        UsuariosDAO.registrarNovoUsuario(req.body)
                        .then(res.redirect('/'))
                        .catch(erro => console.log(erro));
                
                
                    
            }
        }
    }
module.exports = new UsuariosControler;