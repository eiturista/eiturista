'use strict';

let config = require('../config/config.js');
let sendgrid = require('sendgrid')(config.sendgridKey);
let template = require('../services/template-email');

exports.send = async (to, subject, body) => {
	sendgrid.send({
		to: to,
		from: 'eituristacontato@gmail.com',
		subject: subject, 
		html: template.email_tamplate
	});
}
