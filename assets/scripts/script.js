// 🦉: Create Variables with references to the elements
const newTodo = document.getElementById(`new-todo`);
const todoList = document.getElementById(`todo-list`);
const todoCounter = document.querySelector(`.todo-count`);

// -----------------------------------------------------------------------------

// 🦉: Create a function that creates and appends a list item to your todo list 
function addTodoToList(todo) {
  // Create an new List Item
  
  // Modify the InnerHTML of the List Item

  // Append the List Item to the Todo List
}

// 🦉: Don't forget to call the function

// -----------------------------------------------------------------------------

// 🦉: Add an Event Listeners to the new-todo input
// If the user presses the enter key, call the addTodoToList function
newTodo.addEventListener(`keyup`, function(event) {
  console.log(event.key);
  if(event.key === `Enter`) {
    const todo = newTodo.value;
    newTodo.value = ``;
    addTodoToList(todo);
  }
});

// -----------------------------------------------------------------------------

function markCompleted(event) {
  // TODO: Find the correct parentNode.
  const todo = event.target;
  todo.classList.toggle(`completed`);
  calculateNumberOfTodos();
}

// -----------------------------------------------------------------------------

function calculateNumberOfTodos () {
  const allTodos = todoList.getElementsByTagName(`li`).length;
  const completedTodos = todoList.querySelectorAll(`.completed`).length;
  const remainingTodos = allTodos - completedTodos;

  todoCounter.innerText = `${remainingTodos} items left out of ${allTodos}`;
}