// Assignment 8: Quiz App
// ======================
//
// Build a browser quiz app.
//
// Question object example:
// {
//   question: "Which keyword creates a constant?",
//   options: ["let", "const", "var", "static"],
//   answer: "const"
// }
//
// Requirements:
// 1. Create at least 10 questions
// 2. Show one question at a time
// 3. Show multiple choice options
// 4. Let user select one answer
// 5. Show Next button
// 6. Track score
// 7. Show final score at the end
// 8. Add Restart button
//
// Bonus:
// - Add timer for each question
// - Shuffle questions
// - Show correct answers after quiz

// Requirement 1: Database of at least 10 question objects
const originalQuestions = [
  {
    question: "Which keyword creates a block-scoped constant variable?",
    options: ["let", "const", "var", "static"],
    answer: "const",
  },
  {
    question: "What is the output of 'typeof null' in JavaScript?",
    options: ["string", "null", "undefined", "object"],
    answer: "object",
  },
  {
    question: "Which method adds one or more elements to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
  },
  {
    question: "Which of these is NOT a primitive data type in JavaScript?",
    options: ["Boolean", "String", "Array", "Number"],
    answer: "Array",
  },
  {
    question:
      "What loop structural pattern guarantees code executes at least once?",
    options: ["for", "while", "do...while", "forEach"],
    answer: "do...while",
  },
  {
    question: "What symbol is used for multi-line comments in JavaScript?",
    options: ["//", "/* */", "<!-- -->", "##"],
    answer: "/* */",
  },
  {
    question: "How do you check strict equality of values and types together?",
    options: ["=", "==", "===", "!=="],
    answer: "===",
  },
  {
    question: "Which built-in object is used to perform mathematical tasks?",
    options: ["Math", "Equations", "Calculus", "Compute"],
    answer: "Math",
  },
  {
    question: "What function schedules code execution after a specific delay?",
    options: ["setInterval", "setTimeout", "delay", "wait"],
    answer: "setTimeout",
  },
  {
    question:
      "Which array method creates a new array by processing every element?",
    options: ["filter()", "forEach()", "map()", "reduce()"],
    answer: "map()",
  },
];

// App Global Management States
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval = null;
let timeRemaining = 15;
const SECONDS_PER_QUESTION = 15;

// User Choice Logging Stack (For Final End Review Canvas)
let userAnswersLog = [];

// DOM Elements Selection Hooks
const quizHeader = document.getElementById("quiz-header");
const questionScreen = document.getElementById("question-screen");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");

const resultsScreen = document.getElementById("results-screen");
const finalScore = document.getElementById("final-score");
const totalQuestionsElement = document.getElementById("total-questions");
const reviewContainer = document.getElementById("review-container");

const progressText = document.getElementById("progress-text");
const timeCounter = document.getElementById("time-counter");
const restartBtn = document.getElementById("restart-btn");

// Bonus: Fisher-Yates Array Shuffling Algorithm
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Initializing/Resetting the Quiz Engine
function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  userAnswersLog = [];

  // Bonus: Shuffle questions and shuffle their internal options array
  quizQuestions = shuffleArray(originalQuestions).map((q) => ({
    ...q,
    options: shuffleArray(q.options),
  }));

  resultsScreen.classList.add("hidden");
  quizHeader.classList.remove("hidden");
  questionScreen.classList.remove("hidden");

  showQuestion();
}

// Requirement 2 & 3: Render Active Question and Options
function showQuestion() {
  clearInterval(timerInterval); // Stop any previous timer leak loops
  nextBtn.classList.add("hidden");
  nextBtn.disabled = true;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Update progress tracking text
  progressText.innerText = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
  questionText.innerText = currentQuestion.question;

  // Clear options container natively
  optionsContainer.innerHTML = "";

  // Loop out multiple choice options
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.innerText = option;
    button.addEventListener("click", () =>
      handleOptionSelection(button, option),
    );
    optionsContainer.appendChild(button);
  });

  // Start Bonus: Timer tracking engine
  startTimer();
}

// Bonus: Per-Question Counter System
function startTimer() {
  timeRemaining = SECONDS_PER_QUESTION;
  timeCounter.innerText = timeRemaining;

  timerInterval = setInterval(() => {
    timeRemaining--;
    timeCounter.innerText = timeRemaining;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      handleTimeOut();
    }
  }, 1000);
}

// Handling Option Selection
function handleOptionSelection(selectedButton, selectedValue) {
  clearInterval(timerInterval); // Halt countdown

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const allOptionButtons = optionsContainer.querySelectorAll(".option-btn");

  // Freeze input processing hooks across alternative selections
  allOptionButtons.forEach((btn) => (btn.disabled = true));

  // Requirement 6: Check Answer Score Criteria
  const isCorrect = selectedValue === currentQuestion.answer;
  if (isCorrect) {
    score++;
    selectedButton.classList.add("correct-reveal");
  } else {
    selectedButton.classList.add("wrong-reveal");
    // Reveal correct answer alternative inline automatically
    revealCorrectAnswerInline();
  }

  // Log choices down to memory arrays
  userAnswersLog.push({
    question: currentQuestion.question,
    chosen: selectedValue,
    correctAnswer: currentQuestion.answer,
    status: isCorrect ? "correct" : "wrong",
  });

  // Requirement 5: Bring navigation action controls visible
  revealNextButton();
}

// Timeout Event Callback Trigger Handler
function handleTimeOut() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const allOptionButtons = optionsContainer.querySelectorAll(".option-btn");
  allOptionButtons.forEach((btn) => (btn.disabled = true));

  revealCorrectAnswerInline();

  userAnswersLog.push({
    question: currentQuestion.question,
    chosen: "[Time Expired]",
    correctAnswer: currentQuestion.answer,
    status: "timeout",
  });

  revealNextButton();
}

// Helper: Show correct answer button inline immediately upon decision step
function revealCorrectAnswerInline() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const allOptionButtons = optionsContainer.querySelectorAll(".option-btn");
  allOptionButtons.forEach((btn) => {
    if (btn.innerText === currentQuestion.answer) {
      btn.classList.add("correct-reveal");
    }
  });
}

function revealNextButton() {
  nextBtn.classList.remove("hidden");
  nextBtn.disabled = false;
}

// Next button step event hook logic mapping
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
});

// Requirement 7 & Bonus: Show Final Dashboard Summary Review Screen
function showResults() {
  clearInterval(timerInterval);
  quizHeader.classList.add("hidden");
  questionScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");

  finalScore.innerText = score;
  totalQuestionsElement.innerText = quizQuestions.length;

  // Clear historic summary node trees safely
  reviewContainer.innerHTML = "";

  // Render comprehensive history layout breakdown maps
  userAnswersLog.forEach((item, index) => {
    const reviewItem = document.createElement("div");
    reviewItem.className = "review-item";

    let statusText = "";
    let classLabel = "";

    if (item.status === "correct") {
      statusText = "✓ Correct";
      classLabel = "text-correct";
    } else if (item.status === "wrong") {
      statusText = `✗ Selected: ${item.chosen}`;
      classLabel = "text-wrong";
    } else {
      statusText = "⏳ Out of Time";
      classLabel = "text-wrong";
    }

    reviewItem.innerHTML = `
      <div class="review-q">${index + 1}. ${item.question}</div>
      <div class="review-a ${classLabel}">${statusText}</div>
      ${item.status !== "correct" ? `<div class="review-a text-correct">Correct Answer: ${item.correctAnswer}</div>` : ""}
    `;
    reviewContainer.appendChild(reviewItem);
  });
}

// Requirement 8: Reset runtime instance loops using listener mappings
restartBtn.addEventListener("click", startQuiz);

// Document Mount Lifecycle Listener
window.addEventListener("DOMContentLoaded", startQuiz);
