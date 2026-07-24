// Practice 3: Functions, Arrays, Objects
// Run: node practice/practice3.js

// Exercise 1: Function to calculate discount.
function calculateDiscount(price, discountPercent) {
  return price - price * (discountPercent / 100);
}

console.log(calculateDiscount(1000, 10));

// Exercise 2: Array methods.
const products = [
  { name: "Laptop", price: 50000, inStock: true },
  { name: "Mouse", price: 700, inStock: true },
  { name: "Keyboard", price: 1500, inStock: false },
  { name: "Monitor", price: 12000, inStock: true },
];

const availableProducts = products.filter((product) => product.inStock);
console.log(availableProducts);

const productNames = products.map((product) => product.name);
console.log(productNames);

const totalStockValue = availableProducts.reduce((sum, product) => sum + product.price, 0);
console.log(totalStockValue);

// Exercise 3: Object method.
const cart = {
  items: [],
  addItem(name, price) {
    this.items.push({ name, price });
  },
  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  },
};

cart.addItem("Book", 300);
cart.addItem("Pen", 20);
console.log(cart.items);
console.log(cart.getTotal());
