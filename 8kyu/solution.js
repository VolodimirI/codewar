// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

function solution(a, b){
    if (a.length > b.length) {short = b; long = a}
    else {short = a; long = b}

    return short+long+short

  }


  console.log(solution('', '1')); //1451
  console.log(solution('13', '200')); //1320013
  console.log(solution('Soon', 'Me')); //MeSoonMe
  console.log(solution('U', 'False')); //UFalseU  