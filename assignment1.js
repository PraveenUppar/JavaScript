// Write a program that checks the type of different values and displays them
function check(value) {
  console.log(typeof value);
}

let type1 = check("d");
let type2 = check(5);

// Create a simple calculator that performs +, -, *, / operations.
function cal(num1, num2, operation) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.error("Both inputs must be numbers");
    return null;
  }

  let result;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        console.error("Cannot divide by zero");
        return null;
      }
      result = num1 / num2;
      break;
    default:
      console.error("Invalid operation");
      return null;
  }
  return result;
}
console.log(cal(10, 5, "+")); // 15
console.log(cal(10, 5, "-")); // 5
console.log(cal(10, 5, "*")); // 50
