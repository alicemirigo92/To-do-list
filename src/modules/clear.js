export default class Clear {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  clearTodos() {
    const filtered = this.todos.filter((t) => !t.completed);
    let start = 1;
    for (let i = 0; i < filtered.length; i += 1) {
      filtered[i].index = start;
      start += 1;
    }
    localStorage.setItem('todos', JSON.stringify(filtered));
  }
}
