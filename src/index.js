console.log('Hello World');

const todoButton = document.getElementById('todo-button')
const modal = document.getElementById('modal')
var span = document.getElementsByClassName("close")[0];


todoButton.addEventListener('click', todoButtonModal)
span.addEventListener('click', spanCloseFunc)

function todoButtonModal(){
    console.log('lol')
    modal.style.display = "block";
}

function spanCloseFunc() {
    modal.style.display = "none";
}















/*
Notes:

Modal submit, pushes to array like in library project
Load array into todo list div
Each todo list taks will have a delete button or button to check off
If checked off strike through text
If delete remove from array and todolist div

below all tasks have button to remove all checked off items, loop through array and check if item is complete


Nav bar left:
render task lists
if active list set class to active, like in tab from library



*/