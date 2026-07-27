// Assignment 1: Calculator
// ========================
//
// Build a calculator using JavaScript functions.
//
// Requirements:
// 1. Create functions: add, subtract, multiply, divide
// 2. Each function should accept two numbers and return the result
// 3. Handle division by zero with a useful message
// 4. Create a calculate(a, b, operator) function
// 5. Support operators: +, -, *, /
// 6. Return "Invalid operator" for unsupported operators
// 7. Test the calculator with at least 8 examples

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  if (num2 === 0) {
    return "Not possible to divide by zero";
  } else {
    return num1 / num2;
  }
}

function calculator(num1, num2, opertator) {
  if (opertator === "+") {
    return add(num1, num2);
  } else if (opertator === "-") {
    return sub(num1, num2);
  } else if (opertator === "*") {
    return mul(num1, num2);
  } else if (opertator == "/") {
    return div(num1, num2);
  } else {
    return "Invalid Operator";
  }
}

console.log(calculator(2, 2, "+"));
console.log(calculator(2, 2, "-"));
console.log(calculator(2, 2, "*"));
console.log(calculator(2, 2, "/"));
console.log(calculator(2, 0, "/"));
console.log(calculator(2, 2, "]"));
