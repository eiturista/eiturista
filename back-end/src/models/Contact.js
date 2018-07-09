'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	name: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true
	},
	assunto: {
		type: String,
		require: true 
	},
	messagem: {
		type: String,
		require: true
	},
});

module.exports = mongoose.model('Contact', schema);