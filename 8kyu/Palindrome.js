function isPalindrome(x) {
    x = x.toLowerCase();
    for(let i = 0; i < (x.length/2); i++) 
        {
            console.log(i, x.at(i), x.length - i - 1, x.at(x.length - i - 1));

            if (x.at(i) != (x.at(x.length - i - 1))) return false;
        }
   
       return true
  }
    //return x.split("").reverse().join("").toLowerCase()=== x.toLowerCase()
    
  console.log(isPalindrome('Ababababa'))