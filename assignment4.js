// Create user object with properties and methods.
const user = {
  name: "Pavi",
  age: 20,
  city: "Banglore",
  greet() {
    return `Hello, I'm ${this.name}`;
  },
  updateEmail(newEmail) {
    this.email = newEmail;
    return this;
  },
};

console.log(user.greet());
user.updateEmail("newemail@example.com");
