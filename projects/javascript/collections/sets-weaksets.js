//============================ SET
// SET has the methods size(),clear() and has() and work with any properties types.
// SET doesn't work with repetitive values.
// SET doesn't return the values, it just works to validate if we have an item or not
var mySet = new Set();

var a = {myValue: 1},
    b = {myValue: 2};

mySet.add(a);
mySet.add(b);
mySet.add(a); //Will not add this object because the Set object doesn't add the same item twice.

//=============================WEAK MAP
// WeakSet hasn't the methods size() and clear() and just work with properties which are objects.

var mySet2 = new WeakSet();

var c = {myValue: 1},
    d = {myValue: 2};

mySet2.add(c);
mySet2.add(d);