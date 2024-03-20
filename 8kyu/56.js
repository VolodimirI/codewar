// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".


function problem(x){
  return typeof x != "string" ? x * 50 + 6 : "Error"
}
console.log(problem("hello"));//"Error"
console.log(problem(1));//56
console.log(problem(5));//256
console.log(problem(0));//6
console.log(problem(1.2));//66
console.log(problem(3));//156
console.log(problem("RyanIsCool"));//Error
console.log(problem(-3));//-144
console.log(problem(""));//Error
console.log(problem(0.03));//7.5
console.log(problem(true));//

