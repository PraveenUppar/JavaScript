// localStorage - persists even after browser closes
localStorage.setItem("key", "value");
const value = localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();

// sessionStorage - clears when tab closes
sessionStorage.setItem("key", "value");

// JSON methods
const obj = { name: "John", age: 30 };
const json = JSON.stringify(obj);
const parsed = JSON.parse(json);

// Fetch API - GET
fetch("https://api.example.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Fetch API - POST
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "John", age: 30 }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// Fetch API - PUT
fetch("https://api.example.com/users/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "Jane", age: 25 }),
});

// Fetch API - DELETE
fetch("https://api.example.com/users/1", {
  method: "DELETE",
});

// Error handling
fetch("url")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => console.error(error));
