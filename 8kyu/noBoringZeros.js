// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway


function noBoringZeros(n) {
    m = n.toString().length
    for (i = 0; i < m; i++){
    if (n % 10 == 0) {n = n / 10}}
    return n
  }
  console.log(noBoringZeros(1450)); //145
  console.log(noBoringZeros(960000000)); // 96
  console.log(noBoringZeros(1050)); // 105
  console.log(noBoringZeros(-1050)); // -105
  console.log(noBoringZeros(-105)); // -105
  console.log(noBoringZeros(0)); // 0