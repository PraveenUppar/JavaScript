// Assignment 3: Todo List
// =======================
//
// Build a todo manager using arrays and objects.
//
// Todo object example:
// {
//   id: 1,
//   title: "Revise arrays",
//   completed: false
// }
//
// Requirements:
// 1. Start with 3 sample todos
// 2. Create addTodo(title)
// 3. Create listTodos()
// 4. Create markComplete(id)
// 5. Create deleteTodo(id)
// 6. Create updateTodo(id, newTitle)
// 7. Create filterTodos(status) where status can be "completed", or "pending"
// 8. Use proper validation for missing todo IDs
//
// Bonus:
// - Add dueDate and priority
// - Sort by priority
// - Count completed and pending todos

const todos = [
  {
    id: 1,
    title: "Revise arrays",
    completed: false,
  },
  {
    id: 2,
    title: "Learn objects",
    completed: false,
  },
  {
    id: 3,
    title: "Build a todo app",
    completed: false,
  },
];

function addTodo(title) {
  todos.push({
    id: todos.length + 1,
    title: title,
    completed: false,
  });
}

function listTodos() {
  console.log(todos);
}

function markComplete(id) {
  for (const todo of todos) {
    if (todo.id === id) {
      todo.completed = true;
      return;
    }
  }
  return "Todo not found";
}

function deleteTodo(id) {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return "Todo not found";
  }
  todos.splice(index, 1);
}

function updateTodo(id, newTitle) {
  for (const todo of todos) {
    if (todo.id === id) {
      todo.title = newTitle;
      return;
    }
  }
  return "Todo not found";
}

// filter() method creates a new array containing only the elements from the original array that pass a specific test condition
function filterTodos(status) {
  if (status === "completed") {
    return todos.filter((todo) => todo.completed);
  }
  if (status === "pending") {
    return todos.filter((todo) => !todo.completed);
  }
  return [];
}

const completed = todos.filter((todo) => todo.completed).length;
const pending = todos.filter((todo) => !todo.completed).length;
