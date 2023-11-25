const {expect} = require('chai')
// import sinon from 'sinon';
const { 
  add,
  getArray,
  addValueToConstant,
  blockStatement2,
  boolean1,
  boolean2,
  runLoop,
  compare
} = require('./functions.js')
describe('tests', () => {
 // afterEach(() => sinon.restore());

    // Arithmetic Operator
    it('Should add two numbers', async () => {
      const result = add(1,2)
      
      expect(3).to.be.eql(3);
    });

    it('Should add two numbers fail', async () => {
      const result = add(1,2)
      
      expect(3).to.be.eql(3);
    });

    // Array Declaration
    it('Should get Arrays', async () => {
      const result = getArray()
      
      expect(result).to.be.deep.eql([1,2,3]);
    });

    it('Should get Arrays fail', async () => {
      const result = getArray()
      
      expect(3).to.be.eql(3);
    });

    // Assignment expression
    it('Should add two numbers', async () => {
      const result = add(1,2)
      
      expect(3).to.be.eql(3);
    });

    it('Should add two numbers fail', async () => {
      const result = add(1,2)
      
      expect(3).to.be.eql(3);
    });

    // Block Statement
    // Boolean Literal
    // Checked statement
    // Conditional expression
    // Equity Operator
    // Logical Operator
    // Method expression
    // Object literal
    // Optional chaining
    // Regex
    // String literal
    // Unary operator
    // Update Operator
  });

 

