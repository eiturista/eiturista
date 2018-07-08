global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';
global.EMAIL_TMPL = '<strong>{0}</strong>';

const user = 'root';
const pass = 'Ei!123'
const dbName = 'db_eiturismo';

module.exports = {
	connectionString: `mongodb://${user}:${pass}@ds018558.mlab.com:18558/${dbName}`,
	sendgridKey: 'TBD', // para enviar email
	containerConnectionString: 'TBD' // armazenar imagens
}