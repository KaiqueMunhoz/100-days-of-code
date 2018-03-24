function palindrome(str) {
    var isPalindrome = false;
    var array = str.trim().toLowerCase().replace(/[^a-zA-Z 0-9]+/g, "").split("").filter(
        function (value) {
            return value != " ";
        });
    var arrayNormal = array.slice();
    var arrayReversed = array.reverse();

    for (var i =0; i < array.length; i++){
        if(arrayNormal[i] !== arrayReversed[i]){
            return false;
        }
    }
    return true;
}