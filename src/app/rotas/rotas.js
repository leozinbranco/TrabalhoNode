// chamando a classe clientes_dao
const ClientesDAO = require('../BD/produtos_dao');
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

    /* ROTA COM /clientes */
    
    
    app.get('/produtos', function(req,res) {   
    const clienteDAO = new ClientesDAO(db);   
        clienteDAO.listagemClientes(function(error, dados, fields) {       
            res.marko(
                    require('../views/produtos/listagemProdutos.marko'),
                    {
                    clientes: dados
                    }
            );
        });
    });
    





// Evitar problema com o CORS
    app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', "http://localhost");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
    });
}