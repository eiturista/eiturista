'use strict';

const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');
// const emailService = require('../services/emailServices');


exports.get = (req,res,next) => {
	Contact.
		find({}, 'name email assunto mensagem')
		.then(data => {
			res.status(200).send(data);
		})
		.catch(e => {
			res.status(400).send(e);
		}); 
}

exports.post = (req,res,next) => {
	let contact = new Contact({
		name: req.body.name,
		email: req.body.email,
		assunto: req.body.assunto,
		mensagem: req.body.mensagem
	});
	 contact.save()
		.then(x => {
			res.status(201).render('contato/contato.ejs', {
				message: 'Mensagem enviada com sucesso!'
			});
		})
		.catch(e => {
			res.status(400).render('contato/contato.ejs', {
				message: 'Erro ao enviar mensagem!'
				// data: e
			});
		}); 
}