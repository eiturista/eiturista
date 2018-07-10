'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/config');
const nunjucks = require('nunjucks');


const app = express();
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.set('view engine', 'njk');
app.use('/public', express.static('public'));

const router = express.Router();

// Conecta ao Banco
mongoose.connect(config.connectionString);

// Carrega os Models
const User = require('./models/Users');
const Contact = require('./models/Contact');

// Carrega as Rotas
const indexRoute = require('./routes/index');
const userRoute  = require('./routes/user');
const contatoRoute  = require('./routes/contato');

// Todo conteudo é convertido para JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
	extended: false 
}));


app.use('/', indexRoute);
app.use('/users', userRoute);
app.use('/contato', contatoRoute);


module.exports = app;