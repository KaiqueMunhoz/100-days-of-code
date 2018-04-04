let regexp = /abc/;
let myStringTrue1 = 'abc def';
let myStringTrue2 = 'abcd efg';
let myStringTrue3 = 'efg abc';
let myStringFalse = 'abdc efg';

console.log(regexp.test(myStringTrue1)); //true
console.log(regexp.test(myStringTrue2)); //true
console.log(regexp.test(myStringTrue3)); //true
console.log(regexp.test(myStringFalse)); //false