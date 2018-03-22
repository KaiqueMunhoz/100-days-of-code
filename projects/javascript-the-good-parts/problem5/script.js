//Write a function that takes a binary function, and makes ir callable with two invocations.

function add(a, b){
    return a + b;
}
function mul(a, b){
    return a * b;
}

function applyf(operator) {
    return function(a){
        return function(b){
            return operator(a,b);
        };
    };
}

