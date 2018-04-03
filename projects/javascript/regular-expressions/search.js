//The search methods works equals the indexOf method.

var myName = 'Kaique';

console.log(myName.search(/\w{6}/)); //True or 0
console.log(myName.search(/\w{7}/)); //False or -1