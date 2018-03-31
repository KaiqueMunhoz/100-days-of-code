/*You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. */

function destroyer(elements) {

    var remainings = [];

    for(var i = 1; i < arguments.length; i++){
        remainings.push(arguments[i]);
    }

    return elements.filter(function(element){
        return !remainings.includes(element);
    });

    return elements;
}
  
destroyer([2, 3, 2, 3], 2, 3)
  