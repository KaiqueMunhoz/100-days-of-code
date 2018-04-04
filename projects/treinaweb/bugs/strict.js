"use strict"

function myLoop(){
    
    for (i = 0; i < array.length; i++) { //Error, global variable
        console.log(i);
    }
}

myLoop();

function Pencil(){
    this.color = 'red';
}

var myPencil = Pencil(); //Error, 'this' with global scope.