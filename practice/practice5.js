// - 10 multiple-choice questions (store in JS array)
// - 60-second timer per question
// - Score tracking with timer bonus
// - Difficulty levels (Easy/Medium/Hard)
// - High score localStorage
// - Question shuffling
// - Progress bar

const questions = [
  {
    question: "What does 'this' refer to in object method?",
    options: ["Window", "Object itself", "Parent function", "Undefined"],
    correct: 1,
    difficulty: "easy",
  },
];

class Quiz {
  constructor(question, options, correct, difficulty) {
    this.id = 0;
    this.question = question;
    this.options = options;
    this.correct = correct;
    this.difficulty = difficulty;
  }
}

class QuizApp {
  constructor() {
    this.init();
    this.questions = []; // The 10 selected for this round
    this.currentIndex = 0;
    this.score = 0;
    this.timer = null; // Variable to hold the setInterval
    this.timeLeft = 60;
  }

  init() {
    this.loadFromStorage();
    this.render();
  }
}
