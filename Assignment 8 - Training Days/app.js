// As a seasoned athlete, one of your favorite activities is running
// marathons. This program is being refactored to fix variable scope
// issues so it's more maintainable and less error-prone.

// FIX: `random` was declared at the top level (too loose) even though
// it's only ever used inside getRandEvent(). Moving it inside the
// function keeps it scoped to where it's actually needed.
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

// FIX: `days` was declared with `let` inside each if/else block, so it
// was block-scoped to that block only — the `return days;` line
// outside the blocks couldn't see it (this would actually throw a
// ReferenceError as originally written). Declaring `let days` once,
// outside the if/else chain, lets each branch assign to the same
// variable, which is then visible at the return.
const getTrainingDays = (event) => {
  let days;

  if (event === "Marathon") {
    days = 50;
  } else if (event === "Triathlon") {
    days = 100;
  } else if (event === "Pentathlon") {
    days = 200;
  }

  return days;
};

// FIX: `name` was redeclared separately inside both logEvent and
// logTime (too tight, and duplicated). Now it's passed in as a
// parameter to both functions instead, so there's a single source of
// truth defined once at the top level.
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);

// FIX: `name` is now defined once here, and passed as an argument into
// both logEvent and logTime below.
const name = "Nala";

logEvent(name, event);
logTime(name, days);
