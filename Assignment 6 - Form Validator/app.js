// Assignment 6: Form Validator
// ============================
//
// Build a signup form validator using DOM events.
//
// Required fields:
// - name
// - email
// - password
// - confirmPassword
//
// Requirements:
// 1. Validate on form submit
// 2. Name is required and must be at least 3 characters
// 3. Email must contain @ and .
// 4. Password must be at least 8 characters
// 5. Confirm password must match password
// 6. Show error messages below each input
// 7. Prevent form submission if errors exist
// 8. Show success message when all fields are valid
//
// Bonus:
// - Validate while typing
// - Add show/hide password toggle
// - Add password strength text

// DOM Element Selectors
const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm-password");
const successMessage = document.getElementById("success-message");
const passwordStrength = document.getElementById("password-strength");

// Password Toggles
const togglePasswordBtn = document.getElementById("toggle-password");
const toggleConfirmBtn = document.getElementById("toggle-confirm");

// Helper to show errors down-hierarchy
function showError(input, message) {
  const formControl = input.closest(".form-control");
  formControl.className = "form-control error";
  const small = formControl.querySelector(".error-text");
  small.innerText = message;
}

// Helper to show structural valid state
function showSuccess(input) {
  const formControl = input.closest(".form-control");
  formControl.className = "form-control success";
  const small = formControl.querySelector(".error-text");
  small.innerText = "";
}

// Requirement 2: Name Validation
function validateName() {
  const value = nameInput.value.trim();
  if (value === "") {
    showError(nameInput, "Name is required.");
    return false;
  } else if (value.length < 3) {
    showError(nameInput, "Name must be at least 3 characters.");
    return false;
  } else {
    showSuccess(nameInput);
    return true;
  }
}

// Requirement 3: Email Validation
function validateEmail() {
  const value = emailInput.value.trim();
  if (value === "") {
    showError(emailInput, "Email is required.");
    return false;
  } else if (!value.includes("@") || !value.includes(".")) {
    showError(emailInput, 'Email must contain "@" and "." symbols.');
    return false;
  } else {
    showSuccess(emailInput);
    return true;
  }
}

// Requirement 4: Password Validation
function validatePassword() {
  const value = passwordInput.value; // Don't trim to allow white spaces intentionally
  if (value === "") {
    showError(passwordInput, "Password is required.");
    passwordStrength.className = "strength-meter hidden";
    return false;
  } else if (value.length < 8) {
    showError(passwordInput, "Password must be at least 8 characters.");
    return false;
  } else {
    showSuccess(passwordInput);
    return true;
  }
}

// Requirement 5: Confirm Password Validation
function validateConfirmPassword() {
  const passwordValue = passwordInput.value;
  const confirmValue = confirmInput.value;

  if (confirmValue === "") {
    showError(confirmInput, "Please confirm your password.");
    return false;
  } else if (passwordValue !== confirmValue) {
    showError(confirmInput, "Passwords do not match.");
    return false;
  } else {
    showSuccess(confirmInput);
    return true;
  }
}

// Bonus requirement: Real-time dynamic password meter
function checkPasswordStrength() {
  const value = passwordInput.value;
  if (value.length === 0) {
    passwordStrength.className = "strength-meter hidden";
    return;
  }

  passwordStrength.className = "strength-meter";
  let score = 0;

  if (value.length >= 8) score++;
  if (/[A-Z]/.test(value)) score++; // Has uppercase
  if (/[0-9]/.test(value)) score++; // Has numeric digit
  if (/[^A-Za-z0-9]/.test(value)) score++; // Has symbol

  if (score <= 2) {
    passwordStrength.innerText = "Strength: Weak";
    passwordStrength.className = "strength-meter strength-weak";
  } else if (score === 3) {
    passwordStrength.innerText = "Strength: Medium";
    passwordStrength.className = "strength-meter strength-medium";
  } else {
    passwordStrength.innerText = "Strength: Strong!";
    passwordStrength.className = "strength-meter strength-strong";
  }
}

// Bonus requirement: Live styling feedback while typing
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);

passwordInput.addEventListener("input", () => {
  validatePassword();
  checkPasswordStrength();
  // Live cross-check match if confirm input has a running evaluation
  if (confirmInput.value !== "") validateConfirmPassword();
});

confirmInput.addEventListener("input", validateConfirmPassword);

// Bonus requirement: Toggle show/hide actions
function setupToggle(button, targetInput) {
  button.addEventListener("click", () => {
    if (targetInput.type === "password") {
      targetInput.type = "text";
      button.innerText = "Hide";
    } else {
      targetInput.type = "password";
      button.innerText = "Show";
    }
  });
}
setupToggle(togglePasswordBtn, passwordInput);
setupToggle(toggleConfirmBtn, confirmInput);

// Requirements 1, 7 & 8: Form Submission Event Handling
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Intercept browser actions

  // Force single execution evaluation checks for all structural parameters
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmValid = validateConfirmPassword();

  if (isNameValid && isEmailValid && isPasswordValid && isConfirmValid) {
    // Show structural confirmation success banner container
    successMessage.classList.remove("hidden");
    form.reset(); // Reset form elements natively
    passwordStrength.className = "strength-meter hidden";

    // Clear functional visualization styling flags downstream
    document.querySelectorAll(".form-control").forEach((control) => {
      control.classList.remove("success");
    });

    // Auto-scroll layout up to show visual global execution success alert
    successMessage.scrollIntoView({ behavior: "smooth" });
  } else {
    successMessage.classList.add("hidden");
  }
});
