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

// The Modern Fix: Async / Await

// async: Tells JavaScript "this function handles asynchronous tasks."
// await: Tells JavaScript "Pause this function right here. Don't move to the next line until this Promise finishes."

async function showUserComments() {
  try {
    // Pause here until getData is done, then put result in 'userId'
    const userId = await getData();
    console.log("Got user ID: " + userId);

    // Pause here until getPosts is done
    const posts = await getPosts(userId);
    console.log("Got posts");

    // Pause here until getComments is done
    const comments = await getComments(posts[0]);
    console.log("Got comments");
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

showUserComments();

// Basic async/await
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Operation complete");
  }
}

// Async/await with Promise.all()
async function fetchMultiple() {
  try {
    const [data1, data2, data3] = await Promise.all([
      fetch("url1").then((r) => r.json()),
      fetch("url2").then((r) => r.json()),
      fetch("url3").then((r) => r.json()),
    ]);
    return { data1, data2, data3 };
  } catch (error) {
    console.error(error);
  }
}

// Async/await with loops
async function processMultiple() {
  for (let i = 0; i < 5; i++) {
    const result = await fetchData(i);
    console.log(result);
  }
}
