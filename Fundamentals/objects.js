// Objects = An object in JavaScript is a collection of key-value pairs
let user = {
  name: "Pavi",
  age: 19,
};

console.log("Pavi age is " + user.age);

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
