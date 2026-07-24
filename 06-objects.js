// Objects = An object in JavaScript is a collection of key-value pairs
let user3 = {
  name: "Pavi",
  age: 19,
};
console.log("Pavi age is " + user.age);

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
};

// Object of Objects
const user1 = {
  name: "harkirat",
  age: 19,
  address: {
    city: "Delhi",
    country: "India",
    address: "1122 DLF",
  },
};
const city = user1.address.city;

// Object creation
const person = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

// Destructuring object
const { name, age } = person;
console.log(name); // Output: John
console.log(age);

//  OR (Renaming Variables)

const { name: personName, age: personAge } = person;
console.log(personName); // Output: John
console.log(personAge);

// Object methods
Object.keys(person); // ["name", "age", "greet"]
Object.values(person); // ["John", 30, function]
Object.entries(person); // [["name", "John"], ["age", 30], ...]

// Spread Operator (...) with Objects

// Shallow Copying
const originalObj = { a: 1, b: 2 };
const copyObj = { ...originalObj };
console.log(copyObj); // Output: { a: 1, b: 2 }

// Merging Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }

// Adding/Updating Properties
const user = { name: "Jen", age: 22 };
const updatedUser = { ...user, location: "Philadelphia", age: 23 };
console.log(updatedUser); // Output: { name: 'Jen', age: 23, location: 'Philadelphia' }
