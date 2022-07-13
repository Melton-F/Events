const Math = require('./test-module1')
const calc2 = require('./test-modules2')

const calc1 = new Math();
console.log(calc1.add(5,6));
console.log(calc2.divi(2,4));

// const{addi, div} = require('./test-modules2')
// console.log(addi(1,1));

const test3 = require('./test-modules2')();
console.log(test3);