// Selectors
let todoinput = document.querySelector(".todo-input");
let todoList = document.querySelector(".todo-list");
let todoButton = document.querySelector(".todo-button");
let filterOption = document.querySelector(".filter-todos");
//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
//Functions
function addTodo(e) {
  // Prevent button from submitting
  e.preventDefault();
  // Todo Div
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // todo li
  let newTodo = document.createElement("li");
  newTodo.innerText = todoinput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // Check Mark Button
  let completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class='fa fa-check'></i>";
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  // Move To Trash Button
  let trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='fa fa-trash'></i>";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  // Append To list
  todoList.appendChild(todoDiv);
  // Clear input value
  todoinput.value = "";
}
function deleteCheck(e) {
  let item = e.target;
  //Delete Todo
  if (item.classList[0] === "trash-btn") {
    const todoItem = item.parentElement;
    todoItem.classList.add("fall");
    todoItem.addEventListener("transitionend", () => {
      todoItem.remove();
    });
  }
  // CHeck Mark
  if (item.classList[0] === "complete-btn") {
    const todoItem = item.parentElement;
    todoItem.classList.toggle("completed");
  }
}
// FilterTODO
function filterTodo(e) {
  let todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
