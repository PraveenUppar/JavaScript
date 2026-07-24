// Scope and Hoisting
// Run: node 10-scope-hoisting.js

// Global scope
let appName = "Revision App";

function showAppName() {
  console.log(appName);
}

showAppName();

// Function scope
function demoFunctionScope() {
  let message = "Inside function";
  console.log(message);
}

demoFunctionScope();
// console.log(message); // Error

// Block scope
if (true) {
  let blockValue = "Inside block";
  const anotherBlockValue = "Also inside block";
  console.log(blockValue, anotherBlockValue);
}

// console.log(blockValue); // Error

// var is function scoped, not block scoped
if (true) {
  var oldValue = "var escapes block";
}

console.log(oldValue);

// Hoisting
sayHello();

function sayHello() {
  console.log("Function declarations are hoisted");
}

// Variables declared with let and const are hoisted but cannot be used before declaration.
// console.log(score); // Error
let score = 100;
console.log(score);
