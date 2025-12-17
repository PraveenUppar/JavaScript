// Variable declarations and differences
var a = 1; // Function scoped, can be redeclared
let b = 2; // Block scoped, cannot be redeclared (can be reassigned)
const c = 3; // Block scoped, cannot be redeclared and reassigned

var globalVar = "I am global";
{
  let blockVar = "I am block scoped";
  console.log(blockVar); // Works
}
// console.log(blockVar);  // ReferenceError

const person = { name: "John" };
person.name = "Jane"; // This works
// person = {};  // This throws error - can't reassign const

console.log(globalVar);

// Hoisting
console.log(a); // undefined (hoisted but not initialized)
var x = 5;

// Redeclaration
var x = 1;
var x = 2; // Allowed - redeclaration works
let y = 1;
// let y = 2;  // Error - cannot redeclare

// Reassignment
var p = 1;
p = 2; // Allowed
let q = 1;
q = 2; // Allowed
const z = 1;
// z = 2;      // Error - cannot reassign

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
console.log("5" * "2"); // 10 - coerced to numbers
console.log("5" / "2"); // 2.5 - coerced to numbers
console.log(true + true); // 2 - true = 1
console.log(false + 5); // 5 - false = 0
console.log(null + 5); // 5 - null = 0
console.log(undefined + 5); // NaN - undefined can't be coerced
console.log("hello" + null); // "hellonull"
console.log([] + {}); // "[object Object]" - both coerced to strings

// == (loose equality) - allows type coercion
5 == "5"; // true
0 == false; // true
null == undefined; // true
"" == 0; // true

// === (strict equality) - no type coercion
5 === "5"; // false
0 === false; // false
null === undefined; // false
"" === 0; // false
