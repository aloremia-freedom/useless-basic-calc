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
	it('add() should return 10 when passed with 7 and 3', () => {
		expect(calc.add(7, 3)).to.equal(10);
	});
	it('add() should return -2 when passed with -5 and 3', () => {
		expect(calc.add(-5, 3)).to.equal(-2);
	});
	it('subtact() should return 10 when passed with 15 and 5', () => {
		expect(calc.subtract(15, 5)).to.equal(10);
	});
	it('subtact() should return 15 when passed with 10 and -5', () => {
		expect(calc.subtract(10, -5)).to.equal(15);
	});
	it('subtact() should return -15 when passed with -10 and 5', () => {
		expect(calc.subtract(-10, 5)).to.equal(-15);
	});
	it('multiply() should return 6 when passed with 3 and 2', () => {
		expect(calc.multiply(3, 2)).to.equal(6);
	});
	it('multiply() should return -6 when passed with 3 and -2', () => {
		expect(calc.multiply(3, -2)).to.equal(-6);
	});
	it('multiply() should return 6 when passed with -3 and -2', () => {
		expect(calc.multiply(-3, -2)).to.equal(6);
	});
} );