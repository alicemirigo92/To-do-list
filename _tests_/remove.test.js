import Remove from '../src/modules/remove.js';

const todos = [
  {
    description: 'wash',
    completed: false,
    index: 1,
  },
  {
    description: 'wash',
    completed: false,
    index: 3,
  },
];
localStorage.setItem('todos', JSON.stringify(todos));

document.body.innerHTML = `
<ul id="todo-container">
<li class="todo" id="1">
  <input type="checkbox" />
    <span contenteditable="true">
      hahahharf
    </span>
    <i class="bi bi-three-dots-vertical"></i>
</li>
</ul>
`;

describe('The function', () => {
  test('Removes an item from the localstorage and the DOM', () => {
    const container = document.getElementById('todo-container');
    expect(container.childNodes).toHaveLength(3);

    const remove = new Remove(1);
    remove.removeTodo();

    const todoList = JSON.parse(localStorage.getItem('todos'));
    expect(todoList).toHaveLength(1);
    expect(container.childNodes).toHaveLength(2);
  });
});