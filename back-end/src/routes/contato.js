'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/contactController');

// router.get('/', controller.get);
router.get('/', (req, res, next) => {
	res.status(200).render('contato/contato.html');
});

router.get('/todos', controller.get);
router.post('/', controller.post);


module.exports = router;