// Array methods
const numbers = [1, 2, 3, 4, 5];

// map - transform each element
numbers.map((n) => n * 2); // [2, 4, 6, 8, 10]

// filter - keep only matching elements
numbers.filter((n) => n > 2); // [3, 4, 5]

// reduce - accumulate into single value
numbers.reduce((sum, n) => sum + n, 0); // 15

// find - get first matching element
numbers.find((n) => n > 3); // 4

// forEach - execute for each element
numbers.forEach((n) => console.log(n));

// Destructuring
const [first, second, ...rest] = numbers;

// Spread operator
const newArray = [...numbers, 6, 7];

// Creating arrays
Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']
Array.of(1, 2, 3); // [1, 2, 3]
