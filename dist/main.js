(()=>{var e={783:()=>{(()=>{console.log("leftnav");const e=document.getElementById("mainContainer"),t=document.createElement("div");t.setAttribute("id","leftDiv"),t.classList.add("nav-left"),t.innerHTML='<nav class="nav-left" id="nav-left">\n    <h1>My Todo List!</h1>\n\n    <h2>My Folders <i class="far fa-folder"></i></h2>\n    <form onsubmit="return false">\n        <input type="text" class="new-list-form" id="listNameForm" placeholder="New list name:"> \n        <button id="listSubmitBtn">Submit</button>\n    </form>\n\n    <button class="delete-btn" id="delete-btn">Delete</button> <i id="trashBtn" class="fas fa-trash"></i>\n    <div id="foldersDiv"></div>\n\n</nav>',e.appendChild(t)})()},513:()=>{(()=>{console.log("todo main");const e=document.getElementById("mainContainer"),t=document.createElement("div");t.setAttribute("id","todoMain"),t.classList.add("todos"),t.innerHTML='<div class="todos" id=todoDiv>\n    <h1 class="todo-header">Todo List:</h1>\n\n    <div class="todo-list">\n    </div>\n\n\n    <div class="todo-extras">\n        <button class="todo-button" id="todo-button">+</button>\n        <button class="todo-button" id="remove-tasks-button">Remove completed tasks</button>\n    </div>\n\n</div>\n\n<div class="modal" id="modal">\n\n    <div class="modal-content">\n        <span class="close">&times;</span>\n        <p class="modalTaskTitle">New Task:</p>\n        <br>\n        <form onsubmit="return false" id="modalForm">\n            <input type="text" class="new-todo-task" id="modalTaskName" placeholder="New task name:"> <br>\n            \x3c!-- <input type="text" class="new-todo-task" id="modalPriority" placeholder="Priority:"> --\x3e\n            <label for="modalPriotity">Select Priotity:</label>\n            <select name="priority" id="modalPriority">\n                <option value="Low">Low</option>\n                <option value="Medium">Medium</option>\n                <option value="High">High</option>\n            </select>\n            <br>\n            <br>\n            <input type="text" class="new-todo-task" id="modalDatee" placeholder="Date Due:">\n            <textarea name="textareaTodo" id="modalTextArea" class="new-todo-task" cols="30" rows="10" placeholder="Description..."></textarea>\n\n\n            <input type="submit" value="Submit" class="btnSubmitModal" id="formSubmit">\n\n\n        </form>\n    </div>\n\n</div>',e.appendChild(t)})()}},t={};function o(n){var l=t[n];if(void 0!==l)return l.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(783),o(513),console.log("Hello World");const e=document.getElementById("todo-button"),t=document.getElementById("remove-tasks-button"),n=document.getElementById("modal"),l=document.getElementById("formSubmit"),s=document.getElementById("listSubmitBtn"),i=document.getElementById("trashBtn");var d=document.getElementsByClassName("close")[0];class a{constructor(e,t,o,n){this.taskname=e,this.taskpriority=t,this.taskdate=o,this.taskdesc=n}}e.addEventListener("click",(function(){console.log("lol"),n.style.display="block"})),t.addEventListener("click",(function(){let e=document.querySelectorAll(".textStriked");for(let t=0;t<e.length;t++)m.splice(e[t].id,1),console.log(m),console.log("clicked"),u()})),d.addEventListener("click",(function(){n.style.display="none"})),l.addEventListener("click",(function(){console.log(modalTaskName.value),console.log(modalPriority.value),console.log(modalDatee.value),console.log(modalTextArea.value),r=new a(modalTaskName.value,modalPriority.value,modalDatee.value,modalTextArea.value),m.push(r),console.log(m),u()})),s.addEventListener("click",(function(e){console.log("cliccccc"),console.log(e),console.log(listNameForm.value),c.push(listNameForm.value),console.log(c),p()})),i.addEventListener("click",(function(){let e=document.querySelectorAll(".removeFolder");for(let t=0;t<e.length;t++)c.splice(e[t].id,1),console.log(c),console.log("clicked"),p()}));let r,c=[],m=[];function u(){const e=document.getElementById("todoMain");document.querySelectorAll(".testTodoClass").forEach((t=>e.removeChild(t)));for(let e=0;e<m.length;e++)v(m[e])}function v(e){console.log("todocreate");const t=document.createElement("div");t.setAttribute("id","testTodo"),t.setAttribute("class","testTodoClass"),console.log(e.taskname),t.innerHTML+=e.taskname+"<br /> ",t.innerHTML+=e.taskpriority+"<br /> ",t.innerHTML+=e.taskdate+"<br /> ",t.innerHTML+=e.taskdesc+"<br /> ","Low"===e.taskpriority?t.style.border="3px solid green":"Medium"===e.taskpriority?t.style.border="3px solid yellow":"High"===e.taskpriority&&(t.style.border="3px solid red"),t.setAttribute("id",m.indexOf(e)),document.getElementById("todoMain").appendChild(t),document.querySelectorAll(".testTodoClass").forEach((e=>e.addEventListener("click",(e=>{console.log(e),console.log("striked"),e.target.classList.add("textStriked")}))))}function p(){const e=document.getElementById("foldersDiv");document.querySelectorAll(".blank").forEach((t=>e.removeChild(t)));for(let e=0;e<c.length;e++)b(c[e])}function b(e){const t=document.createElement("div");t.setAttribute("id","listName"),t.setAttribute("class","blank"),t.style.background="rgb(99, 134, 0)",t.innerHTML+=e,document.getElementById("foldersDiv").appendChild(t),console.log("highlighte"),document.querySelectorAll(".blank").forEach((e=>e.addEventListener("click",(e=>{console.log(e),console.log("highlighterNEW"),e.target.style.color="yellow",e.target.classList.add("removeFolder")}))))}console.log(c)})()})();