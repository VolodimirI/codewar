const reverseSeq = n => {
    let mas = [];
    for (let i = n - 1; i => 0; i--) {
        mas[i-1] = n - i;
    }
    return mas;
  };
console.log(reverseSeq(6));