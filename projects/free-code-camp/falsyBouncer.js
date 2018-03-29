/*Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. */


function bouncer(arr) {
    var newArray = [];
    var j = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]){
            newArray[j] = arr[i];
            j++;
        }
    }
    return newArray;
}
  
bouncer([7, "ate", "", false, 9]);