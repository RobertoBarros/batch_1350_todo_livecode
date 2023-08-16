import Mustache from "mustachejs";

const template = document.getElementById('todo-template').innerHTML;
const container = document.getElementById('todosContainer');
const input = document.getElementById('input');

const btn = document.getElementById('addButton')

btn.addEventListener('click', (event) => {
  const title = input.value
  const newTodo = { title: title, done: false }
  todos.push(newTodo);
  input.value = null;
  refreshTodos();
});


const todos = [
  { title: "Code a to-do list", done: false },
  { title: "Eat breakfast", done: true },
  { title: "Do some exercise", done: false },
  { title: "Water the plants", done: true }
];


const refreshTodos = () => {
  const output = Mustache.render(template, {todos: todos})
  container.innerHTML = output;
}

refreshTodos();










// To-do item HTML 👇
// <div class="shadow-sm rounded px-4 py-3 mb-2 border d-flex">
//   <input class="d-flex form-check-input me-1" type="checkbox">
//   <div>Replace with to-do title</div>
// </div>

// TODO: Dynamically generate a list of to-dos based on `todos` array, and display them
