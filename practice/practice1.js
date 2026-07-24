// Practice 1: Variables, Data Types, Operators
// Run: node practice/practice1.js

// Exercise 1: Create a student profile.
const studentName = "Praveen";
let age = 22;
let course = "JavaScript";
let isActive = true;

console.log(`${studentName} is ${age} years old and learning ${course}`);
console.log("Active:", isActive);

// Exercise 2: Calculate total and average marks.
let html = 90;
let css = 85;
let javascript = 95;

let total = html + css + javascript;
let average = total / 3;

console.log("Total:", total);
console.log("Average:", average.toFixed(2));

// Exercise 3: Check eligibility.
let canApply = average >= 80 && isActive;
console.log("Can apply:", canApply);

// Exercise 4: Convert data types.
let priceText = "499";
let quantity = 3;
let bill = Number(priceText) * quantity;

console.log("Bill:", bill);
