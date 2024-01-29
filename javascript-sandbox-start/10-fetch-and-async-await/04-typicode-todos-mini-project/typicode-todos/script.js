// const apiURL = "https://jsonplaceholder.typicode.com/todos";

// const getTodos = () => {
//   fetch(apiURL + "?_limit=10")
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => addTodoToDOM(todo));
//     });
// };

// const addTodoToDOM = (todo) => {
//   const div = document.createElement("div");
//   div.appendChild(document.createTextNode(todo.title));
//   div.setAttribute("data-id", todo.id);

//   if (todo.completed) {
//     div.classList.add("done");
//   }

//   document.getElementById("todo-list").appendChild(div);
// };

// const createTodo = (e) => {
//   e.preventDefault();

//   const newTodo = {
//     title: e.target.firstElementChild.value,
//     completed: false,
//   };

//   fetch(apiURL, {
//     method: "POST",
//     body: JSON.stringify(newTodo),
//     headers: {
//       "Content-Type": "application/json",
//       token: "abc123",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => addTodoToDOM(data));

//   e.target.firstElementChild.value = "";
// };

// const toggleCompleted = (e) => {
//   if (e.target.classList.contains("todo")) {
//     e.target.classList.toggle("done");

//     updateTodo(e.target.dataset.id, e.target.classList.contains("done"));
//   }
// };

// const updateTodo = (id, completed) => {
//   fetch(`${apiURL}/${id}`, {
//     method: "PUT",
//     body: JSON.stringify({ completed }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// };

// const deleteTodo = (e) => {
//   if (e.target.classList.contains("todo")) {
//     const id = e.target.dataset.id;
//     fetch(`${apiURL}/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then(() => e.target.remove());
//   }
// };

// const init = () => {
//   document.addEventListener("DOMContentLoaded", getTodos);
//   document.querySelector("#todo-form").addEventListener("submit", createTodo);
//   document
//     .querySelector("#todo-list")
//     .addEventListener("click", toggleCompleted);
//   document.querySelector("#todo-list").addEventListener("dblclick", deleteTodo);
// };

// init();

const apiUrl = "https://jsonplaceholder.typicode.com/todos";

function getTodos() {
  fetch(`${apiUrl}?_limit=5`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => addTodoToDOM(todo));
    });
}

function createTodo(e) {
  e.preventDefault();

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-Type": "application/json",
      token: "abc123",
    },
  })
    .then((response) => response.json())
    .then((data) => addTodoToDOM(data));
}

function addTodoToDOM(todo) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute("data-id", todo.id);

  if (todo.completed) {
    div.classList.add("done");
  }

  document.getElementById("todo-list").appendChild(div);
}

function toggleComplete(e) {
  e.target.classList.toggle("done");
  updateTodo(e.target.dataset.id, e.target.classList.contains("done"));
}

function updateTodo(id, completed) {
  fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function deleteTodo(e) {
  const id = e.target.dataset.id;
  fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => e.target.remove());
}

function init() {
  document.addEventListener("DOMContentLoaded", getTodos);
  document.getElementById("todo-form").addEventListener("submit", createTodo);
  document
    .getElementById("todo-list")
    .addEventListener("click", toggleComplete);
  document.getElementById("todo-list").addEventListener("dblclick", deleteTodo);
}

init();
