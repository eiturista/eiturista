'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).send({
		title: "API para o Eiturismo",
		version: "0.0.1"
	});
});

router.get('/home', (req, res, next) => {
	res.status(200).render('index.ejs');
});

module.exports = router;