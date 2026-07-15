// - Add expenses (title, amount, category, date)
// - Categorize: Food, Transport, Entertainment, Other
// - Calculate total spent, spent by category
// - Filter by date range
// - Delete/edit expenses
// - Persist all data in localStorage

[
  {
    id: 0,
    title: "Buy milk",
    amount: 100,
    category: "Food",
    date: 12 - 12 - 2035,
  },
];

class Expense {
  // Pass all data needed to create one receipt
  constructor(title, amount, category, date) {
    this.id = Date.now();
    this.title = title;
    this.amount = Number(amount);
    this.category = category;
    this.date = new Date(date);
  }
}
class ExpenseTracker {
  constructor() {
    this.expenses = [];
    this.init();
  }

  init() {
    this.loadFromStorage();
    this.render();
  }

  addExpense(title, amount, category, date) {
    const newExpense = new Expense(title, amount, category, date);
    this.expenses.push(newExpense);
    this.saveToStorage();
    this.render();
  }

  deleteExpense(id) {
    this.expenses = this.expenses.filter((expense) => {
      expense.id !== id;
    });
  }

  editExpense(id, updatedTitle, updatedAmount, updatedCategory, updatedDate) {
    this.expenses = this.expenses.map((expense) => {
      if (expense.id === id) {
        return {
          id: id, // Keep the original ID!
          title: updatedTitle,
          amount: Number(updatedAmount),
          category: updatedCategory,
          date: new Date(updatedDate),
        };
      } else {
        return expense;
      }
    });
    this.saveToStorage();
    this.render();
  }

  calculateTotal() {
    let total = 0;
    for (const expense of this.expenses) {
      total += expense.amount;
    }
    return total;
  }

  filterByDate(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return this.expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      return expenseDate >= start && expenseDate <= end;
    });
  }
}
