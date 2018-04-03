let myString = 'abc Abc aBc abC';

console.log(myString.replace('a', '1')); //Just the first 'a' was replaced.
console.log(myString.replace(/b/gi, '1')); //All 'b' was replaced because the 'g' flag is for all occurrence and the 'i' flag is for no case sensitivity

let myString2 = 'abc-123-def';
let myRegex = /abc-(\d{3})-def/; //Put the digits between parentheses to extract them.

console.log(myString2.replace(myRegex, 'My number is: $1'));//Use $1 to get the number extracted.