// Fetch API
// Browser JavaScript supports fetch by default.
// Modern Node.js also supports fetch.
// Run: node 14-fetch-api.js

async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

getPost();

// Common fetch patterns:
// GET: fetch(url)
// POST: fetch(url, { method: "POST", headers: {}, body: JSON.stringify(data) })
// Always handle errors and loading states in real apps.
