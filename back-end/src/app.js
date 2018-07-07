const express = require('express');

const app = express();
const router = express.Router();

let route = router.get('/', (req, res, next) => {
	res.status(201).send({
		title: "API para o Eiturismo",
		version: "0.0.1"
	});
});

let create = router.get('/create', (req, res, next) => {
	res.status(201).send({
		title: "Bora criar"
		// version: "0.0.1"
	});
});

app.use('/', route);
app.use('/create', create);

module.exports = app;