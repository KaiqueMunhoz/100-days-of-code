/*Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".*/

function titleCase(str) {
    var array = str.toLowerCase().split(" ");
    var newArray = [];

    for(var i = 0; i < array.length; i++) {
        newArray[i] = array[i].replace(array[i][0], array[i][0].toUpperCase());
        //console.log(newArray);
    }
    return newArray.join(" ");
}
  
titleCase("I'm a little tea pot");