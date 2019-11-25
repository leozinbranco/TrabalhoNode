// chamando a classe clientes_dao


const produtosControlador = require('../controllers/produtos_controler');

const usuarioControlador = require('../controllers/usuarios_controler');

//const usuarioControl = new usuarioControlador();

// instância do BD configurado
var db = require('../../config/database');
//const loginControl = new loginControlador(db);
//const loginControler = new UsuariosControler();

module.exports = (app) => {

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', "http://localhost");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
        });

    //***************ROTAS***************//
    app.get('/', usuarioControlador.exibeFormAcesso());
    
    app.get('/registroUsuario',usuarioControlador.exibeFormRegistroUsuario());
    
    app.get('/produtos',produtosControlador.listaProdutos());

    //app.get('/pedidos',produtosControlador.listaPedidos());

    app.get('/carrinho',produtosControlador.listaProdutosCarrinho());

    app.get('/pedidos', produtosControlador.listaProdutosPedidos());

    //app.get()
    app.get('/removeProdutoCarrinho/:codProdCarrinho',produtosControlador.excluirProdutoCarrinho());
    //,produtosControlador.excluirProdutoCarrinho());
    
    app.post('/validaAcessoUsuario',usuarioControlador.validaAcessoUsuarioLogin());

    app.post('/registroUsuarioBD',usuarioControlador.inserirUsuario());
    
    app.get('/inserirProdCarrinhos/:idProd',produtosControlador.inserirProdutoCarrinho()); 

    app.get('/deslogar',usuarioControlador.excluirSessions());






}