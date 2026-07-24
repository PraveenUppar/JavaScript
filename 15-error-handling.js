// Error Handling
// Run: node 15-error-handling.js

try {
  let result = JSON.parse('{"name":"Praveen"}');
  console.log(result.name);
} catch (error) {
  console.error("Invalid JSON:", error.message);
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0));
} catch (error) {
  console.error("Divide error:", error.message);
}

function validateUser(user) {
  const errors = [];

  if (!user.name) errors.push("Name is required");
  if (!user.email || !user.email.includes("@")) errors.push("Valid email is required");
  if (user.age < 18) errors.push("Age must be at least 18");

  return errors;
}

const errors = validateUser({
  name: "",
  email: "wrong-email",
  age: 16,
});

if (errors.length > 0) {
  console.log("Validation errors:", errors);
}
