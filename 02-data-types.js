// Data Types
// Run: node 02-data-types.js

// Primitive data types
let name = "Praveen"; // string
let age = 22; // number
let isLearning = true; // boolean
let futureValue; // undefined
let emptyValue = null; // null
let bigNumber = 12345678901234567890n; // bigint
let uniqueId = Symbol("id"); // symbol

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLearning);
console.log(typeof futureValue);
console.log(typeof emptyValue); // object: historical JavaScript behavior
console.log(typeof bigNumber);
console.log(typeof uniqueId);

// Non-primitive data types
let skills = ["HTML", "CSS", "JavaScript"];
let user = {
  name: "Praveen",
  age: 22,
  isLearning: true,
};

console.log(skills);
console.log(user);

// Type conversion
let scoreText = "100";
let scoreNumber = Number(scoreText);

console.log(scoreText, typeof scoreText);
console.log(scoreNumber, typeof scoreNumber);

console.log(String(500));
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
