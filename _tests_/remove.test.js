import Remove from '../src/modules/remove';

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
`


test('Removes task the DOM', () => {
  const lists = document.getElementById('todo-container');
  const remove = new Remove(1)
  expect(lists.childNodes).toHaveLength(3);
  remove.removeTodo();
  expect(lists.childNodes).toHaveLength(2);
});
