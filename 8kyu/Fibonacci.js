function nthFibo(n) {
    let f = [];
    f[0] = 0;
    f[1] = 1;
    let i = 2;
    for(i; i <= n; i++) {
        f[i] = f[i-1] + f[i-2];
    }
    return f[i-2]
  }

  console.log(nthFibo(6));