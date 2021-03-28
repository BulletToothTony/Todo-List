const todomain = (() => {
    console.log('todo main')

    const mainContainer = document.getElementById('mainContainer')

    const todoMain = document.createElement('div')
    todoMain.setAttribute('id', 'todoMain')
    todoMain.classList.add('todos')
    
    todoMain.innerHTML = `<div class="todos" id=todoDiv>
    <h1 class="todo-header">Todo List:</h1>

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

    mainContainer.appendChild(todoMain)


})();


/*

Date due:
            <input type="date" class="new-todo-task" id="modalDate" placeholder="Date due:"
            value="2020-03-25"
            min="2020-03-22"
            max="2021-03-25"
            
            >
*/
