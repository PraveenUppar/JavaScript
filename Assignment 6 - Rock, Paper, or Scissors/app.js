// Rock Paper Scissors

// ============================================
// STEP 1: Get the user's choice. Codecademy's version of this project
// doesn't take live input — it just stores a hardcoded string standing
// in for what the user picked. Change this to "rock", "paper", or
// "scissors" to try different outcomes.
// ============================================
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

// ============================================
// STEP 2: Get the computer's choice. Randomly pick one of the three
// options using Math.random().
// ============================================
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

// ============================================
// STEP 3: Compare the two choices and determine a winner.
// Rules:
// - Same choice -> draw
// - rock beats scissors
// - paper beats rock
// - scissors beats paper
// ============================================
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }
};

// ============================================
// STEP 4: Start the program and display the results — call the
// functions above, in order, and log everything out.
// ============================================
const playGame = (userInput) => {
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();

  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame("rock");
