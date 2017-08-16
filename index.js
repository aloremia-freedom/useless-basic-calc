let express = require('express');
let calc = require('./src/calculator.js');
let app = express();

app.get('/', (req, res) => {
	res.send('CalculatorAPI is Running');
});

app.get('/add/:a/:b', (req, res) => {
	let a = Number(req.params.a),
		b = Number(req.params.b);
	res.send({
		a,
		b,
		result: calc.add(a, b)
	});
});

app.get('/subtract/:a/:b', (req, res) => {
	let a = Number(req.params.a),
		b = Number(req.params.b);
	res.send({
		a,
		b,
		result: calc.subtract(a, b)
	});
});

app.get('/multiply/:a/:b', (req, res) => {
	let a = Number(req.params.a),
		b = Number(req.params.b);
	res.send({
		a,
		b,
		result: calc.multiply(a, b)
	});
});

var server = app.listen(3030, () => {
	let host = server.address().address,
		port = server.address().port;

	console.log('CalculatorAPI running at http://%s:%s', host, port);
});