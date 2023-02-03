import Check from '../src/modules/check.js';

const todos = [
  {
    description: 'wash',
    completed: false,
    index: 1,
  },
];

localStorage.setItem('todos', JSON.stringify(todos));

describe('The function', () => {
  test('Updates the selected item`s completed status to true in the localstorage', () => {
    const check = new Check(1);
    check.checkItem();

    const todoList = JSON.parse(localStorage.getItem('todos'));
    expect(todoList[0].completed).toBe(true);
  });
});