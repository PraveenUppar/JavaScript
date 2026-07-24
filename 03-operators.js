// Operators
// Run: node 03-operators.js

let a = 10;
let b = 3;

// Arithmetic operators
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Assignment operators
let marks = 50;
marks += 10;
marks -= 5;
marks *= 2;
marks /= 5;
console.log("Marks:", marks);

// Comparison operators
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);
console.log(10 == "10"); // checks value only
console.log(10 === "10"); // checks value and type
console.log(10 !== "10");

// Logical operators
let hasEmail = true;
let hasPassword = false;

console.log(hasEmail && hasPassword);
console.log(hasEmail || hasPassword);
console.log(!hasEmail);

// Ternary operator
let age = 18;
let message = age >= 18 ? "Allowed" : "Not allowed";
console.log(message);
