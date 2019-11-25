var db = require('../../config/database'); 

class UsuariosDAO 
{
  // construtor da classe
    constructor() 
    {
        this._db = db;
    }

    validaAcessoUsuario(cpf,senha) {
            return new Promise((resolve, reject) => {
            console.log("CPF DA VALIDACAO = " + cpf);
            console.log("SENHA DA VALIDACAO = " + senha);
            var sqlCons = "SELECT * FROM USUARIO WHERE cpf='" + cpf +
                "' and senha='" + senha + "'";
            console.log(sqlCons);
            this._db.query(sqlCons, function (erro,resultado) {
                // aqui estou checando se o retorno do SELECT trouxe dados
                console.log(resultado + " <======== resultado");
                console.log(resultado.length);
                if (resultado.length > 0) {
                var dados = resultado.length;
                console.log("fez login");
                resolve(dados);
                console.log(resultado);
                }
                else { 
                    console.log(erro);
                    
                    return reject('ACESSO NEGADO!');
                }
            });
        });
    }   // end do validaAcessoUsuario

    registrarNovoUsuario(usuario)
    {
        return new Promise((resolve, reject) => {
            console.log(usuario);
            var sqlInsere = "INSERT INTO usuario(cpf, senha, nome, celular, telFixo, email, dataNasc) VALUES('" + usuario.cpf +"', '" + usuario.senha + "', '" + usuario.nome+ 
            "', '"+ usuario.celular + "', '" +usuario.telFixo + "', '"+ usuario.email + "', '" + usuario.dataNasc +"')";
            console.log(sqlInsere);
            this._db.query(sqlInsere,
                function(erro) {
                if(erro)
                {
                    console.log(erro);
                    return reject("Inclusão de usuário NÃO foi concluida!"); 
                }
                resolve();
                });
        });
    }




}

module.exports = new UsuariosDAO;