// Loops
// Run: node 05-loops.js

// for loop
for (let i = 1; i <= 5; i++) {
  console.log("For:", i);
}

// while loop
let count = 1;
while (count <= 3) {
  console.log("While:", count);
  count++;
}

// do while loop
let number = 1;
do {
  console.log("Do while:", number);
  number++;
} while (number <= 3);

// for...of for arrays
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
}

// for...in for object keys
let user = {
  name: "Praveen",
  age: 22,
  city: "Chennai",
};

for (let key in user) {
  console.log(key, user[key]);
}

// break and continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  if (i === 5) break;
  console.log("Loop value:", i);
}
