global.window = global;
// global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('example', () => {
<<<<<<< HEAD
  it('debería ser una función', () => {
    expect(typeof example).toBe('function');
  });

  it('debería retornar "example"', () => {
    expect(typeof example).toBe('string');
    expect(example()).toBe('example');
  });
=======
 it('debería ser una función', () => {
   expect(typeof example).toBe('function');
 });

 it('debería retornar "example"', () => {
   expect(typeof example).toBe('string');
   expect(example()).toBe('example');
 });
>>>>>>> 74011456685f949d14ad57c653106fdd5d7a4164
});

