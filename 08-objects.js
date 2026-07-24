// Objects
// Run: node 08-objects.js

let student = {
  name: "Praveen",
  age: 22,
  skills: ["JavaScript", "Node.js", "Express.js"],
  address: {
    city: "Chennai",
    country: "India",
  },
  introduce: function () {
    return `I am ${this.name}`;
  },
};

console.log(student.name);
console.log(student["age"]);
console.log(student.skills[0]);
console.log(student.address.city);
console.log(student.introduce());

// Add, update, delete
student.email = "praveen@example.com";
student.age = 23;
delete student.email;

console.log(student);

// Destructuring
const { name, age } = student;
console.log(name, age);

const [firstSkill, secondSkill] = student.skills;
console.log(firstSkill, secondSkill);

// Object.keys, Object.values, Object.entries
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

// Spread operator
const updatedStudent = {
  ...student,
  isActive: true,
};

console.log(updatedStudent);
