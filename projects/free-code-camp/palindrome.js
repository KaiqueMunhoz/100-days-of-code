function palindrome(str) {
    var isPalindrome = false;
    var array = str.trim().toLowerCase().replace(/[^a-zA-Z 0-9]+/g, "").split("").filter(
        function (value) {
            return value != " ";
        });
    var normalArray = array.slice();
    var reversedArray = array.reverse();

    for (var i =0; i < array.length; i++){
        if(normalArray[i] !== reversedArray[i]){
            return false;
        }
    }
    return true;
}