
// In this Kata you should fix/create a program that returns the following values:

// false/False if either a or b (or both) are not numbers
// a % b plus b % a if both arguments are numbers

function myFirstKata(a, b) {
    if (typeof(a) != "number" || typeof(b) != "number") 
      return false
    else return a % b + b % a
}
  console.log(myFirstKata("4",5));