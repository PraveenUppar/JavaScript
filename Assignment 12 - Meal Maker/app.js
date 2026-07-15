// Today's Special

// ============================================
// STEP 1: Create a class to represent Today's Special, with private
// fields for the meal and price (prefixed with _ by convention, since
// they should only be changed through the setters below).
// ============================================
class Special {
  constructor() {
    this._meal = "";
    this._price = 0;
  }

  // ============================================
  // STEP 2: Getter for meal — just returns the current value.
  // ============================================
  get meal() {
    return this._meal;
  }

  // ============================================
  // STEP 3: Setter for meal — validates that the meal name is a
  // non-empty string before allowing it to be set. This is where we
  // prevent embarrassing errors, like an accidentally blank special.
  // ============================================
  set meal(mealValue) {
    if (typeof mealValue === "string" && mealValue.trim().length > 0) {
      this._meal = mealValue;
    } else {
      console.log("Meal name must be a non-empty string.");
    }
  }

  // ============================================
  // STEP 4: Getter for price — returns the current value, formatted
  // as currency for display.
  // ============================================
  get price() {
    return `$${this._price.toFixed(2)}`;
  }

  // ============================================
  // STEP 5: Setter for price — validates that price is a positive
  // number before allowing it to be set. This prevents nonsensical
  // prices like negative numbers or non-numeric values.
  // ============================================
  set price(priceValue) {
    if (typeof priceValue === "number" && priceValue > 0) {
      this._price = priceValue;
    } else {
      console.log("Price must be a positive number.");
    }
  }

  // ============================================
  // STEP 6: A method to print out today's special in a nice
  // customer-facing format, using the getters above.
  // ============================================
  printSpecial() {
    console.log(`Today's Special: ${this.meal} for ${this.price}`);
  }
}

// ============================================
// STEP 7: Try it out — create a special, set valid values, and print.
// ============================================
const todaysSpecial = new Special();

todaysSpecial.meal = "Grilled Salmon with Asparagus";
todaysSpecial.price = 24.99;

todaysSpecial.printSpecial();

// ============================================
// STEP 8: Test the validation — try setting invalid values and confirm
// they're rejected instead of silently corrupting the special.
// ============================================
todaysSpecial.meal = ""; // should log an error, meal stays unchanged
todaysSpecial.price = -5; // should log an error, price stays unchanged

todaysSpecial.printSpecial(); // still shows the valid values from Step 7
