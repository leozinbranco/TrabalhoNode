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


    validaAcessoUsuario() {
        return function(req, res) {
            UsuariosDAO.validaAcessoUsuario(req.body.cpf,req.body.senha)
                .then(dados => {
                    if (dados > 0) {
                        // criando 2 variaveis de sessao: CPF e SENHA
                        req.session.cpf = req.body.cpf;
                        req.session.senha = req.body.senha;
                        console.log("Variavel de Sessao CPF = " + req.session.cpf);
                        console.log("Variavel de Sessao SENHA = " + req.session.senha);
                        res.redirect('/carrinho');
                    }
            })
            .catch(erro => res.redirect('/'));
            }
        }

        inserirUsuario()
        {
            return function(req, res){
                if (req.session.cpf) {
                    res.marko(
                        UsuariosDAO.registrarNovoUsuario(),
                        require('../views/clientes/login.marko'));
            }
            else { res.send("<h1>Algo deu errado no Registro de Usuario!</h1>");  }
            }
        }
}
module.exports = new UsuariosControler;