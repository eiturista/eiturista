'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	login: {
		type: String,
		require: [true, 'O Login é Obrigatório'],
		unique: true,
		trim: true 
	},
	name: {
		type: String,
		require: true
		// first: String,
		// last: String
	},
	email: {
		type: String,
		require: true,
		unique: true
	},
	password: {
		type: Number,
		require: true 
	},
	favoritos:[{
		type: String
	}],
});

module.exports = mongoose.model('User', schema);