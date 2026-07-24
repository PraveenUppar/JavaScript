// JavaScript Basics
// Run: node 01-basics.js

// console.log prints output
console.log("Hello JavaScript!");

// A statement is one instruction.
console.log("This is a statement");

// Comments explain code.
// Single-line comment

/*
  Multi-line comment
*/

// Variables store values.
let studentName = "Praveen";
const course = "JavaScript";
var oldStyleVariable = "Avoid var in modern JavaScript";

console.log(studentName);
console.log(course);
console.log(oldStyleVariable);

// let can be reassigned.
studentName = "Pavii";
console.log(studentName);

// const cannot be reassigned.
// course = "Node.js"; // Error

// Naming rules:
// - Use meaningful names
// - Use camelCase for variables
// - Do not start variable names with numbers

let totalMarks = 95;
let isPassed = true;

console.log("Marks:", totalMarks);
console.log("Passed:", isPassed);
