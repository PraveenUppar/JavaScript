// Practice 2: Control Flow and Loops
// Run: node practice/practice2.js

// Exercise 1: Grade calculator.
let marks = 76;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// Exercise 2: Print multiplication table.
let number = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// Exercise 3: Count vowels.
let word = "javascript";
let vowels = "aeiou";
let count = 0;

for (let char of word) {
  if (vowels.includes(char)) {
    count++;
  }
}

console.log("Vowels:", count);

// Exercise 4: Find even numbers.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("Even:", i);
  }
}
