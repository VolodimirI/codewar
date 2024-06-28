function fakeBin(x){
    let letter = '';
    for(let i = 0; i < x.length; i++) {
        if (x.at(i) < '5') {letter = letter + '0'}
        else letter = letter + '1';
    }
    return letter
}
// function fakeBin(x){
//  return x.replace(/[1-4]/g,'0').replace(/[5-9]/g,'1');
// }
console.log(fakeBin("45385593107843568")); //01011110001100111
console.log(fakeBin("509321967506747")); //101000111101101
console.log(fakeBin("366058562030849490134388085")); //011011110000101010000011011