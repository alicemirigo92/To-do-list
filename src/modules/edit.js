export default class Edit {
  constructor(e) {
    this.event = e;
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  editItem() {
    const todo = this.todos.find((t) => t.index === +this.event.target.parentNode.id);
    const edited = this.event.target.textContent.trim();

    if (edited) {
      todo.description = edited;
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
