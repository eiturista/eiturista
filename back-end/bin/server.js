'use strict'
const app = require('../src/app');
const debug = require('debug')('nodestr:server');
const http = require('http');
const normalizePort = require('normalize-port'); 

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('listening', onListening);
console.log(`Rodando na porta ${port}`)

function onListening(){
	const addr = server.address();
	const bind = typeof addr === 'String'
		? 'pipe' + addr 
		: 'port' + addr.port;
	debug('Listening on ' + bind);
}