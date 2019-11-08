// chamando a classe clientes_dao
const ClientesDAO = require('../BD/produtos_dao');
const loginControlador = require('../BD/usuarios_controler');
const loginControl = new loginDAO();
// instância do BD configurado
var db = require('../../config/database');

module.exports = (app) => {

    //***************ROTAS***************//
   
    app.get('/', loginControlador.  )
        
    });

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