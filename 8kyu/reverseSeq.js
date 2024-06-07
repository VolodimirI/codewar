const reverseSeq = n => {
    let mas = [];
    for (let i = n; i > 0; i--) {
        mas.push(i);
    }
    return mas;
  };
console.log(reverseSeq(6));