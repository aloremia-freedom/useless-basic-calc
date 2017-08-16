let chai = require('chai');
let expect = chai.expect;
let calc;
try {
	calc = require('./../src/calculator');
}
catch (e) {
	calc = null;
}

describe('Calculator', () => {
	it('Calculator should not be null', () => {
		expect(calc !== null).to.equal(true);
	});
} );