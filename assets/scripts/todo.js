// Element References
const newTodo = document.getElementById(`new-todo`);
const todoList = document.getElementById(`todo-list`);
const todoCounter = document.querySelector(`.todo-count`);


newTodo.addEventListener(`keyup`, function(event) {
  if(event.key === `Enter`) {
    const todo = newTodo.value;
    newTodo.value = ``;
    addTodoToList(todo);
  }
});

function addTodoToList(todo) {
  const template = `
    <div class="view">
      <input class="toggle" type="checkbox">
      <label>${todo}</label>
    </div>
  `;
  const newTodoListItem = document.createElement(`li`);
  newTodoListItem.innerHTML = template;
  newTodoListItem.querySelector(`input`).addEventListener(`click`, markCompleted);
  todoList.appendChild(newTodoListItem);
  calculateNumberOfTodos();
}


addTodoToList(`Meet with the Dean!`);
addTodoToList(`Meet with the search Committee`);
addTodoToList(`Meet with Hazem`);
addTodoToList(`Give a presentation`);
addTodoToList(`Get Hired!`);

function markCompleted(event) {
  const todo = event.target.parentNode.parentNode;
  todo.classList.toggle(`completed`);
  calculateNumberOfTodos();
}

function calculateNumberOfTodos () {
  const allTodos = todoList.getElementsByTagName(`li`).length;
  const completedTodos = todoList.querySelectorAll(`.completed`).length;
  const remainingTodos = allTodos - completedTodos;

  todoCounter.innerText = `${remainingTodos} items left out of ${allTodos}`;
}