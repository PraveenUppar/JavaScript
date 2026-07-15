// Magic Eight Ball

// ============================================
// STEP 1: Store the user's question as a variable. Codecademy's version
// of this project doesn't take real input — it just simulates having
// asked a question, so any string works here.
// ============================================
const userAnswer = "Will I win the lottery?";

// ============================================
// STEP 2: Generate a random number to determine which fortune to give.
// Math.random() returns a decimal between 0 (inclusive) and 1
// (exclusive); multiplying by 8 and flooring gives a whole number
// from 0 to 7 — eight possible outcomes, like a real Magic 8 Ball.
// ============================================
const randomNumber = Math.floor(Math.random() * 8);

// ============================================
// STEP 3: Use a switch statement to map each randomNumber value to a
// fortune, and log it to the console.
// ============================================
switch (randomNumber) {
  case 0:
    console.log("It is certain");
    break;
  case 1:
    console.log("It is decidedly so");
    break;
  case 2:
    console.log("Reply hazy, try again");
    break;
  case 3:
    console.log("Cannot predict now");
    break;
  case 4:
    console.log("Do not count on it");
    break;
  case 5:
    console.log("My sources say no");
    break;
  case 6:
    console.log("Outlook not so good");
    break;
  case 7:
    console.log("Signs point to yes");
    break;
}
