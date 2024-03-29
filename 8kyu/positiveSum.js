// You get an array of numbers, return the sum of all of the positives ones.


function positiveSum(arr) {
    sum = 0;
    for (let i = 0; i < arr.length; i++)
    arr[i] >= 0 ? sum = sum + arr[i] : sum

  return sum
}
console.log(positiveSum([1,2,3,4,5]))