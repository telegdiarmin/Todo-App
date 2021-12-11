let todoItems = [];

function saveTodoItems(todoItemsSave) {
  const stringTodoItems = JSON.stringify(todoItemsSave);
  localStorage.setItem("todoApp", stringTodoItems);
}

function readTodoItems() {
  const savedTodoItems = localStorage.getItem("todoApp");
  if (savedTodoItems === null || savedTodoItems === "undefined") {
    // || = "vagy"; == értékegyezés, === típusegyezés is!; "undefined", mert a visszatérő érték string
    return;
  }
  todoItems = JSON.parse(savedTodoItems);
}

// Kiválasztás
const todoItemsElement = document.querySelector(".js-todo-items");

//Új item létrehozás
function createTodoItem(text, isDone) {
  const container = document.createElement("div");
  container.classList.add("itemBackground", "shadow");
  container.innerHTML = `
    <input type="checkbox" class="js-done-checkbox" ${isDone ? "checked" : ""}>
    <input type="text" class="js-todo-input todo-text ${
      isDone ? "todo-text-done" : ""
    }" value="${text}">
    <button class="js-remove-button btn btn-danger remove-button">Remove</button>`;
  return container;
}

//Elemek létrehozása
function renderTodoItems() {
  todoItemsElement.innerHTML = ""; //todoItemsElement kiürítése
  for (
    let i = 0;
    i < todoItems.length; //Kilépési feltétel
    i++
  ) {
    const todo = createTodoItem(todoItems[i].message, todoItems[i].done);
    const todoRemoveButton = todo.querySelector(".js-remove-button");
    todoRemoveButton.addEventListener("click", function () {
      handleRemoveButtonClick(i);
    }); //51-56 sorok: ciklusmag
    const todoCheckbox = todo.querySelector(".js-done-checkbox");
    todoCheckbox.addEventListener("change", function () {
      handleChangeDoneCheckbox(i);
    });
    const todoItemInput = todo.querySelector(".js-todo-input");
    todoItemInput.addEventListener("change", function (event) {
      handleChangeText(i, event.target.value);
    });
    // Elemek beillesztése a DOM-ba
    todoItemsElement.appendChild(todo);
  }
}

//Vezérlőelemek kiválasztása
const addButton = document.querySelector(".js-add-button");
const todoInput = document.querySelector(".js-todo-input");

//Todo hozzáadása
function addTodo(text) {
  const todoItem = {
    message: text,
    done: false,
  };

  todoItems.push(todoItem);
  saveTodoItems(todoItems);
  renderTodoItems();
}

function handleAddButtonClick() {
  if (todoInput.value.trim() === "") {
    //leading és tailing whitespace karakterek eltávolítása (space, tab, stb...)
    // const myAlert = document.querySelectorAll("toast");
    // const bsAlert = new bootstrap.Toast(myAlert);
    // bsAlert.show();
    // return;
  } else {
    const todoContent = todoInput.value;
    todoInput.value = "";
    todoInput.focus();
    addTodo(todoContent);
  }
}

function renderAndSave() {
  renderTodoItems();
  saveTodoItems(todoItems);
}

function handleRemoveButtonClick(index) {
  todoItems.splice(index, 1);
  renderAndSave();
}

function handleChangeDoneCheckbox(index) {
  todoItems[index].done = !todoItems[index].done;
  renderAndSave();
}

function handleChangeText(index, message) {
  todoItems[index].message = message;
  renderAndSave();
}

readTodoItems();
renderTodoItems();

addButton.addEventListener("click", handleAddButtonClick);

todoInput.addEventListener("keyup", keyPress);

function keyPress(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    handleAddButtonClick();
  }
}
