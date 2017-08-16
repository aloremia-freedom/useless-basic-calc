let chai = require('chai');
let expect = chai.expect;
let supertest = require('supertest');
let api = supertest('httpL//localhost:3030');

describe('CalculatorAPI', (done) => {
	it('should return a 200 response', (done) => {
		api .get('/presence/')
			.set('Accept', 'application/json')
			.expect(200, done);
	});
});