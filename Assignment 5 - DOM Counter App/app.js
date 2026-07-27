// Assignment 5: DOM Counter App
// =============================
//
// Build a browser counter app.
//
// Required files:
// - index.html
// - style.css
// - app.js
//
// Requirements:
// 1. Show a count value on the page
// 2. Add Increase, Decrease, and Reset buttons
// 3. Increase should add 1
// 4. Decrease should subtract 1
// 5. Reset should set count to 0
// 6. Change count color:
//    positive: green
//    negative: red
//    zero: black
// 7. Disable Decrease if count reaches -10
// 8. Disable Increase if count reaches 10
//
// Bonus:
// - Add step value input
// - Add keyboard support for ArrowUp and ArrowDown

let count = 0;

const countValue = document.getElementById("count-value");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");

function updateCount() {
  countValue.textContent = count;
  if (count > 0) {
    countValue.style.color = "green";
  } else if (count < 0) {
    countValue.style.color = "red";
  } else {
    countValue.style.color = "black";
  }

  decreaseBtn.disabled = count <= -10;
  increaseBtn.disabled = count >= 10;
}

increaseBtn.addEventListener("click", () => {
  count++;
  updateCount();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateCount();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCount();
});

updateCount();
