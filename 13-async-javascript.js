// Async JavaScript
// Run: node 13-async-javascript.js

console.log("Start");

setTimeout(() => {
  console.log("Runs after 1 second");
}, 1000);

console.log("End");

// Callback example
function getUserCallback(callback) {
  setTimeout(() => {
    callback({ id: 1, name: "Praveen" });
  }, 500);
}

getUserCallback((user) => {
  console.log("Callback user:", user);
});

// Promise example
function getUserPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 2, name: "Pavii" });
    }, 500);
  });
}

getUserPromise()
  .then((user) => {
    console.log("Promise user:", user);
  })
  .catch((error) => {
    console.error(error.message);
  });

// async/await example
async function showUser() {
  try {
    const user = await getUserPromise();
    console.log("Async user:", user);
  } catch (error) {
    console.error(error.message);
  }
}

showUser();
