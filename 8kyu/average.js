// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {sum += array[i]}
    sum = sum / array.length;
    return array.length === 0 ? 0 : sum;


// return array.length === 0 ? 0 : array.reduce((acc, ind) => (acc + ind))/array.length
// return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}

  console.log(findAverage([1,2,3, 4]));

//   assert.strictEqual(findAverage([1,1,1]), 1);
//   assert.strictEqual(findAverage([1,2,3]), 2);
//   assert.strictEqual(findAverage([1,2,3,4]), 2.5);

