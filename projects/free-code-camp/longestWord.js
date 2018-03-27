/*Return the length of the longest word in the provided sentence.

Your response should be a number.*/
function findLongestWord(str) {
    var array = str.split(" ");
    var greater = 0;
    for(var i = 0; i < array.length; i++) {
        if(array[i].length > greater){
            greater = array[i].length;
            console.log(greater);
        }
    }
    return greater;
}

findLongestWord("The quick brown fox jumped over the lazy dog");