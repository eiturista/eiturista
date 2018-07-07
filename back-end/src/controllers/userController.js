'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = (req,res,next) => {
	User.
		find({}, 'login name email favoritos')
		.then(data => {
			res.status(200).send(data);
		})
		.catch(e => {
			res.status(400).send(e);
		}); 
}

exports.getByLogin = (req,res,next) => {
	User.
		findOne({
			login: req.params.login
		}, 'login name email favoritos')
		.then(data => {
			res.status(200).send(data);
		})
		.catch(e => {
			res.status(400).send(e);
		}); 
}

exports.getById = (req,res,next) => {
	User.
		findById(req.params.id)
		.then(data => {
			res.status(200).send(data);
		})
		.catch(e => {
			res.status(400).send(e);
		}); 
}

exports.post = (req,res,next) => {
	let user = new User(req.body);
	user.save()
		.then(x => {
			res.status(201).send({ 
				message: 'Turista cadastrado com sucesso! Faça as malas!'
			});
		})
		.catch(e => {
			res.status(400).send({ 
				message: 'Falha ao cadastrar Turista', 
				data: e
			});
		}); 
}

exports.put = (req,res,next) => {
	const id = req.params.id;
	res.status(200).send({
		id: id,
		item: req.body
	});
}

exports.delete = (req,res,next) => {
	res.status(200).send(req.body); 
}