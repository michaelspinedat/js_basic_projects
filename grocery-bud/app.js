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
        addItem(id, value);
        container.classList.add('show-container');
        displayAlert('item added to the list', 'success');
        addToLocalStorage(id, value);
        setBackToDefault();
    }        
    else if (value) {
        editElement.innerHTML = value;
        displayAlert('value changed', 'success');        
        editLocalStorage(editID, value);
        setBackToDefault();
    }        
    else
        displayAlert('please enter value', 'danger');
}

// Add element to the list.
function addItem (id, value) {
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
    localStorage.removeItem('list');    
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
    const item = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = item.dataset.id;
    submitBtn.textContent = 'edit';
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
    const grocery = {id, value};  
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items));
    
}

function editLocalStorage (id, value) {
    let items = getLocalStorage();
    items = items.map(item => {
        if (item.id === id)
            item.value = value;
        return item;
    });
    localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage (id) {
    let items = getLocalStorage();
    items = items.filter(item => item.id !== id);
    localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage () {
    return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
}

// Set up items.

function setupItems () {
    let items = getLocalStorage();    
    if (items.length) {        
        items.forEach(item => {
            addItem(item.id, item.value);
        });
        container.classList.add('show-container');
    }
}

// Event listeners.
form.addEventListener('submit', modifyList);
clearBtn.addEventListener('click', clearItems);
window.addEventListener('DOMContentLoaded', setupItems);
