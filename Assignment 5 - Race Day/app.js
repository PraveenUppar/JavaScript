// Codecademy Race Registration

// ============================================
// STEP 1: Store a runner's age and whether they registered early.
// Change these to test different runner scenarios.
// ============================================
const age = 24;
const registeredEarly = true;

// ============================================
// STEP 2: Determine if the runner is an adult or youth. The project
// says runners "exactly 18" need to be handled — the natural reading
// of "adult runners (over 18)" vs "youth (under 18)" leaves 18 as a
// gap, so we resolve it by treating age >= 18 as adult (the more
// common convention, and matches "adult" starting at 18 in most
// real-world contexts).
// ============================================
const isAdult = age >= 18;

// ============================================
// STEP 3: Assign a race number based on age and registration timing.
// - Early adults: number at or above 1000 (up to 9999, picked randomly)
// - Everyone else (late adults, all youth): number below 1000
// ============================================
let raceNumber;

if (isAdult && registeredEarly) {
  raceNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
} else {
  raceNumber = Math.floor(Math.random() * 1000);
}

// ============================================
// STEP 4: Assign a start time based on age and registration timing.
// - Early adults: 9:30 am
// - Late adults: 11:00 am
// - Youth (any registration time): 12:30 pm
// ============================================
let startTime;

if (isAdult) {
  startTime = registeredEarly ? "9:30 am" : "11:00 am";
} else {
  startTime = "12:30 pm";
}

// ============================================
// STEP 5: Print the runner's registration details.
// ============================================
console.log(`Age: ${age}`);
console.log(`Registered early: ${registeredEarly}`);
console.log(`Race number: ${raceNumber}`);
console.log(`Start time: ${startTime}`);
