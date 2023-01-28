import Display from './display.js';
import Todo from './todos.js';

export default class Add {
  constructor(description, completed, index) {
    this.todo = new Todo(description, completed, index);
    this.list = document.getElementById('todo-container');
  }

  addTodo() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.todo.index = todos.length + 1;
    todos.push(this.todo);
    const display = new Display();
    display.showTodo(this.todo);

    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
