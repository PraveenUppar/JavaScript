// Functions
// Run: node 06-functions.js

// Function declaration
function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet("Praveen"));

// Function expression
const add = function (a, b) {
  return a + b;
};

console.log(add(5, 3));

// Arrow function
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(4, 2));

// Short arrow function
const square = (n) => n * n;
console.log(square(6));

// Default parameters
function createUser(name, role = "user") {
  return {
    name,
    role,
  };
}

console.log(createUser("Praveen"));
console.log(createUser("Admin", "admin"));

// Rest parameters
function total(...numbers) {
  return numbers.reduce((sum, current) => sum + current, 0);
}

console.log(total(10, 20, 30));
