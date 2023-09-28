
// class js
const SuperHero = require('./class');
SuperHero.setName("SuperMan");
console.log(SuperHero.getName());


// module js
const {sum , minus , y} = require('./module_export'); // return accept object in export.module return function 
const number = sum(3,5);
const number_minus = minus(3,5)
console.log('y is ', y);
console.log(number ,'and', number_minus);
 
// import js
const add = require('./import');
const calculate = require('./import');

console.log(calculate.plus(5, 5));
// console.log(add(4,5));