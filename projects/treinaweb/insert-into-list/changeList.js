//1º Step
//Create an array to fill the list and got a reference of the list.
var list = [1,2,3],
    listElement = document.querySelector('ul');

//5º Step
//First of all, we due to put a reference of this new funcion in the HTML file, in the input tag.
//To insert a new element in the array, firt we will make sure if the key 'enter' was pressed.
//later, we used the function push to insert the 'target.value' wich means the value of the input.
//We clean the input tag assignment an empty string.
//Finaly, we call the render function again, to show the new array in the screen.
function insert(event) {
    if(event.keyCode === 13){
        list.push(event.target.value);
        event.target.value = "";
        render();
    }
}

//4º Step
//To remove an element of array, we use the funcion splice and render again.
function remove(index) {
    list.splice(index, 1);
    render();
}

//2º Step
//With the list reference, we will add a new tag with values of array.
//To make this taks, we used the function map to tranform each element of array in a String and create the li tag
//In the end, we joined all peaces in one array again.
function render() {
    listElement.innerHTML = list.map((value, index) => {
      return `<li onclick="remove(${index})">${value}</li>`;  
    }).join("");
}

//3º Step
//Call the fuction for initialize the first array
render();
