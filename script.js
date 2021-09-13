const todoItems = [
  {
    message: 'Bacon',
    done: false
  },
  {
    message: 'Eggs',
    done: false
  },
  {
    message: 'Cheese',
    done: true
  },
  {
    message: 'Chocolate',
    done: true
  }
]

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



for (
  let i = 0;
  i < todoItems.length;
  i++
) {
  const todo = createTodoItem(todoItems[i].message, false)
  // Elemek beillesztése a DOM-ba
  todoItemsElement.appendChild(todo)
}

