function sumMul(n,m){
    let sum = 0;
    if (m > 0) {

    for (let i = 0; i < m; i = i + n){
        sum = sum + i;
        // console.log('i =', i, ', sum =', sum);
    }
    return sum
}
else return "INVALID"
    }

    // console.log(sumMul(0,0)); //"INVALID"
console.log(sumMul(2,9)); //20
console.log(sumMul(4,-7)); //"INVALID"
console.log(sumMul(4,123)); //1860
console.log(sumMul(123,4567)); //86469