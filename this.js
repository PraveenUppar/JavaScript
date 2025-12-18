// this is a keyword that refers to the object that is currently executing the function

// Object context
const obj = {
  name: "Praveen",
  greet() {
    console.log(this.name);
  },
};

obj.greet();
