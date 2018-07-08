'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/config');

const app = express();
const router = express.Router();

// Conecta ao Banco
mongoose.connect(config.connectionString);

// Carrega os Models
const User = require('./models/Users');

// Carrega as Rotas
const indexRoute = require('./routes/index');
const userRoute  = require('./routes/user');

// Todo conteudo é convertido para JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
	extended: false 
}));

app.use('/', indexRoute);
app.use('/users', userRoute);


module.exports = app;