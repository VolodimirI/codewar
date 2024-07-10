function firstToLast(str,c){
    str = str.toLowerCase();
    if (str.indexOf(c) == -1) return -1
    else return str.lastIndexOf(c) - str.indexOf(c)
  }
  console.log(firstToLast("cfximvlsmmpnslcxbtqdhdhfrpymjeyedsoljmdbaosqpdtwpooyszsj","s"))
  //console.log(str.search(/word/i))
