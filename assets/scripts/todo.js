// Element References
const todoCounter = document.querySelector(`.todo-count`);

function getTodoItemTemplate(todo) {
  return `
    <div class="view">
      <input class="toggle" type="checkbox">
      <label>${todo}</label>
    </div>
  `;
}

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