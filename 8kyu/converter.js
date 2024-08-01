function converter (mpg) {
    return Number((1.609344*mpg/4.54609188).toFixed(2))
  }

  console.log(converter(10)); 
