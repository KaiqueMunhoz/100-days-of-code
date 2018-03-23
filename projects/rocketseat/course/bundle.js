"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//==================ES6====================
//==========CLASS==PARENT====================
var List =
/*#__PURE__*/
function () {
  //Constructor to initialize the variables
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  } //Method/Function


  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}(); //============CLASS===CHILD====================


var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    _classCallCheck(this, TodoList);

    //Constructor of father
    return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call(this));
  }

  return TodoList;
}(List); //==================TO===TEST====================


var MyList = new TodoList();

document.getElementById('newTodo').onclick = function () {
  MyList.add();
}; //==================STATIC====================


var Mathematics =
/*#__PURE__*/
function () {
  function Mathematics() {
    _classCallCheck(this, Mathematics);
  }

  _createClass(Mathematics, null, [{
    key: "sun",
    value: function sun(a, b) {
      return a + b;
    }
  }]);

  return Mathematics;
}(); //====================CONST=================


var a = 1; //The value can't be reassignment

var user = {
  name: 'Kaique'
};
user.name = 'Munhoz'; //But can muttate the value.
//====================LET=================
//Let has block scope.

function test(x) {
  var y = 2; //Only exists inside this function

  if (x > 5) {
    console.log(x, y);
  }
}

console.log(y); //Error: The variable is undefinied

test(10); //Run perfectly
//================ARRAY=============================

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //map: Work with each index of an array, given the value and it's respective index;

var newArrMap = arr.map(function (item, index) {
  return item * 2;
});
console.log(newArrMap); //reduce: Return/Transform the array in one value.

var newArrReduce = arr.reduce(function (total, next) {
  return total + next;
});
console.log(newArrReduce); //filter: receive a condition and when result in true, return that value.

var newArrFilter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(newArrFilter); //find: receive a condition and show if this value exists into array.

var newArrFind = arr.find(function () {
  return item === 4; //return 4
  //return item === 2; //return undefined
});
console.log(newArrFind); //===================ARROW===FUNCTION==========

var newArrowFunctionMap = arr.map(function (item) {
  return item * 2;
});
console.log(newArrowFunctionMap);
var newArrowFunctionReduce = arr.reduce(function (item, next) {
  return item + next;
});
console.log(newArrowFunctionReduce);
var newArrowFunctionFilter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(newArrowFunctionFilter);
var newArrowFunctionFind = arr.find(function (item) {
  return item === 4;
});
console.log(newArrowFunctionFind); //===================VALUES===DEFAULT==========
//Values default to paramters

function multiply() {
  var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return c * d;
}

console.log(multiply(1)); //Will assign the value to 'c' and use the value 2 of d to make the multiply.
//==================DESTRUCTURING===================

var user2 = {
  name: 'Kaique',
  age: 23,
  address: {
    city: 'Guaxupé',
    state: 'Minas Gerais'
  }
}; //Old
// const name = user2.name;
// const age = user2.age;
// const city = user.address.city;

var name = user2.name,
    age = user2.age,
    city = user2.address.city; // With Destructuring we can declare some variables or even properties of objects in one line;

console.log(name);
console.log(age);

function showName(_ref) {
  var name = _ref.name,
      age = _ref.age;
  //Because I know that the object has the property name and age, I can pass directly this propertys like params
  console.log(name + " is " + age + " old.");
}

showName(user2); //==================REST===================
//Rest of properties

var user3 = {
  otherName: 'Kaique',
  age: 23,
  company: 'BLP'
};

var otherName = user3.otherName,
    rest = _objectWithoutProperties(user3, ["otherName"]);

console.log(otherName); //Kaique

console.log(rest); // {age: 23, company: 'BLP'}

function sum3() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  //Using like a param
  return params.reduce(function (item, next) {
    return item + next;
  });
}

console.log(sum3(1, 2, 3, 4, 5)); //==================SPREAD===================
//Propagate the informations to others

var arr3 = [1, 3, 5, 7];
var arr4 = [2, 4, 6, 8];
var arr5 = arr3.concat(arr4); //1,3,5,7,2,4,6,8

var user4 = {
  otherName2: 'Kaique',
  age2: 23,
  company2: 'BLP'
};

var user5 = _objectSpread({}, user4, {
  otherName2: 'Munhoz'
});

console.log(user5.otherName2); //Munhoz

console.log(user5.age2); //23

console.log(user5.company2); //BLP
//==================TEMPLATE===LITERALS===================

var dog = "Bruce";
var adjective = "fast"; //Old
//console.log("My " + dog + " is very " + adjective);

console.log("My ".concat(dog, " is very ").concat(adjective)); //New way
//===========OBJECT===SHORT===SYNTAX===============

var name7 = 'Kaique';
var age7 = 23;
var user7 = {
  name7: name7,
  age7: age7,
  company7: 'BLP'
};
console.log(user7);
