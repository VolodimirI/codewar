var filterString = function(value) {
    let result = '';
    for (let i = 0; i < value.length; i++) {
        if (0 <= value.charAt(i) && value.charAt(i) <= 9) {
            result = result + value.charAt(i)
        }
    }
    return parseInt(result)
  }

  console.log(filterString('a0a1bb2cc3dd9'));