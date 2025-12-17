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
