// Control Flow
// Run: node 04-control-flow.js

let marks = 82;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

let role = "admin";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "editor":
    console.log("Can edit content");
    break;
  case "viewer":
    console.log("Can view content");
    break;
  default:
    console.log("Unknown role");
}

// Truthy and falsy values
// Falsy: false, 0, "", null, undefined, NaN

let username = "";

if (username) {
  console.log("Username exists");
} else {
  console.log("Username is empty");
}
