'use strict';

let config = ('../config/config');
let sendgrid = require('sendgrid')(config.sendgridKey);

exports.send = async (to, subject, body) => {
	sendgrid.send({
		to: to,
		subject: 'eiturismocontato@gmail.com',
		body: body
	});
}