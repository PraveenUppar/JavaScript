// Create a function that returns numbers greater than 5 using filter.
function filterGreater(arr, threshold) {
  return arr.filter((num) => num > threshold);
}
console.log(filterGreater([1, 5, 3, 9, 2, 7], 5));

// Implement a function to calculate the sum of all numbers using reduce.
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15

// Build a function that transforms an array of objects and extracts specific properties.

const users = [
  { id: 1, name: "John", email: "john@example.com" },
  { id: 2, name: "Jane", email: "jane@example.com" },
  { id: 3, name: "Bob", email: "bob@example.com" },
];

function extractEmails(usersArray) {
  return usersArray.map((user) => user.email);
}

function extractByProperty(usersArray, prop) {
  return usersArray.map((user) => user[prop]);
}

console.log(extractEmails(users));
// ["john@example.com", "jane@example.com", "bob@example.com"]
console.log(extractByProperty(users, "name"));
// ["John", "Jane", "Bob"]

// Write a function to find duplicate elements in an array.
function findDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}
console.log(findDuplicates([1, 2, 2, 3, 3, 3, 4]));
