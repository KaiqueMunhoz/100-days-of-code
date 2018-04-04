let regexp = /a.c/g;
let myString = '234abc123 a4c5';
let match;

while(match = regexp.exec(myString)){
    console.log(`${match[0]} - ${match.index}`);
}