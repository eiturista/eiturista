global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';
global.EMAIL_TMPL = 'Ola!<strong>{0}</strong>! Seja bem vindo ao Eiturismo';

const user = 'root';
const pass = 'Ei!123'
const dbName = 'db_eiturismo';

module.exports = {
	connectionString: `mongodb://${user}:${pass}@ds018558.mlab.com:18558/${dbName}`,
	sendgridKey: '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', 
	containerConnectionString: 'TBD' // armazenar imagens
}