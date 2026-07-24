// Strings and Numbers
// Run: node 09-strings-numbers.js

let message = "  JavaScript is powerful  ";

console.log(message.length);
console.log(message.trim());
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.includes("Script"));
console.log(message.startsWith("  Java"));
console.log(message.endsWith("  "));
console.log(message.replace("powerful", "useful"));
console.log(message.trim().split(" "));

let firstName = "Praveen";
let score = 95;

console.log(firstName + " scored " + score);
console.log(`${firstName} scored ${score}`);

let price = 99.5678;

console.log(Math.round(price));
console.log(Math.floor(price));
console.log(Math.ceil(price));
console.log(price.toFixed(2));
console.log(Math.max(10, 20, 5));
console.log(Math.min(10, 20, 5));
console.log(Math.random());

// Generate random number from 1 to 10
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

console.log(Number("100"));
console.log(parseInt("100px"));
console.log(parseFloat("10.5kg"));
console.log(Number.isNaN(Number("abc")));
