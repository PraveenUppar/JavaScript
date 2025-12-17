// For loop
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs 0 to 4
}

// While loop
let j = 0;
while (j < 5) {
  console.log(j); // Outputs 0 to 4
  j++;
}

// Sum from 1 to n
let sum = 0;
function sum(n) {
  for (i = 0; i < n; i++) {
    sum += i;
  }
}
console.log(sum(5));
