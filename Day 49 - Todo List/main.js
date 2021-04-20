let todosContainer = document.querySelector(".todos-container");
let myInput = document.querySelector("input");
myInput.focus();
let allTodosTextsArray = [];
let checkedArray = [];
let i = 0;

window.addEventListener("load", () => {
  if (localStorage.length) {
    let mylocalStorageValues = localStorage.getItem("todostexts");
    let mylocalStorageValuesArray = mylocalStorageValues.split(",");

    let mylocalStoragechecked = localStorage.getItem("checkedArray");
    checkedArray = mylocalStoragechecked.split(",");

    mylocalStorageValuesArray.forEach((item) => {
      if (item != "") {
        createTodo(item);
      }
    });
  }

  let allTodosSpans = document.querySelectorAll(".todo");
  if (allTodosSpans.length > 0) {
    allTodosSpans.forEach((item) => {
      if (checkedArray[i] == "true") {
        item.classList.add("checked");
      }
      i++;
    });
  }

  updateLocalStorage();
});

myInput.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    if (e.target.value) {
      let value = e.target.value;
      createTodo(value);
      updateLocalStorage();
    }
  }
});

function createTodo(text) {
  let todo = document.createElement("span");
  todo.classList.add("todo");
  todo.textContent = text;

  todo.addEventListener("click", () => {
    todo.classList.toggle("checked");
    updateLocalStorage();
  });

  todo.addEventListener("contextmenu", (z) => {
    z.preventDefault();
    todo.remove();
    updateLocalStorage();
  });

  todosContainer.appendChild(todo);
  myInput.value = "";
}

function updateLocalStorage() {
  let allTodos = document.querySelectorAll(".todo");

  let checked = "";
  let allTodosTexts = "";

  allTodos.forEach((todo) => {
    checked += todo.classList.contains("checked") + ",";
    allTodosTexts += todo.innerText + ",";
  });
  checkedArray = checked.split(",");
  checkedArray.pop();
  localStorage.setItem("checkedArray", checkedArray);

  allTodosTextsArray = allTodosTexts.split(",");
  allTodosTextsArray.pop();
  localStorage.setItem("todostexts", allTodosTextsArray);
}
