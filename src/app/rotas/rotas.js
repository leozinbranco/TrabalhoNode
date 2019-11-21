// chamando a classe clientes_dao


const produtosControlador = require('../controllers/produtos_controler');

const usuarioControlador = require('../controllers/usuarios_controler');

//const usuarioControl = new usuarioControlador();

// instância do BD configurado
var db = require('../../config/database');
//const loginControl = new loginControlador(db)
//const loginControler = new UsuariosControler();

module.exports = (app) => {

    //***************ROTAS***************//
   
    app.get('/', usuarioControlador.exibeFormAcesso()
    );

    
    
    
    app.get('/produtos',produtosControlador.listaProdutos());

    app.get('/carrinho',produtosControlador.listaProdutosCarrinho());

    //app.get()
    
    app.post('/validaAcessoUsuario',usuarioControlador.validaAcessoUsuarioLogin());





// Evitar problema com o CORS
    app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', "http://localhost");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
    });
}