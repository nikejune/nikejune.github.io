const todolist = document.querySelector("#todo-list");
const todoinput = document.querySelector("#todo-form-input");

let todoArr = [];

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todoArr));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();

  todoArr = todoArr.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
}

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodoObj.text;
  todolist.appendChild(li);
}
function submitHandler(event) {
  event.preventDefault();
  const newTodo = todoinput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todoArr.push(newTodoObj);
  saveTodo();
  todoinput.value = "";
  paintTodo(newTodoObj);
}

todoform.addEventListener("submit", submitHandler);

const saveTodos = localStorage.getItem("todos");
if (saveTodos !== null) {
  const parsedTodos = JSON.parse(saveTodos);
  todoArr = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
