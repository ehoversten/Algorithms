
/*  ------------------------------------------------------
//  Implement reverseString that given a string, returns that string with
//  characters reversed.
//
*/ //------------------------------------------------------

function reverseString(str){
    var arr = [];
    var left = 0;
    var right = str.length -1;
    while (left < right){
        arr[left] = str[right];
        arr[right] = str[left];
        left++;
        right--;
    }
    str = arr.join("");
    return str;
}

reverseString("creature");

// ----------------------------------------- //

function rvsString(str) {
  var arr = [];
  for(var i = str.length-1; i >=0; i--) {
      arr += str[i];
  }
  return arr;
}


rvsString("creature");
