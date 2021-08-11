// Select items.
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// Edit options.
let editElement;
let editFlag = false;
let editID = '';

// Modify grocery bud list.
function modifyList (e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    
    if (value && !editFlag) {
        addItem(value, id);
        addToLocalStorage(id, value);
        setBackToDefault();
    }        
    else if (value)
        console.log('editing');
    else
        displayAlert('please enter value', 'danger');
}

// Add element to the list.
function addItem (value, id) {
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `
    <p class="title">${value}</p>
    <div class="btn-container">
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i> 
        </button>
        <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i> 
        </button>
    </div>`;

    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);

    list.appendChild(element);
    displayAlert('item added to the list', 'success');
    container.classList.add('show-container');
}

// Displays a message after making a modification to the list.
function displayAlert (text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

function clearItems () {
    const items = document.querySelectorAll('.grocery-item');
    if (items.length)
        items.forEach(item => list.removeChild(item));
    container.classList.remove('show-container');
    displayAlert('empty list', 'danger');
    setBackToDefault();
    // localStorage.removeItem('list');    
}


// Delete item.
function deleteItem (e) {
    const item = e.currentTarget.parentElement.parentElement;
    const id = item.dataset.id;
    list.removeChild(item);
    if (!list.children.length)
        container.classList.remove('show-container');
    displayAlert('item removed', 'danger');
    setBackToDefault();    
    removeFromLocalStorage(id);
}

// Edit item.
function editItem (e) {
    console.log('edit');
}


// Return to defaults.
function setBackToDefault () {
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'submit';
}

// Local storage.
function addToLocalStorage (id, value) {
    console.log('added to local storage');
}

function removeFromLocalStorage (id) {
    console.log(id);
}

// Event listeners.
form.addEventListener('submit', modifyList);
clearBtn.addEventListener('click', clearItems);
