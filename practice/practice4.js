// Practice 4: DOM Mini Exercises
// Browser practice file.

// Create an HTML file with:
// <h1 id="title">Counter</h1>
// <button id="decrease">-</button>
// <span id="count">0</span>
// <button id="increase">+</button>
// <button id="reset">Reset</button>

const countElement = document.getElementById("count");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

let count = 0;

function renderCount() {
  if (countElement) {
    countElement.textContent = count;
  }
}

if (increaseButton && decreaseButton && resetButton) {
  increaseButton.addEventListener("click", () => {
    count++;
    renderCount();
  });

  decreaseButton.addEventListener("click", () => {
    count--;
    renderCount();
  });

  resetButton.addEventListener("click", () => {
    count = 0;
    renderCount();
  });
}
