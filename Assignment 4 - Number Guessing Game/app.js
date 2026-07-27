// Assignment 4: Number Guessing Game
// ==================================
//
// Build a number guessing game.
//
// Requirements:
// 1. Generate a random number between 1 and 100
// 2. Let the user guess a number
// 3. If guess is low, show "Too low"
// 4. If guess is high, show "Too high"
// 5. If correct, show "Correct"
// 6. Track the number of attempts
// 7. Stop the game after 10 wrong attempts
//
// Hints:
// - Browser version: use prompt()
// - Node version: use readline module
// - Math.random() generates random decimal numbers
//
// Bonus:
// - Add difficulty levels
// - Store best score in localStorage for browser version

let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

function guessNumber() {
  if (attempts >= maxAttempts) {
    console.log("Game over! You've reached the maximum number of attempts.");
    return;
  }

  const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
  attempts++;

  if (userGuess < numberToGuess) {
    console.log("Too low!");
    guessNumber();
  } else if (userGuess > numberToGuess) {
    console.log("Too high!");
    guessNumber();
  } else {
    console.log(`Correct! You guessed the number in ${attempts} attempts.`);
  }
}

guessNumber();
