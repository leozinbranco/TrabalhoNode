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
            const usuarioDAO = new UsuariosDAO(db);
            usuarioDAO.validaAcessoUsuario(req.body.login,req.body.senha)
                .then(dados => {
                    if (dados > 0) {
                        // criando 2 variaveis de sessao: LOGIN e SENHA
                        req.session.login = req.body.login;
                        req.session.senha = req.body.senha;
                        console.log("Variavel de Sessao LOGIN = " + req.session.login);
                        console.log("Variavel de Sessao SENHA = " + req.session.senha);
                       res.redirect('/clientes');
                    }
                })
                .catch(erro => res.redirect('/'));
        }
    }
}
module.exports = UsuariosControler;