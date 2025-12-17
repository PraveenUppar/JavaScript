// Variable declarations and differences
var a = 1; // Function scoped, can be redeclared
let b = 2; // Block scoped, cannot be redeclared
const c = 3; // Block scoped, cannot be redeclared

let number = 42; // Number
let string = "Hello World"; // String
let isActive = false; // Boolean
let numbers = [1, 2, 3]; // Array

let sum = 10 + 5; // Arithmetic operator
let isEqual = 10 === 10; // Comparison operator
let isTrue = true && false; // Logical operator

// Type checking
typeof a; // "number"
console.log(typeof null); // "object" (quirk of JavaScript)

// Type coercion
console.log("5" + 2); // "52" (string concatenation)
console.log("5" - 2); // 3 (numeric operation)
console.log(true + 1); // 2 (true becomes 1)
