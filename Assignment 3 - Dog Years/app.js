// Human Age to Dog Years Converter

// ============================================
// STEP 1: Store your age in human years. Change this to your own age.
// ============================================
const age = 30;

// ============================================
// STEP 2: Handle the first two years, which count as 10.5 dog years
// each — 21 dog years total for humans aged 2 or older.
// If age is less than 2, this step needs to scale proportionally
// instead (see Step 3).
// ============================================
const firstTwoYearsInDogYears = 21;

// ============================================
// STEP 3: Calculate dog years for ages under 2, in case someone plugs
// in an age like 1 or 1.5. Each of the first two years is 10.5 dog
// years, so this just scales age by 10.5.
// ============================================
const underTwoInDogYears = age * 10.5;

// ============================================
// STEP 4: For age 2 and up, calculate the dog years from the age
// remaining after the first two years, at 4 dog years per year.
// ============================================
const remainingYears = age - 2;
const remainingYearsInDogYears = remainingYears * 4;

// ============================================
// STEP 5: Combine everything into the total dog age, using a
// conditional to pick the right calculation based on age.
// ============================================
let dogYears;

if (age < 2) {
  dogYears = underTwoInDogYears;
} else {
  dogYears = firstTwoYearsInDogYears + remainingYearsInDogYears;
}

// ============================================
// STEP 6: Print the result.
// ============================================
console.log(`You are ${age} years old in human years.`);
console.log(`In dog years, you are ${dogYears} years old!`);
