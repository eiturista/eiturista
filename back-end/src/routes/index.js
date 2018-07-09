'use strict';

const express = require('express');
const router = express.Router();

router.get('/teste', (req, res, next) => {
	res.status(200).send({
		title: "API para o Eiturismo",
		version: "0.0.1"
	});
});

router.get('/', (req, res, next) => {
	res.status(200).render('index.ejs', {title: 'Ei!Turista'});
});

router.get('/apoio', (req, res, next) => {
	res.status(200).render('apoio/apoio.ejs');
});


router.get('/equipe', (req, res, next) => {
	res.status(200).render('equipe/equipe.ejs');
});

router.get('/favoritos', (req, res, next) => {
	res.status(200).render('favoritos/favoritos.ejs');
});

module.exports = router;