const todoItems = []

// Kiválasztás
const todoItemsElement = document.querySelector('.js-todo-items')

//Új item létrehozás
function createTodoItem(text, isDone) {
  const todoItem = document.createElement('div') // <div></div>
  const checkboxItem = document.createElement('input')
  checkboxItem.setAttribute('type', 'checkbox')
  todoItem.appendChild(checkboxItem)

//Span
  const spanItem = document.createElement('span')
  spanItem.innerText = text
  todoItem.appendChild(spanItem)

//Gomb
  const buttonItem = document.createElement('button')
  buttonItem.innerText = 'Remove'
  todoItem.appendChild(buttonItem)

  return todoItem
}



function renderTodoItems () {
  todoItemsElement.innerHTML = ''
  for (
    let i = 0;
    i < todoItems.length;
    i++
  ) {
    const todo = createTodoItem(todoItems[i].message, todoItems[i].done)
    // Elemek beillesztése a DOM-ba
    todoItemsElement.appendChild(todo)
  }
}

const addButton = document.querySelector(".js-add-button")  ;
const todoInput = document.querySelector('.js-todo-input')


function addTodo (text) {
  todoItems.push({
    message: text,
    done: false
  })

  renderTodoItems()
}

function handleButtonClick () {
  const todoContent = todoInput.value
  todoInput.value = ''
  todoInput.focus()
  addTodo(todoContent)
}

addButton.addEventListener('click', handleButtonClick)
