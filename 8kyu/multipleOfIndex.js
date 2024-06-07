function multipleOfIndex(array) {
    res = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % i == 0) {
            res.push(array[i])
        }
        else if (array[i] ==0)
            res.push(array[i])
    }
    return res
  }
  console.log(multipleOfIndex([1,2,3,6,9]));