var Dog = {
    name: 'Dingo',
    sayName: function(){
        console.log(this.name);
    }
}

var Cat = {
    name: 'Gumball'
}

Dog.sayName.call(Cat); // Call

//We can also execute an String as if it was an Array

[].forEach.call('my parameter of call', function(letter) {
    console.log(letter);
})