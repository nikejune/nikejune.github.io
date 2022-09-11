const loginform = document.querySelector("#login-form");
const logininput = document.querySelector("#login-form-input");
const greeting = document.querySelector("#greeting-box h1");
const todoform = document.querySelector("#todo-form");

function loadUsername(username) {
  greeting.innerText = `Hello! ${username}`;
  loginform.classList.add("hidden");
  greeting.classList.remove("hidden");
  todoform.classList.remove("hidden");
}

function submitHandler(event) {
  event.preventDefault();
  const username = logininput.value;
  loadUsername(username);
  localStorage.setItem("username", username);
}
loginform.addEventListener("submit", submitHandler);

const username = localStorage.getItem("username");
if (username !== null) {
  loadUsername(username);
}
