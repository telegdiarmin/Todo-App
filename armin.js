/**
 * Adatszerkezetek
 */

// 1. Boolean
const myBoolean = true

// 2. Number
const myNumber = 4
console.log(myNumber + 5) // 9

// 3. String
const myString = 'dog'
console.log(myString + 1) // 'dog1'

// 4. Array
const fruits = ['apple', 'banana']
console.log(fruits[0]) // 'apple'
fruits[0] = 'mango'
console.log(fruits[0]) // 'mango'

// 5. Object

const peter = {
  name: 'Peter',
  age: 29,
  title: 'JavaScript Developer',
  isSenior: true
}

console.log(peter['age']) // 29
console.log(peter.age) // 29

peter.name = 'Ármin'

console.log(peter.name) // 'Ármin'

// 6. function

function sum (a, b) {
  return a + b
}

function greet(person) {
  console.log('Hello ' + person.name)
}

greet('kutya') // Uncaught typerror...

/**
 * DOM modification
 */

const todoItemsElement = document.querySelector('.js-todo-items')
const todoItem = document.createElement('div') // <div></div>
todoItem.innerHTML = 'kutya' // <div>kutya</div>

todoItemsElement.appendChild(todoItem)



const peter = {
  name: 'Peter',
  age: 29,
  title: 'JavaScript Developer',
  isSenior: true,
  appliances: {
    phones: [
      {
        name: 'iPhone 12',
        isCurrent: true
      },
      {
        name: 'OnePlus 5',
        isCurrent: false
      }
    ],
    computer: 'MacBook Pro 15"'
  }
}

const family = {
  children: ['Hanna Sára', 'Dóra', 'Dániel']
  wife: 'Flóra'
}

peter.family = family

function hasPhoneEqualAsChild (person) {
  return person.appliances.phones.lenght === person.family.children.lenght ;
}

