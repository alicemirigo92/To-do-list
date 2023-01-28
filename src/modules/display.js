import Remove from './remove.js';
import Check from './check.js';
import Edit from './edit.js';

export default class Display {
  constructor() {
    this.list = document.getElementById('todo-container');
  }

  displayTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.list.innerHTML = '';
    todos.sort((a, b) => a.index < b.index).forEach((t) => {
      const li = document.createElement('li');
      const input = document.createElement('input');
      const span = document.createElement('span');

      const i = document.createElement('i');

      li.setAttribute('class', 'todo');
      li.id = t.index;
      input.setAttribute('type', 'checkbox');
      input.checked = t.completed;
      if (t.completed) {
        li.style.textDecoration = 'line-through';
      }
      span.textContent = t.description;
      span.setAttribute('contenteditable', true);
      i.setAttribute('class', 'bi bi-three-dots-vertical');

      li.append(input, span, i);
      this.list.append(li);

      span.addEventListener('focusout', () => {
        const edit = new Edit();
        edit.editItem();
      });

      i.addEventListener('click', () => {
        const remove = new Remove(t.index);
        remove.removeTodo();
      });

      i.addEventListener('mouseover', () => {
        i.setAttribute('class', 'bi bi-trash-fill');
      });

      i.addEventListener('mouseout', () => {
        i.setAttribute('class', 'bi bi bi-three-dots-vertical');
      });

      input.addEventListener('change', () => {
        const check = new Check(t.index);
        check.checkItem();
        if (input.checked) {
          li.style.textDecoration = 'line-through';
        } else {
          li.style.textDecoration = 'none';
        }
      });
    });
  }

  showTodo(todo) {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const i = document.createElement('i');

    li.setAttribute('class', 'todo');
    li.id = todo.index;
    input.setAttribute('type', 'checkbox');
    input.checked = todo.completed;
    span.textContent = todo.description;
    span.setAttribute('contenteditable', true);
    i.setAttribute('class', 'bi bi-three-dots-vertical');

    li.append(input, span, i);
    span.addEventListener('focusout', (e) => {
      const edit = new Edit(e);
      edit.editItem();
    });

    this.list.prepend(li);
    i.addEventListener('click', (e) => {
      const remove = new Remove(+e.target.parentNode.id);
      remove.removeTodo();
    });
    input.addEventListener('change', () => {
      const check = new Check(todo.index);
      check.checkItem();
      if (input.checked) {
        li.style.textDecoration = 'line-through';
      } else {
        li.style.textDecoration = 'none';
      }
    });
    i.addEventListener('mouseover', () => {
      i.setAttribute('class', 'bi bi-trash-fill');
    });

    i.addEventListener('mouseout', () => {
      i.setAttribute('class', 'bi bi bi-three-dots-vertical');
    });
  }
}
