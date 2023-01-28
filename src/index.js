import './index.css';
import Add from './modules/add.js';
import Clear from './modules/clear.js';
import Display from './modules/display.js';

const form = document.getElementById('form');
const clear = document.getElementById('clear');
const display = new Display();

display.displayTodos();

form.addEventListener('submit', (e) => {
  const description = document.getElementById('addlist').value.trim();
  e.preventDefault();
  if (description) {
    const todo = new Add(description);
    todo.addTodo();
  }
  form.reset();
});

clear.addEventListener('click', () => {
  const clear = new Clear();
  clear.clearTodos();
  display.displayTodos();
});
