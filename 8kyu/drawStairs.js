function drawStairs(n) {
    var a = '';
    let b = ' ';
    let c = ' ';

for (i = 1; i < n + 1; i++){
    a = a + 'I' + '\n' + c;
    c = b.repeat(i+1);
}
return a.trim();
  }
  console.log(drawStairs(6));