function find(array,element){let a=array.indexOf(element);return a!=-1?a:"Not found"}
  console.log(find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], "Lorem Ipsum"));
  console.log(find([1, 3, -7, 0, 6], -7)) 