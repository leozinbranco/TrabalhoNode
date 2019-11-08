class UsuariosDAO 
{
  // construtor da classe
  constructor(db) 
  {
    this._db = db;
  }

   validaAcessoUsuario(login,senha) {
     return new Promise((resolve, reject) => {
        console.log("LOGIN DA VALIDACAO = " + login);
        console.log("SENHA DA VALIDACAO = " + senha);
        var sqlCons = "SELECT * FROM USUARIOS WHERE loginUsr='" + login +
            "' and senhaUsr='" + senha + "'";
        console.log(sqlCons);
        this._db.query(sqlCons, function (erro,resultado) {
            // aqui estou checando se o retorno do SELECT trouxe dados
            console.log(resultado);
            if (resultado.length > 0) {
                var dados = resultado.length;
                console.log("fez login");
                resolve(dados);
            }
            else { 
                return reject('ACESSO NEGADO!');
            }
        });
    });
   }  // end do validaAcessoUsuario




}

module.exports = UsuariosDAO;