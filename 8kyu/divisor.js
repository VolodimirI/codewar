// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)

function divisibleBy(numbers, divisor) {
    let result = [];
    let j = 0;
    for (let i in numbers){
            if (numbers[i]%divisor != 0) {
            console.log("a", "i=",i, numbers[i], "j=",j, result[j-1])}
            else {result[j] = numbers[i]
            console.log("b", "i=",i, numbers[i], "j=",j, result[j])}
        }
  return result;
}
console.log(divisibleBy([1,2,3,4,6], 3)); // [2,4,6]
// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3)); // [3,6]
// console.log(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4)); // [0,4]
// console.log(divisibleBy([0], 4)); // [0]
// console.log(divisibleBy([1, 3, 5], 2)); // []
