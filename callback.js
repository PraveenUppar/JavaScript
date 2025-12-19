// Callback - A callback is a function passed as an argument to another function, which is then executed (or "called back") after a specific task is completed.

console.log("Count1");
console.log("Count2");

// Callback process with arrow function (there arrow function is the parameter passed)
setTimeout(() => {
  console.log("Arrow Function Callback");
}, 2000);

// Callback process with build in function (function is passed separetely)
setTimeout(Timeout_func, 2000);
function Timeout_func() {
  console.log("Normal function callback");
}

console.log("Count3");
console.log("Count4");

// Example with normal function
function fetchDataCallback() {
  console.log("Data fetched");
}
function fetchData() {
  setTimeout(fetchDataCallback, 1000);
}
fetchData();

// Example with normal function
function fetchData(callback_func) {
  setTimeout(() => {
    callback_func("Normal function data");
  }, 1000);
}

fetchData(pass_func);

function pass_func(data) {
  console.log(data);
}

// Example with arrow function

function fetchDataArrow(callback) {
  setTimeout(() => {
    callback("Arrow function data");
  }, 2000);
}

fetchDataArrow((data) => {
  console.log(data);
});

// The Problem: Callback Hell

getData((userId) => {
  console.log("Got user ID: " + userId);

  getPosts(userId, (posts) => {
    console.log("Got posts for user");

    getComments(posts[0], (comments) => {
      console.log("Got comments for first post");

      // This triangle shape is "Callback Hell"
    });
  });
});
