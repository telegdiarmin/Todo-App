let todoItems = []

function saveTodoItems (todoItemsSave){
  const stringTodoItems = JSON.stringify(todoItemsSave)
  localStorage.setItem("todoApp", stringTodoItems)
}

function readTodoItems (){
  const savedTodoItems = localStorage.getItem("todoApp")
  if(savedTodoItems === null || savedTodoItems === "undefined"){ // || = "vagy"; == értékegyezés, === típusegyezés is!; "undefined", mert a visszatérő érték string
  return
  }
  todoItems = JSON.parse(savedTodoItems)
}

// Kiválasztás
const todoItemsElement = document.querySelector('.js-todo-items')

//Új item létrehozás
function createTodoItem(text, isDone) {
  const todoItem = document.createElement('div') // <div></div>
  todoItem.classList.add("itemBackground")
  
//Checkbox
  const checkboxItem = document.createElement('input')
  checkboxItem.setAttribute('type', 'checkbox')
  todoItem.appendChild(checkboxItem)

//Span
  const spanItem = document.createElement('span')
  spanItem.innerText = text
  todoItem.appendChild(spanItem)

//Törlés gomb
  const buttonItem = document.createElement('button')
  buttonItem.innerText = 'Remove'
  buttonItem.classList = "btn btn-primary"
  buttonItem.classList.add('js-remove-button')
  todoItem.appendChild(buttonItem)

  return todoItem
}

//Elemek létrehozása
function renderTodoItems () {
  todoItemsElement.innerHTML = '' //todoItemsElement kiürítése
  for (
    let i = 0;
    i < todoItems.length; //Kilépési feltétel
    i++
  ) {
    const todo = createTodoItem(todoItems[i].message, todoItems[i].done)
    const todoRemoveButton = todo.querySelector('.js-remove-button')
    todoRemoveButton.addEventListener("click", function () {
      handleRemoveButtonClick(i)
    }) //51-56 sorok: ciklusmag

    // Elemek beillesztése a DOM-ba
    todoItemsElement.appendChild(todo)
  }
}

//Vezérlőelemek kiválasztása
const addButton = document.querySelector(".js-add-button")
const todoInput = document.querySelector('.js-todo-input')


//Todo hozzáadása
function addTodo (text) {
  const todoItem = {
    message: text,
    done: false
  }

  todoItems.push(todoItem)
  saveTodoItems(todoItems)
  renderTodoItems()
}

function handleAddButtonClick () {
  if(todoInput.value.trim() === ""){ //leading és tailing whitespace karakterek eltávolítása (space, tab, stb...)
    const myAlert = document.querySelectorAll("toast");
    const bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
    return;
  } else {
  
  const todoContent = todoInput.value
  todoInput.value = ''
  todoInput.focus()
  addTodo(todoContent)
}
}

function handleRemoveButtonClick (index) {
  todoItems.splice(index, 1);
  renderTodoItems()
  saveTodoItems(todoItems)
}

readTodoItems()
renderTodoItems()

addButton.addEventListener('click', handleAddButtonClick)

todoInput.addEventListener("keyup", keyPress)

function keyPress(event){
  if (event.key === "Enter") {
    event.preventDefault();
    handleAddButtonClick();
  }
};