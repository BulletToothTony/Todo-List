const leftnav = (() => {
    console.log('leftnav')

    const mainContainer = document.getElementById('mainContainer')

    const leftDiv = document.createElement('div')
    leftDiv.setAttribute('id', 'leftDiv')
    leftDiv.classList.add('nav-left')
    
    leftDiv.innerHTML = `<nav class="nav-left">
    <p>My Todo List!</p>

    <p>My Folders</p>

    <form action="submit">
        <input type="text" class="new-list-form" placeholder="New list name:"> 
        <button>Submit</button>
    </form>

    <button class="delete-btn" id="delete-btn">Delete</button>

</nav>`

    mainContainer.appendChild(leftDiv)


})();