// Kelvin's Kelvin-to-Celsius-to-Fahrenheit Converter

// ============================================
// STEP 1: Store the forecasted temperature in Kelvin as a variable.
// ============================================
const kelvin = 283;

// ============================================
// STEP 2: Convert Kelvin to Celsius.
// Formula: celsius = kelvin - 273
// ============================================
const celsius = kelvin - 273;

// ============================================
// STEP 3: Convert Celsius to Fahrenheit.
// Formula: fahrenheit = celsius * (9/5) + 32
// ============================================
const fahrenheit = celsius * (9 / 5) + 32;

// ============================================
// STEP 4: Print out all three temperatures so we can verify the
// conversion chain is correct.
// ============================================
console.log(`${kelvin} K`);
console.log(`${celsius} °C`);
console.log(`${fahrenheit} °F`);
