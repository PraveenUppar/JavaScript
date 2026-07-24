// Arrays
// Run: node 07-arrays.js

let tasks = ["Learn JS", "Practice arrays", "Build project"];

console.log(tasks[0]);
console.log(tasks.length);

tasks.push("Revise DOM");
tasks.pop();
tasks.unshift("Start");
tasks.shift();

console.log(tasks);

// Looping arrays
for (let task of tasks) {
  console.log(task);
}

tasks.forEach((task, index) => {
  console.log(index + 1, task);
});

// map creates a new array
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map((number) => number * 2);
console.log(doubled);

// filter keeps matching items
let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// find returns first match
let firstBigNumber = numbers.find((number) => number > 3);
console.log(firstBigNumber);

// reduce combines values
let sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);

// some and every
console.log(numbers.some((number) => number > 4));
console.log(numbers.every((number) => number > 0));
