//Write a function that adds from two invocations.

function addf(x) {
    return function (y) {
        return x + y;
    };
}

// var a(3)(4) -> 7