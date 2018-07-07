/**
 * Controller de autenticação
 */
const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/cadastrar', async (request, response) => {
	try {
		const user = User.create(request.body);

		return response.send({ user });
	} catch (err) {
		return response.status(400).send({ error: 'Falha ao Cadastrar failed' });
	}
});


module.exports = app => app.use('/auth', router);