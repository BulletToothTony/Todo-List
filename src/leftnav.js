const leftnav = (() => {
    console.log('leftnav')
    
    const mainContainer = document.getElementById('mainContainer')

    const leftDiv = document.createElement('div')
    leftDiv.setAttribute('id', 'leftDiv')
    leftDiv.classList.add('nav-left')
    
    leftDiv.innerHTML = `<nav class="nav-left">
    <h1>My Todo List!</h1>

    <h2>My Folders <i class="far fa-folder"></i></h2>
    <form action="submit">
        <input type="text" class="new-list-form" placeholder="New list name:"> 
        <button>Submit</button>
    </form>

    <button class="delete-btn" id="delete-btn">Delete</button> <i class="fas fa-trash"></i>

</nav>`

    mainContainer.appendChild(leftDiv)


})();

