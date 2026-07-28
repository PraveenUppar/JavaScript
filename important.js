// ==========================================
// 1. Function Patterns
// ==========================================
function add(a, b) {
  return a + b;
}
const addExpression = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => {
  return a + b;
};

// ==========================================
// 2. Array Methods
// ==========================================
const numbers = [1, 2, 3, 4, 5];

// reduce needs an accumulator, current value, and an initial value (0)
const sum1 = numbers.reduce((acc, curr) => acc + curr, 0);
const sum2 = numbers.reduce(function (acc, curr) {
  return acc + curr;
}, 0);

// forEach needs an element parameter to log or process
numbers.forEach((num) => console.log(`Arrow log: ${num}`));
numbers.forEach(function (num) {
  console.log(`Function log: ${num}`);
});

// filter needs a condition that returns true/false
const filtered1 = numbers.filter((num) => num > 2);
const filtered2 = numbers.filter(function (num) {
  return num > 2;
});

// find needs a condition to locate an element
const found1 = numbers.find((num) => num === 3);
const found2 = numbers.find(function (num) {
  return num === 3;
});

// map needs logic to transform elements into a new array
const mapped1 = numbers.map((num) => num * 2);
const mapped2 = numbers.map(function (num) {
  return num * 2;
});

// ==========================================
// 3. Callback Functions
// ==========================================
function mainWithCallback(callback) {
  callback();
}

function printMessage() {
  console.log("Hello, World!");
}

mainWithCallback(printMessage);
mainWithCallback(() => {
  console.log("Hello, World!");
});
mainWithCallback(function () {
  console.log("Hello, World!");
});

// ==========================================
// 4. Promises
// ==========================================
function mainPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello from Promise!");
    }, 1000);
  });
}

function message(msg) {
  console.log(msg);
}

mainPromise().then(message);
mainPromise().then((msg) => {
  console.log(msg);
});

// ==========================================
// 5. Async and Await
// ==========================================
async function fetchData() {
  try {
    const res = await fetch("url");
    const data = await res.json();
    console.log("Fetched Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

fetchData();
