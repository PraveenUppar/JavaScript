// Features to include:
// 1. Add todos
// 2. Delete todos
// 3. Mark as complete
// 4. Filter (all, active, completed)
// 5. Persist using localStorage
// 6. Fetch todos from an API

[
  { id: 1, title: "Buy milk", completed: false },
  { id: 2, title: "Walk dog", completed: true },
];
class TodoApp {
  constructor() {
    this.todos = [];
    this.todoId = 0;
    this.init();
  }

  init() {
    this.loadFromStorage();
    this.render();
  }

  addTodo(title) {
    let new_todo = {
      id: todoId,
      title: title,
      completed: false,
    };
    this.todos.push(new_todo);
    this.todoId++;
    this.saveToStorage();
    this.render();
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => id !== todo);
    this.saveToStorage();
    this.render();
  }

  toggleTodo(id) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !completed };
      } else {
        return todo;
      }
    });

    this.saveToStorage();
    this.render();
  }

  filter(status) {
    if (status === "all") {
      return this.todos;
    }
    if (status === "active") {
      return (this.todos = this.todos.filter((todo) => !todo.completed));
    }
    if (status === "completed") {
      return (this.todos = this.todos.filter((todo) => todo.completed));
    }
  }

  saveToStorage() {
    localStorage.setItem;
    "my_todos", JSON.stringify(this.todos);
  }

  loadFromStorage() {
    const data = localStorage.getItem("my_todos");
    if (data) {
      this.todos = JSON.parse(data);
    }
  }

  async fetchTodos() {
    const response = await fetch();
    const data = await response.json();
    this.todos = data.slice(0, 10);
    render();
  }
}
