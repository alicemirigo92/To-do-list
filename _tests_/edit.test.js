import Edit from '../src/modules/edit.js';

describe('edit class', () => {
  let edit;
  let event;
  const todos = [{ index: 1, description: 'todo 1' }, { index: 2, description: 'todo 2' }];

  beforeEach(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    event = { target: { parentNode: { id: '1' }, textContent: 'edited todo' } };
    edit = new Edit(event);
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('editItem method updates todo description', () => {
    edit.editItem();
    const updatedTodos = JSON.parse(localStorage.getItem('todos'));
    expect(updatedTodos[0].description).toBe('edited todo');
  });

  test('editItem method does not update todo description if edited is empty', () => {
    event.target.textContent = '';
    edit = new Edit(event);
    edit.editItem();
    const updatedTodos = JSON.parse(localStorage.getItem('todos'));
    expect(updatedTodos[0].description).toBe('todo 1');
  });
});
