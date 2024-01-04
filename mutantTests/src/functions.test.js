const {expect} = require('chai')
// import sinon from 'sinon';
const functions = require('./functions.js');
const { 
  add,
  getArray,
 
  blockStatement1,

  runLoop,
} = functions;

const Sinon = require('sinon');
describe('tests', () => {
 // afterEach(() => sinon.restore());

    // Arithmetic Operator
    // it('Should add two numbers', async () => {
    //   const result = add(1,2)
      
    //   expect(result).to.be.eql(3);
    // });

    it('Should add two numbers fail', async () => {
      const result = add(1,2)
      const response = 'resposta_da_api'
      expect(response).to.be.eql('resposta_da_api');
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

    
    // Block Statement
    it('Should run loop 10 times', async () => {
      // const blockSpy = Sinon.spy(functions)
      const res = runLoop(10);
      expect(res.count).to.be.equal(10)
    });

    // it('Should run loop 10 times fail', async () => {
    //   // const blockSpy = Sinon.spy(functions)
    //   const c = runLoop(10);
    //   expect(c.name).to.be.equal('runLoop')
    // });

    // Assignment expression
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

 

