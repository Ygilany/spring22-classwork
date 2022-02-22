const newTodoInput = document.getElementById(`new-todo`);
const todoList = document.getElementById(`todo-list`);


function addTodoToList(todo) {
  const todoItemHTML = getTodoItemTemplate(todo);
  const newTodoListItem = document.createElement(`li`);
  
  newTodoListItem.innerHTML = todoItemHTML;
  newTodoListItem.querySelector(`input`).addEventListener(`click`, markCompleted);
  
  todoList.appendChild(newTodoListItem);
  
  calculateNumberOfTodos();
}

addTodoToList(`Arrive at Campus`);
addTodoToList(`Meet with the Dean`);
addTodoToList(`Meet with Hazem`);
addTodoToList(`Meet with the Search Committee`);
addTodoToList(`Give a presentation`);
addTodoToList(`Meet with the Dean✅`);

// TODO: Add a new todo item to the list when the user presses enter
newTodoInput.addEventListener(`keyup`, function(event) {
  if (event.key === 'Enter') {
    const newTodo = newTodoInput.value;
    addTodoToList(newTodo);
    newTodoInput.value = ``;
  }
});