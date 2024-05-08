// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1c

function strCount(str, letter){
    let j = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str.includes(letter, i)) {i = str.indexOf(letter, i); j = j + 1;
    }
      }
    return j
  };

console.log(strCount('Hello', 'o')); // 1
console.log(strCount('Hello', 'l')); // 2
console.log(strCount('', 'z')); // 0
        // console.log("i1 =", i, "j1 =", j, str.length);

        // console.log("i2 =", i, "j2 =", j, str.length);
