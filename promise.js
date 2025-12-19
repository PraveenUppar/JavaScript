// Promises (states: pending, fulfilled, rejected)
// Promise.then(), .catch(), .finally()

// Promise = A Promise is an object that represents the future result of an asynchronous operation.
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
    // reject("Error!");
  }, 1000);
});

myPromise
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log("Done!"));

// Promise chaining
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Promise static methods

// Promise.all - all must succeed
Promise.all([promise1, promise2, promise3]).then((results) =>
  console.log(results)
);

// Promise.race - first to settle wins
Promise.race([promise1, promise2]).then((result) => console.log(result));

// Promise.allSettled - all settle regardless of success
Promise.allSettled([promise1, promise2]).then((results) =>
  console.log(results)
);

// Promise.any - first to succeed wins
Promise.any([promise1, promise2]).then((result) => console.log(result));

//  Example
const fetchDataPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("User Data"); // Success
    } else {
      reject("Error: Failed to fetch"); // Failure
    }
  }, 1000);
});

// Consuming the promise
fetchDataPromise
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

//  Example
const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("Promise created");
    resolve("success");
    // reject("Error")
  });
};

const callPromise = getPromise();

// it will run if it resolve
callPromise.then((res) => {
  console.log("Promise completed", res);
});

// it will run if is reject
callPromise.then((err) => {
  console.log("Promise Failed", err);
});
