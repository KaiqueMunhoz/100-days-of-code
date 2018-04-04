var myObj = {
    name: 'TreinaWeb',
    sayName(){
        console.log(this.name);
        setTimeout(() => { //Arrow Function doesn't have scope.
            console.log(this.name); 
        }, 1000);
    }
}

var myObj2 = {
    name: 'TreinaWeb',
    sayName : () => { //ERROR -> Without Scope
        console.log(this.name);
        setTimeout(() => { //Arrow Function doesn't have scope.
            console.log(this.name); 
        }, 1000);
    }
}