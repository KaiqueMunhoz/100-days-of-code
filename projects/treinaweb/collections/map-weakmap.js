//To put an object in this way inside another object, doesn't work.

// var myObj = {};

// var a = {value: 1},
//     b = {value: 2};

// myObj[a] = 5;
// myObj[b] = 10;

// console.log(myObj) // 10 -> The final value replace the previous

//============================ MAP
// Map has the methods size() and clear() and work with any properties types.
var myObj = new Map();

var a = {value: 1},
    b = {value: 2};

myObj.set(a, 5);
myObj.set(b, 10);

console.log(myObj.get(a), myObj.get(b)) // 5, 10

//=============================WEAK MAP
// WeakMap hasn't the methods size() and clear() and just work with properties which are objects.

var myObj2 = new WeakMap();

var c = {value: 1},
    d = {value: 2};

myObj2.set(c, 5);
myObj2.set(d, 10);

console.log(myObj2.get(c), myObj2.get(d)) // 5, 10



