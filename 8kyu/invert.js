// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.


function invert(array) {


    for (let i in array) array[i] = -array[i]
    return array
 }
 console.log(invert([1,-2,3,4,5]))