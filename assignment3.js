//  Write an arrow function that filters even numbers from an array.
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    console.error("Cannot divide by zero");
    return null;
  }
  return a / b;
};
console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2

//  Create a function that accepts a callback and calls it after 2 seconds (use setTimeout).

function delaycallback(callback, delay) {
  setTimeout(() => {
    callback("Data arrived");
  }, delay);
}
delaycallback((data) => {
  console.log("Callback received:", data);
}, 2000);

function run() {
  console.log("I will run after 1s");
}
setTimeout(run, 1000);
console.log("I will run immedietely");

//  Build a function that accepts rest parameters and returns their averag
function average(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}
console.log(average(10, 20, 30, 40));
