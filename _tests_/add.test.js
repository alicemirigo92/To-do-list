import Add from '../src/modules/add.js';

document.body.innerHTML = `
<ul id="todo-container"></ul>
`;

describe('The function', () => {
  test('Adds an item to the DOM', () => {
    const container = document.getElementById('todo-container');
    expect(container.childNodes).toHaveLength(0);

    const add = new Add('cry', false, 1);
    add.addTodo();

    const todoList = JSON.parse(localStorage.getItem('todos'));
    expect(todoList).toHaveLength(1);
    expect(container.childNodes).toHaveLength(1);
  });

  test('Adds an item localstorage', () => {
    const add = new Add('cry', false, 1);
    add.addTodo();

    const todoList = JSON.parse(localStorage.getItem('todos'));
    expect(todoList).toHaveLength(2);
  });
});