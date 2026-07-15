//  Create a program that checks if a number is prime.
function isPrime(num) {
  // Handle edge cases
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  // Check odd divisors up to sqrt(num)
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}
console.log(isPrime(2)); // true
console.log(isPrime(17)); // true

// Write a program that prints the multiplication table (1-10) for any given number.
function Table(num, range = 10) {
  for (let i = 1; i <= range; i++) {
    console.log(`${num} × ${i} = ${num * i}`);
  }
}
Table(5, 10);

// Create a FizzBuzz program (numbers 1-100: print "Fizz" for multiples of 3, "Buzz" for multiples of 5, "FizzBuzz" for multiples of both).
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";

    console.log(output || i);
  }
}
fizzBuzz();

// Build a program that finds the sum of all numbers in a range.
function sumRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumRange(1, 100)); // 5050

// Write a program to find the GCD of two numbers.

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(gcd(48, 18)); // 6
