'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');
const md5 = require('md5');
const emailService = require('../services/emailServices');

exports.get = (req,res,next) => {
	User.
		find({}, 'login name email password favoritos')
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

exports.getByFavorito = (req,res,next) => {
	User.
		find({
			favoritos: req.params.favorito
		})
		.then(data => {
			res.status(200).send(data);
		})
		.catch(e => {
			res.status(400).send(e);
		}); 
}

exports.post = async (req,res,next) => {
	let user = new User({
		login: req.body.login,
		name: req.body.name,
		email: req.body.email,
		password: md5(req.body.password + global.SALT_KEY),
		favoritos: req.body.favoritos
	});
	await user.save()
		.then(x => {
			// emailService.send(
			// 	req.body.email, 
			// 	'Bem vindo ao EiTurismo', 
			// 	global.EMAIL_TMPL.replace('{0}', req.boby.name));
			res.status(201).send({ 
				message: 'Turista cadastrado com sucesso! Faça as malas!'
			});
		})
		.catch(e => {
			res.status(400).send({ 
				message: 'Falha ao cadastrar Turista!', 
				data: e
			});
		}); 
}

exports.put = (req,res,next) => {
	User.
		findByIdAndUpdate(req.params.id, {
			$set: {
				login: req.body.login,
				name: req.body.name,
				email: req.body.email
			}
		})
		.then(x => {
			res.status(200).send({ 
				message: 'Turista atualizado com Sucesso!'
			});
		})
		.catch(e => {
			res.status(400).send({ 
				message: 'Falha ao atualizado Turista!', 
				data: e
			});
		}); 
}

exports.delete = (req,res,next) => {
	User.
		findOneAndRemove({ _id: req.body.id})
		.then(x => {
			res.status(200).send({ 
				message: 'Turista removido com Sucesso!'
			});
		})
		.catch(e => {
			res.status(400).send({ 
				message: 'Falha ao remover Turista!', 
				data: e
			});
		});
}