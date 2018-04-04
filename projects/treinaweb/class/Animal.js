class Animal {
    sleep() {
        console.log('zzzzzz');
    }
}

class Dog extends Animal {
    bark() {
        console.log('woof');
    }
    sleep(){
        console.log('The dog will sleep');
        super.sleep();
    }
}

var myDog = new Dog();