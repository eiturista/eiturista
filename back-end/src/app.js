'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// carrega as Rotas
const indexRoute = require('./routes/index');
const userRoute  = require('./routes/user');

// Todo conteudo é convertido para JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
	extended: false 
}));

app.use('/', indexRoute);
app.use('/', userRoute);


module.exports = app;