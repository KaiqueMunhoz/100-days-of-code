//==================ES6====================

//==========CLASS==PARENT====================
class List{

    //Constructor to initialize the variables
    constructor() {
        this.data = [];
    }
    
    //Method/Function
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

//============CLASS===CHILD====================
class TodoList extends List {
    constructor() {
        //Constructor of father
        super();
    }


}

//==================TO===TEST====================
const MyList = new TodoList();

document.getElementById('newTodo').onclick = function() {
    MyList.add();
}

//==================STATIC====================

class Mathematics {
    static sun(a ,b) {
        return a + b;
    }
}

//====================CONST=================

const a = 1; //The value can't be reassignment
const user = {name: 'Kaique'};
user.name = 'Munhoz'; //But can muttate the value.

//====================LET=================

//Let has block scope.
function test(x) {
    let y = 2; //Only exists inside this function

    if (x > 5) {
        console.log(x, y);
    }
}

console.log(y); //Error: The variable is undefinied

test(10); //Run perfectly

//================ARRAY=============================

const arr = [1,2,3,4,5,6,7,8,9,10];

//map: Work with each index of an array, given the value and it's respective index;
const newArrMap = arr.map(function(item, index){
    return item * 2;
});

console.log(newArrMap);

//reduce: Return/Transform the array in one value.
const newArrReduce = arr.reduce(function(total, next){
    return total + next;
});
console.log(newArrReduce);

//filter: receive a condition and when result in true, return that value.
const newArrFilter = arr.filter(function(item){
    return item % 2 === 0;
});
console.log(newArrFilter);

//find: receive a condition and show if this value exists into array.
const newArrFind = arr.find(function(){
    return item === 4; //return 4
    //return item === 2; //return undefined
});
console.log(newArrFind);

//===================ARROW===FUNCTION==========

const newArrowFunctionMap = arr.map(item => item * 2);
console.log(newArrowFunctionMap);

const newArrowFunctionReduce = arr.reduce((item, next)=> item + next);
console.log(newArrowFunctionReduce);

const newArrowFunctionFilter = arr.filter(item => item % 2 === 0);
console.log(newArrowFunctionFilter);

const newArrowFunctionFind = arr.find(item => item === 4);
console.log(newArrowFunctionFind);

//===================VALUES===DEFAULT==========
//Values default to paramters
function multiply(c = 3, d = 2) {
    return c * d;
}

console.log(multiply(1)); //Will assign the value to 'c' and use the value 2 of d to make the multiply.

//==================DESTRUCTURING===================
const user2 = {
    name: 'Kaique',
    age: 23,
    address: {
        city: 'Guaxupé',
        state: 'Minas Gerais'
    }
};

//Old

// const name = user2.name;
// const age = user2.age;
// const city = user.address.city;

const {name, age, address: {city} } = user2; // With Destructuring we can declare some variables or even properties of objects in one line;

console.log(name);
console.log(age);

function showName ({ name, age }){ //Because I know that the object has the property name and age, I can pass directly this propertys like params
    console.log(name + " is " + age + " old.");
}

showName(user2);

//==================REST===================
//Rest of properties

const user3 = {
    otherName: 'Kaique',
    age: 23,
    company: 'BLP'
}

const {otherName, ...rest} = user3;
console.log(otherName); //Kaique
console.log(rest); // {age: 23, company: 'BLP'}

function sum3 (...params) { //Using like a param
    return params.reduce((item, next) => item + next );
}
console.log(sum3(1,2,3,4,5));

//==================SPREAD===================
//Propagate the informations to others

const arr3 = [1,3,5,7];
const arr4 = [2,4,6,8];
const arr5 = [...arr3, ...arr4];//1,3,5,7,2,4,6,8

const user4 = {
    otherName2: 'Kaique',
    age2: 23,
    company2: 'BLP'
}

const user5 = {...user4, otherName2: 'Munhoz'};

console.log(user5.otherName2); //Munhoz
console.log(user5.age2); //23
console.log(user5.company2); //BLP

//==================TEMPLATE===LITERALS===================

const dog = "Bruce";
const adjective = "fast";

//Old
//console.log("My " + dog + " is very " + adjective);

console.log(`My ${dog} is very ${adjective}`); //New way

//===========OBJECT===SHORT===SYNTAX===============

const name7 = 'Kaique';
const age7 = 23;

const user7 = {
    name7,
    age7,
    company7: 'BLP'
}

console.log(user7);



































