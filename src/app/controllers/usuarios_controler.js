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
            res.marko(
            require('../views/usuarios/registrarUsuario.marko'));
        
        }
    }


    validaAcessoUsuarioCarrinho() {
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
        }

    validaAcessoUsuarioLogin() {
        return function(req, res) {
            console.log(dados);
            UsuariosDAO.validaAcessoUsuario(req.body.cpf,req.body.senha)
                .then( dados => {
                    if (dados.length > 0) {
                        // criando 2 variaveis de sessao: CPF e SENHA
                        req.session.cpf = req.body.cpf;
                        req.session.senha = req.body.senha;
                        req.session.login = dados.cpf;
                        console.log("Variavel de Sessao CPF = " + req.session.cpf);
                        console.log("Variavel de Sessao SENHA = " + req.session.senha);
                        res.redirect('/login');
                        alert('Logado com sucesso!');
                    }
            })
            
            .catch(erro => res.redirect('/'));
            console.log('Erro no login ');
            }
    }

        inserirUsuario()
        {
            return function(req, res){
                        UsuariosDAO.registrarNovoUsuario(req.body)
                        .then(res.redirect('/'))
                        .catch(erro => console.log(erro));
                    
            }
        }
    }
module.exports = new UsuariosControler;