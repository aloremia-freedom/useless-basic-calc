let chai = require('chai');
let expect = chai.expect;
let supertest = require('supertest');
let api = supertest('http://localhost:3030');

describe('CalculatorAPI', (done) => {
	it('should return a 200 response', (done) => {
		api .get('/')
			.set('Accept', 'application/json')
			.expect(200, done);
	});
	it('should return 2 + 3 = 5', (done) => {
		api .get('/add/2/3')
			.set('Accept', 'application/json')
			.expect(200)
			.end((err, res) => {
				expect(res.body.a).to.equal(2); 
				expect(res.body.b).to.equal(3); 
				expect(res.body.result).to.equal(5);
				done();
			});
	});
	it('should return 2 - 3 = -1', (done) => {
		api .get('/subtract/2/3')
			.set('Accept', 'application/json')
			.expect(200)
			.end((err, res) => {
				expect(res.body.a).to.equal(2); 
				expect(res.body.b).to.equal(3); 
				expect(res.body.result).to.equal(-1); 
				done();
			});
	});
	it('should return 2 * 3 = 6', (done) => {
		api .get('/multiply/2/3')
			.set('Accept', 'application/json')
			.expect(200)
			.end((err, res) => {
				expect(res.body.a).to.equal(2); 
				expect(res.body.b).to.equal(3); 
				expect(res.body.result).to.equal(6); 
				done();
			});
	});
});