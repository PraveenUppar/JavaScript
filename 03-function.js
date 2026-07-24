// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression
const greet2 = function (name) {
  return `Hello, ${name}!`;
};

// Arrow function = provide a concise, shorter syntax for writing function expressions in JavaScript
const greet3 = (name) => {
  `Hello, ${name}!`;
};

// Regular Function
const add = function (a, b) {
  return a + b;
};

// Arrow Function
const addArrow = (a, b) => a + b;
// you have to return with brackets
const addArrow_withbracket = (a, b) => {
  return a + b;
};

// Regular Function
function divide(a, b) {
  return a / b;
}
// Arrow Function
const divide = (a, b) => {
  return a / b;
};

// Default parameters
function add(a = 0, b = 0) {
  return a + b;
}

// Rest parameters
// allow a function to accept an indefinite number of arguments and collect them into a single actual array.
// can directly apply standard array methods like map(), filter(), or reduce() to the collected arguments.
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
const sum = (numbers) => numbers.reduce((a, b) => a + b, 0);
const filterEven = (arr) => arr.filter((num) => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5, 6, 7, 8]));

// Callback function

function run() {
  console.log("I will run after 1s");
}
setTimeout(run, 1000);
console.log("I will run immedietely");

function calculateLater(num1, num2, onComplete) {
  console.log("Calculation started...");
  setTimeout(() => {
    const sum = num1 + num2;
    onComplete(sum);
  }, 1500);
}
calculateLater(10, 5, (result) => {
  console.log("The total is: " + result);
});

function delaycallback(callback, delay) {
  setTimeout(() => {
    callback("Data arrived");
  }, delay);
}
delaycallback((data) => {
  console.log("Callback received:", data);
}, 2000);

function wakeUp(name, callback) {
  setTimeout(() => {
    callback(`Wake up, ${name}!`);
  }, 3000);
}
wakeUp("John", (message) => {
  console.log(message);
});
