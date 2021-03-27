import { leftnav } from "./leftnav";
import { todomain } from "./todomain";

console.log('Hello World');

const todoButton = document.getElementById('todo-button')
const modal = document.getElementById('modal')
const formSubmit = document.getElementById('formSubmit')

var span = document.getElementsByClassName("close")[0];

class TodoItem {
    constructor(taskname, taskpriority, taskdate, taskdesc) {
        this.taskname = taskname;
        this.taskpriority = taskpriority;
        this.taskdate = taskdate;
        this.taskdesc = taskdesc;
    }
}


todoButton.addEventListener('click', todoButtonModal)
span.addEventListener('click', spanCloseFunc)
formSubmit.addEventListener('click', formSubmitFunc)

function todoButtonModal(){
    console.log('lol')
    modal.style.display = "block";
}

function spanCloseFunc() {
    modal.style.display = "none";
}

let todoListArray = []
let modalVal;
let modalPri;
let modalDate;
let modalText;
let newTodo;    

function formSubmitFunc() {
    console.log(modalTaskName.value)
    console.log(modalPriority.value)
    console.log(modalDatee.value)
    console.log(modalTextArea.value)

    // todoListArray.push(modalTaskName.value)
    console.log(todoListArray)

    // Add book to library
    newTodo = new TodoItem(modalTaskName.value, modalPriority.value, modalDatee.value, modalTextArea.value);
    todoListArray.push(newTodo)
    

    // const newDiv = document.createElement('div')
    // // newDiv.style.backgroundColor = 'red'
    // newDiv.setAttribute('id', 'testTodo')
    // newDiv.setAttribute('class', 'testTodoClass')
    // newDiv.innerHTML = modalTaskName.value

    // const todoMain = document.getElementById('todoMain')

    // todoMain.appendChild(newDiv)

    // arrayLoop()
    renderTodoList()

}

function arrayLoop() {
    for (let i = 0; i < todoListArray.length; i++) {
        console.log(todoListArray[i])
    }
}

function renderTodoList() {
    const todoMainDiv = document.getElementById('todoMain');
    const todos = document.querySelectorAll('.testTodoClass');
    todos.forEach(todo => todoMainDiv.removeChild(todo))

    
    for (let i = 0; i < todoListArray.length; i++) {
        createTodo(todoListArray[i]);
    }
}

function createTodo(item) {
    console.log('todocreate')
    const newDiv = document.createElement('div')
    // newDiv.style.backgroundColor = 'red'
    newDiv.setAttribute('id', 'testTodo')
    newDiv.setAttribute('class', 'testTodoClass')
    // newDiv.innerHTML = modalTaskName.value
    console.log(item)
    console.log(item.taskname)
    // newDiv.innerHTML += todoListArray[0].taskname
    // newDiv.innerHTML += todoListArray[0].taskpriority
    // newDiv.innerHTML += todoListArray[0].taskdate
    // newDiv.innerHTML += todoListArray[0].taskdesc

    newDiv.innerHTML += item.taskname + ' ';
    newDiv.innerHTML += item.taskpriority + ' ';
    newDiv.innerHTML += item.taskdate + ' ';
    newDiv.innerHTML += item.taskdesc + ' ';

    const todoMain = document.getElementById('todoMain')

    todoMain.appendChild(newDiv)
    todoListenCheck()
}

function todoListenCheck() {
    document.querySelectorAll('.testTodoClass').forEach(item => 
        item.addEventListener('click', e => {
            console.log(e)
            e.target.classList.toggle('textStriked')
        }))
    }

// function pop() {
//     todoListArray.pop()
//     for (let i = 0; i < todoListArray.length; i++) {
//         createTodo(todoListArray[i]);
//     }
// }







/*
Notes:

Modal submit, pushes to array like in library project
Load array into todo list div, clear all array then load all
Each todo list taks will have a delete button or button to check off
If checked off strike through text
If delete remove from array and todolist div, then reload all array

below all tasks have button to remove all checked off items, loop through array and check if item is complete


Nav bar left:
render task lists
if active list set class to active, like in tab from library



*/