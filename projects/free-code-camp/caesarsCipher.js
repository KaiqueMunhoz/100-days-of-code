/*One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */

//ABCDEFGHIJKLM NOPQRSTUVWXYZ
//NOPQRSTUVWXYZ ABCDEFGHIJKLM

function rot13(str) { // LBH QVQ VG!
    
    var alphabet = {
        "65": '78',
        "66": '79',
        "67": '80',
        "68": '81',
        "69": '82',
        "70": '83',
        "71": '84',
        "72": '85',
        "73": '86',
        "74": '87',
        "75": '88',
        "76": '89',
        "77": '90',
        "78": '65',
        "79": '66',
        "80": '67',
        "81": '68',
        "82": '69',
        '83': '70',
        "84": '71',
        "85": '72',
        "86": '73',
        "87": '74',
        "88": '75',
        "89": '76',
        "90": '77',
        "32": '32',
        "33": '33',
        "63": '63',
        "46": '46',
        "32": '32',
        "33": '33',
        "63": '63',
        "46": '46'
    };

    var arrayOfUnicodes = [];
    var arrayOfUnicodesChanged = [];
    var arrayAfterTransform = [];
    
    //Transform the characteres to unicodes
    for(var i = 0; i < str.length; i++){
        arrayOfUnicodes[i] = str.charCodeAt(i).toString(); 
    }
    //Changed the unicodes
    arrayOfUnicodes.filter(function(element){
        arrayOfUnicodesChanged.push(alphabet[element]);
    });
    //Transform the unicodes to characteres
    for(var j = 0; j < arrayOfUnicodesChanged.length; j++){
        arrayAfterTransform.push(String.fromCharCode(arrayOfUnicodesChanged[j]));
    }

    return arrayAfterTransform.join('');

    // console.log(arrayOfUnicodes);
    // console.log(arrayOfUnicodesChanged);
    // console.log(arrayAfterTransform);
}

// Change the inputs below to test
rot13("SERR CVMMN!")