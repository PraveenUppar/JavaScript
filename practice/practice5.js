// Practice 5: Async and Fetch
// Run: node practice/practice5.js

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function countdown() {
  for (let i = 3; i >= 1; i--) {
    console.log(i);
    await wait(1000);
  }

  console.log("Go");
}

countdown();

async function getTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (!response.ok) {
      throw new Error("Failed to fetch todo");
    }

    const todo = await response.json();
    console.log(todo);
  } catch (error) {
    console.error(error.message);
  }
}

getTodo();
