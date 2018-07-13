'use strict';

let config = require('../config/config.js');
let sendgrid = require('sendgrid')(config.sendgridKey);

exports.send = async (to, subject, body) => {
	sendgrid.send({
		to: to,
		from: 'eituristacontato@gmail.com',
		subject: subject, 
		html: body
	});
}
