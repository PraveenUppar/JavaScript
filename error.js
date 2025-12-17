// try-catch-finally
try {
  riskyOperation();
} catch (error) {
  console.error("Error caught:", error.message);
} finally {
  console.log("Cleanup");
}

// Throwing errors
function validateAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
}
