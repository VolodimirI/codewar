// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7


function basicOp(operation, value1, value2) {
    if (operation == "+") return value1+value2
    else if (operation == "-") return value1-value2
    else if (operation == "*") return value1*value2
    else if (operation == "0") return "devision by ziro"
    else if (operation == "/") return value1/value2
    else return "no operators"

}

console.log(basicOp("555", 4, 7)); // 11  "4 + 7 = 11"
console.log(basicOp("-", 15, 18)); // -3 "15 - 18 = -3"
console.log(basicOp("*", 5, 5)); // 25 "5 * 5 = 25"
console.log(basicOp("/", 49, 7)); // 7; "49 / 7 = 7"

