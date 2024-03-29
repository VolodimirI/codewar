// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 

function squareSum(numbers){
    sum = 0;
    for (let i in numbers) {
        sum = sum + numbers[i] * numbers[i]}
    return sum
    }
console.log(squareSum([1,5,2]));