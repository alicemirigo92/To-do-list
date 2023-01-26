import todos from "./todos/todos";
import './index.css'

const list = document.getElementById('todo-container');
todos.sort((a, b) => a.index > b.index).forEach((t) => {
  const li = document.createElement('li');
  const input = document.createElement('input');
  const span = document.createElement('span');
  const i = document.createElement('i');

  li.setAttribute('class', 'todo');
  input.setAttribute('type', 'checkbox')
  input.checked = t.completed;
  span.textContent = t.description;
  i.setAttribute('class', 'bi bi-three-dots-vertical')

  li.append(input, span, i)
  list.append(li);

  if (t.completed) {
    li.style.textDecoration = 'line-through';
  }
})
