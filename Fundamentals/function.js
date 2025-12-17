// Greet function
function greet(name) {
  return "Hello" + name;
}
let message = greet("John");
console.log(message);

// Sum function
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(2, 2));

// Control flow
function vote(age) {
  if (age >= 18) {
    console.log("You can vote");
  } else {
    console.log("You are minor");
  }
}
let check = vote(20);

// Switch Statement

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Other day");
}
