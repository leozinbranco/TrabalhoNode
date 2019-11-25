

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const rotas = require('../app/rotas/rotas');

const session = require('express-session');
const express_store = require('express-mysql-session')(session);
   


rotas(app);
require('marko/node-require').install();
require('marko/express');





app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    secret: 'odesempre',
    saveUninitialized: true,
    resave: true,
    store: session_store
}));




var opcoes = {
    host:'localhost',
    port:3306,
    user:'root',
    password:'',
    database:'nodevesp'
}
var session_store = new express_store(opcoes);


module.exports = app;