// DOM Basics
// This file is for browser JavaScript.
// Create an HTML file and connect this script:
// <script src="11-dom-basics.js"></script>

// Common selectors:
// document.getElementById("title")
// document.querySelector(".card")
// document.querySelectorAll("li")

// Example HTML:
// <h1 id="title">Old Title</h1>
// <p class="message">Hello</p>
// <button id="changeBtn">Change</button>

const title = document.getElementById("title");
const message = document.querySelector(".message");
const button = document.getElementById("changeBtn");

if (title && message && button) {
  title.textContent = "JavaScript DOM";
  message.innerHTML = "DOM means <strong>Document Object Model</strong>";

  title.style.color = "blue";
  message.classList.add("active");

  button.addEventListener("click", () => {
    title.textContent = "Button clicked";
    message.classList.toggle("active");
  });
}

// Creating elements
const list = document.querySelector("#list");

if (list) {
  const item = document.createElement("li");
  item.textContent = "New item from JavaScript";
  list.appendChild(item);
}
