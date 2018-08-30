/*  ------------------------------------------------------
//  Create a function that returns a boolean whether the string is a strict palindrome.
//  For "a x a" or "racecar", return TRUE. Do not ignore spaces, punctuation and capitalization
//  given "Dud" or "oho!", return false.
//
*/ //------------------------------------------------------


// Compare by checking each letter in turn - first with last / second with second to last ....
//     |           |   ->     |       |     ->       |   |      ->          |
//     r a c e c a r        r a c e c a r        r a c e c a r        r a c e c a r


function isPalindrome(str){
    var left = 0;
    var right = str.length - 1;
    while (left < right){
        if (str[left] != str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}


isPalindrome("racecar") // true
isPalindrome("a x a") // true
isPalindrome("Dud") // false
isPalindrome("oho!") // false

// ---------------------------------------
//
// Compare by creating a reversed version of input str and evaluating by string comparison
//

function otherPalindrome(str) {

  let reverseArr = [];

  for(var i = str.length-1; i >= 0; i--) {
    reverseArr.push(str[i]);
  }
  // console.log(reverseArr);
  rvsWord = reverseArr.join("");
  // console.log(rvsWord);

  if(str == rvsWord) {
    return true;
  } else {
    return false;
  }

}

otherPalindrome("racecar") // true
otherPalindrome("a x a") // true
otherPalindrome("Dud") // false
otherPalindrome("oho!") // false

// ----------------------------------------
//
// Compare as abobe using built in helper functions()

function palindrome(str) {
  // var re = /[\W_]/g;
  // var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = str.split('').reverse().join('');
  if(str == reverseStr) {
    return true;
  } else {
    return false;
  }
}
