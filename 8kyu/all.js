function all( arr, fun ){
    for (let i = 0; i < arr.lenght; i++) {
        if (!fun(arr[i])) {
            return false
        };
    }
    return true;
  }

  console.log(all([1, 2, 3, 4, 5], function(v){return v<9}));


  function all( arr, fun ){
    for(let i = 0; i < arr.length; i ++){
        if (!fun(arr[i])) {
            return false;
        };
    }
      
    return true;
  
}