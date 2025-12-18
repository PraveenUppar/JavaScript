class Task {
  constructor(title, dueDate) {
    this.id = Date.now();
    this.title = title;
    this.dueDate = dueDate;
    this.completed = false;
    this.createdAt = new Date();
  }
}

class TodoApp extends TaskManager {
  // Advanced features
}
