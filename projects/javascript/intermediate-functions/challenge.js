//Create a sum with this structure sum(a)(b)

function sum(a){
    return function(b){
        return a + b;
    }
}