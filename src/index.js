import { leftnav } from "./leftnav";
import { todomain } from "./todomain";

console.log('Hello World');

const todoButton = document.getElementById('todo-button')
const removeTasks = document.getElementById('remove-tasks-button')
const modal = document.getElementById('modal')
const formSubmit = document.getElementById('formSubmit')
const listSubmitBtn = document.getElementById('listSubmitBtn')
const trashBtn = document.getElementById('trashBtn')

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
removeTasks.addEventListener('click', removeTasksFunc)
span.addEventListener('click', spanCloseFunc)
formSubmit.addEventListener('click', formSubmitFunc)
listSubmitBtn.addEventListener('click', listSubmitBtnFunc)
trashBtn.addEventListener('click', trashBtnFunc)

function todoButtonModal(){
    console.log('lol')
    modal.style.display = "block";
}

function spanCloseFunc() {
    modal.style.display = "none";
}

let FolderListArray = []
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
    // console.log(todoListArray)

    // Add book to library
    newTodo = new TodoItem(modalTaskName.value, modalPriority.value, modalDatee.value, modalTextArea.value);
    todoListArray.push(newTodo)
    
    console.log(todoListArray)

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
    console.log(item.taskname)
    // newDiv.innerHTML += todoListArray[0].taskname
    // newDiv.innerHTML += todoListArray[0].taskpriority
    // newDiv.innerHTML += todoListArray[0].taskdate
    // newDiv.innerHTML += todoListArray[0].taskdesc

    newDiv.innerHTML += item.taskname + '<br /> ';
    newDiv.innerHTML += item.taskpriority + '<br /> ';
    newDiv.innerHTML += item.taskdate + '<br /> ';
    newDiv.innerHTML += item.taskdesc + '<br /> ';

    if (item.taskpriority === 'Low') {
        newDiv.style.border = '3px solid green';
    } else if (item.taskpriority === 'Medium') {
        newDiv.style.border = '3px solid yellow';
    } else if (item.taskpriority === 'High') {
        newDiv.style.border = '3px solid red';
    }
 
    newDiv.setAttribute('id', todoListArray.indexOf(item));

    const todoMain = document.getElementById('todoMain')

    todoMain.appendChild(newDiv)
    todoListenCheck()
}

function todoListenCheck() {
    document.querySelectorAll('.testTodoClass').forEach(item => 
        item.addEventListener('click', e => {
            console.log(e)
            console.log('striked')
            e.target.classList.add('textStriked')
        }))
    }


function removeTasksFunc() {
        let nodelisttodo = document.querySelectorAll('.textStriked') 
        for (let i = 0; i < nodelisttodo.length; i++) {
            todoListArray.splice(nodelisttodo[i].id, 1)
            console.log(todoListArray)
            console.log('clicked')
            renderTodoList()
        }
}

console.log(FolderListArray)


// Will need array for keeping list of folder todo lists
function listSubmitBtnFunc(e) {
    console.log('cliccccc')
    console.log(e)
    console.log(listNameForm.value)
    // Creat div and add to child of nav-left
    FolderListArray.push(listNameForm.value)
    console.log(FolderListArray)
    renderFolderListArrNew()
}

function renderFolderListArrold() {
    const listName = document.createElement('div')
    listName.setAttribute('id', 'listName')
    listName.setAttribute('class', 'blank')
    listName.style.background = 'green'
    listName.innerHTML = listNameForm.value

    const foldersDiv = document.getElementById('foldersDiv')
    foldersDiv.appendChild(listName)
}

function renderFolderListArrNew() {
    const FolderMainDiv = document.getElementById('foldersDiv');
    const folders = document.querySelectorAll('.blank');
    folders.forEach(fldr => FolderMainDiv.removeChild(fldr))

    
    for (let i = 0; i < FolderListArray.length; i++) {
        createFolder(FolderListArray[i]);
    }
}

function createFolder(item) {
    const listName = document.createElement('div')
    listName.setAttribute('id', 'listName')
    listName.setAttribute('class', 'blank')
    listName.style.background = 'rgb(99, 134, 0)'
    // listName.innerHTML += listNameForm.value;
    listName.innerHTML += item;

    const foldersDiv = document.getElementById('foldersDiv')
    foldersDiv.appendChild(listName)
    folderHighlight()
    // renderNewMain()
}

function folderHighlight() {
    console.log('highlighte')
    document.querySelectorAll('.blank').forEach(item => 
        item.addEventListener('click', e => {
            console.log(e)
            console.log('highlighterNEW')
            e.target.style.color = 'yellow';
            // e.target.classList.toggle('yellowclass')
            e.target.classList.add('removeFolder');
        }))
    }


function trashBtnFunc() {
    // console.log('clcccllclc');
    // FolderListArray.pop();
    // console.log(FolderListArray)
    // renderFolderListArrNew()

    let nodelistfolders = document.querySelectorAll('.removeFolder') 
        for (let i = 0; i < nodelistfolders.length; i++) {
            FolderListArray.splice(nodelistfolders[i].id, 1)
            console.log(FolderListArray)
            console.log('clicked')
            renderFolderListArrNew()
        }

}

function renderNewMain() {
    const newMain = document.createElement('div')
    newMain.setAttribute('class', 'todosNew')
    newMain.setAttribute('id', 'todosNew')


    newMain.innerHTML = FolderListArray[0]
    newMain.innerHTML = `<div class="todos" id=todoDiv>
    <h1 class="todo-header">Todo List1:</h1>

    <div class="todo-list">
        To do lists will go in here after rendering
    </div>


    <div class="todo-extras">
        <button class="todo-button" id="todo-button">+</button>
        <button class="todo-button" id="remove-tasks-button">Remove completed tasks</button>
    </div>

</div>

<div class="modal" id="modal">

    <div class="modal-content">
        <span class="close">&times;</span>
        <p>Todo form:</p>
        <br>
        <form onsubmit="return false" id="modalForm">
            <input type="text" class="new-todo-task" id="modalTaskName" placeholder="New task name:">
            <!-- <input type="text" class="new-todo-task" id="modalPriority" placeholder="Priority:"> -->
            <label for="modalPriotity">Select Priotity:</label>
            <select name="priority" id="modalPriority">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <input type="text" class="new-todo-task" id="modalDatee" placeholder="Date:">
            <textarea name="textareaTodo" id="modalTextArea" cols="30" rows="10" placeholder="Description..."></textarea>


            <input type="submit" value="Submit" id="formSubmit">


        </form>
    </div>

</div>`


    const ogMain = document.getElementById('mainContainer')
    const todoMain = document.getElementById('todoMain')
    todoMain.style.display = 'none';
    ogMain.appendChild(newMain)

}


// function pop() {
//     todoListArray.pop()
//     for (let i = 0; i < todoListArray.length; i++) {
//         createTodo(todoListArray[i]);
//     }
// }







/*
Notes:

Notes for tabbing, set tabname equal to a class in the todolist container, if tab is clicked and has same class
set display to true, check this on discord

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