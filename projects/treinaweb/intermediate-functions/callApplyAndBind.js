// var myObj = {
//     name: 'TreinaWeb',
//     sayName(){
//         console.log(this.name);
//         setTimeout(function(){
//             console.log(this.name); //ERROR
//         }, 1000);
//     }
// }

//BIND
var myObj = {
    name: 'TreinaWeb',
    sayName(){
        console.log(this.name);
        setTimeout(function(){
            console.log(this.name); 
        }.bind(this), 1000); //Bind references the this correct.
    }
}
//CALL
//myFunc.call(this, 1, 2, 3);

//APPLY
//myFunc.apply(this, [1, 2, 3]);