export default class Remove {
  constructor(id) {
    this.id = id;
    this.list = document.getElementById('todo-container');
    this.todoItem = document.getElementById(`${this.id}`);
  }

  removeTodo() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const remainingTodos = todos.filter((t) => t.index !== this.id);
    const largerIndexes = remainingTodos.filter((t) => t.index > this.id);
    const children = this.list.childNodes;

    if (largerIndexes.length) {
      largerIndexes.forEach((t) => {
        t.index -= 1;
      });
    }
    this.list.removeChild(this.todoItem);
    for (let i = 0; i < children.length; i += 1) {
      if (+children[i].id > this.id) {
        children[i].id = +children[i].id - 1;
      }
    }
    localStorage.setItem('todos', JSON.stringify(remainingTodos));
  }
}
