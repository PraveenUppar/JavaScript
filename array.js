// Array creation
const numbers = [1, 2, 3, 4, 5];

// map - transform each element
numbers.map((i) => i * 2); // [2, 4, 6, 8, 10]

// filter - keep only matching elements
numbers.filter((i) => i > 2); // [3, 4, 5]

// reduce - accumulate into single value
numbers.reduce((sum, n) => sum + n, 0); // 15

// find - get first matching element
numbers.find((i) => i > 3); // 4

// forEach - execute for each element
numbers.forEach((i) => console.log(i));

// Destructuring of array
const [first, second] = numbers;

// Spread operator (add elements to the array)
const newArray = [...numbers, 6, 7];

let fruits = ["apple", "banana"];

// push & pop (End of array)
fruits.push("cherry"); // ['apple', 'banana', 'cherry']
fruits.pop(); // ['apple', 'banana']

// unshift & shift (Beginning of array)
fruits.unshift("date"); // ['date', 'apple', 'banana']
fruits.shift(); // ['apple', 'banana']

// splice (index, howManyToRemove, item1, item2...)
fruits.splice(1, 1, "mango"); // At index 1, remove 1, add 'mango'
// Result: ['apple', 'mango']

let colors = ["red", "green", "blue", "green", "yellow"];

// slice (startIndex, endIndex) - Non-mutating
let subset = colors.slice(1, 3); // ['green', 'blue']

// includes (value) -> returns boolean
colors.includes("red"); // true

// indexOf (value) -> returns first index found
colors.indexOf("green"); // 1

// lastIndexOf (value) -> returns last index found
colors.lastIndexOf("green"); // 3

let numbers1 = [10, 2, 30, 4];
let letters = ["d", "a", "c", "b"];

// reverse
letters.reverse(); // ['b', 'c', 'a', 'd']

// sort (Default is alphabetical/string)
letters.sort(); // ['a', 'b', 'c', 'd']

// sort (Numeric - requires a compare function)
numbers.sort((a, b) => a - b); // [2, 4, 10, 30]

// Creating arrays
Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']
Array.of(1, 2, 3); // [1, 2, 3]
