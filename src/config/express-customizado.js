

require('marko/node-require').install();
require('marko/express');

const express = require('express');

const session = require('express-session');
const express_store = require('express-mysql-session')(session);
   
const app = express();




const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
    extended: true
}));

const methodOverride = require('method-override');


var opcoes = {
    host:'localhost',
    port:3306,
    user:'root',
    password:'',
    database:'trabnodevesp19367'
}

var session_store = new express_store(opcoes);





app.use(methodOverride(function (req,res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) 
    {
      var method = req.body._method;
    delete req.body._method;
    return method;
    }
}));

app.use(session({
    secret: 'odesempre',
    saveUninitialized: true,
    resave: true,
    store: session_store
}));



app.use('/caminho',express.static('src/app/views'));

const rotas = require('../app/rotas/rotas');
rotas(app);




module.exports = app;