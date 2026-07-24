// Events
// This file is for browser JavaScript.

// Example HTML:
// <form id="loginForm">
//   <input id="username" />
//   <button type="submit">Login</button>
// </form>
// <p id="output"></p>

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const output = document.getElementById("output");

if (loginForm && usernameInput && output) {
  usernameInput.addEventListener("input", (event) => {
    output.textContent = `Typing: ${event.target.value}`;
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();

    if (!username) {
      output.textContent = "Username is required";
      return;
    }

    output.textContent = `Welcome, ${username}`;
  });
}

// Other common events:
// click, dblclick, mouseenter, mouseleave, keydown, keyup, change, submit
