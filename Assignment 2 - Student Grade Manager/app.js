// Assignment 2: Student Grade Manager
// ===================================
//
// Build a grade manager using arrays, objects, and functions.
//
// Student object example:
// {
//   id: 1,
//   name: "Praveen",
//   marks: [90, 85, 95]
// }
//
// Requirements:
// 1. Start with at least 5 students
// 2. Create a function to calculate total marks
// 3. Create a function to calculate average marks
// 4. Create a function to assign grade based on the average marks:
//    A: 90+
//    B: 75-89
//    C: 50-74
//    F: below 50
// 5. Print each student's name, total, average, and grade
// 6. Find the topper
// 7. Filter failed students
//
// Bonus:
// - Add a function to add a new student
// - Sort students by average marks
// - Search student by name

// [] - array and {} - object
const students = [
  {
    id: 1,
    name: "A",
    marks: [90, 85, 95],
  },
  {
    id: 2,
    name: "B",
    marks: [90, 85, 95],
  },
  {
    id: 3,
    name: "C",
    marks: [90, 85, 95],
  },
  {
    id: 4,
    name: "D",
    marks: [90, 85, 95],
  },
  {
    id: 5,
    name: "E",
    marks: [90, 85, 95],
  },
];

// function calculateTotalMarks(marks) {
//   let total = 0;
//   for (let i = 0; i < marks.length; i++) {
//     total = total + marks[i];
//   }
//   return total;
// }
function calculateTotalMarks(marks) {
  return marks.reduce((sum, mark) => {
    return sum + mark;
  }, 0);
}

function calculateAverageMarks(totalMarks, marks) {
  return totalMarks / marks.length();
}

function assignGrade(avgMarks) {
  if (avgMarks >= 90) {
    return "A";
  } else if (75 <= avgMarks) {
    return "B";
  } else if (50 <= avgMarks) {
    return "C";
  } else {
    return "F";
  }
}

// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   const total = calculateTotalMarks(student.marks);
//   const average = calculateAverageMarks(total, student.marks);
//   const grade = assignGrade(average);
//   console.log(student.name, total, average, grade);
// }

for (const student of students) {
  const total = calculateTotalMarks(student.marks);
  const average = calculateAverageMarks(total, student.marks);
  const grade = assignGrade(average);
  console.log(student.name);
  console.log(total);
  console.log(average);
  console.log(grade);
}

let topper = null;
let highestAverage = 0;
for (const student of students) {
  const total = calculateTotalMarks(student.marks);
  const average = calculateAverageMarks(total, student.marks);

  if (average > highestAverage) {
    highestAverage = average;
    topper = student;
  }
}

const failedStudents = [];
for (const student of students) {
  const total = calculateTotalMarks(student.marks);
  const average = calculateAverageMarks(total, student.marks);
  const grade = assignGrade(average);
  if (grade === "F") {
    failedStudents.push(student);
  }
}

function addStudent(id, name, marks) {
  students.push({
    id: id,
    name: name,
    marks: marks,
  });
}
// addStudent(6, "E", [95,98,97]);

// for...in returns indexes -- for i in range(len(nums))
// for...of returns ojects -- for num in nums
const studentAverageMarks = [];
for (const student of students) {
  const total = calculateTotalMarks(student.marks);
  const average = calculateAverageMarks(total, student.marks);
  studentAverageMarks.push(average);
}
studentAverageMarks.sort((a, b) => b - a);

// const arr = [100, 25, 3];
// arr.sort();
// [100, 25, 3];  JavaScript sorts numbers as strings by default.

// arr.sort((a, b) => a - b);
// [3, 25, 100];

// if names are unique
function searchStudent(name) {
  return students.find((student) => student.name === name);
}

// if students have same name -- returns arr of student with same name
function searchStudents(name) {
  return students.filter((student) => student.name === name);
}

const arr = [100, 25, 3];
arr.sort();

console.log(arr);
