// ****** SELECT ITEMS **********
const form = document.querySelector('.grocery-form')
const alert = document.querySelector('.alert')
const input = document.querySelector('#grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')


// let editElement;
let localTodoList = []
// diplay input items function
const addItems = (e) => {
    e.preventDefault()

        localTodoList = localStorage.getItem("todo", JSON.stringify(localTodoList))
        const todoListVal = input.value.trim()
        localTodoList.push(todoListVal)
        localStorage.setItem("todo", JSON.stringify(localTodoList))
        
        
        

    const value = input.value
    if (value) {
        const element = document.createElement('article')
        element.classList.add('grocery-item')
        element.innerHTML = ` <p class="title" id="complete">${input.value}</p>
                    <div class="btn-container">
                        <button type="button" class="edit-btn">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button type="button" class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>`
        list.appendChild(element)

        displayAlert("Added Successfully", "success")

        container.classList.add("show-container")

        //deleteing perticluar items
        const deleteBtn = element.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            list.removeChild(element); // Remove the specific item

            if (list.children.length === 0) {
                container.classList.remove("show-container"); // Hide container if no items remain
            }
            displayAlert("Item Deleted Successfully", "danger");
        });


        const clear = document.querySelector('.clear-btn')
        clear.addEventListener('click', () => {
            element.innerHTML = ""
            displayAlert("Deleted All Items Successfully", "danger")
        })

        //complete particular task
        //complete particular task
        const items = document.querySelectorAll('.title');
        items.forEach(item => {
            item.parentElement.addEventListener('click', () => {
                if (item.parentElement.style.textDecoration === 'line-through') {
                    item.parentElement.style.textDecoration = 'none';

                } else {
                    item.parentElement.style.textDecoration = 'line-through';
                    // item.parentElement.style.backgroundColor = 'rgb(142, 200, 142)';
                    // item.parentElement.style.color = 'white';
                    // item.style.color = "white"
                }

            })
        });

    }
    else {
        displayAlert("please enter the value", "danger")
    }
    input.value = ""
}

//diplay alert function
const displayAlert = (text, action) => {
    alert.textContent = text
    alert.classList.add(`alert-${action}`)
    setTimeout(() => {
        alert.textContent = ""
        alert.classList.remove(`alert-${action}`)
    }, 2000);
}
form.addEventListener('submit', addItems)

