export default class Check {
  constructor(id) {
    this.id = id;
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  checkItem() {
    const checked = this.todos.find((t) => t.index === +this.id);
    if (checked) {
      checked.completed = !checked.completed;
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
