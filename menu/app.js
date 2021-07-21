import { menu } from "./items.js";

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

// load items
window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);    
    displayFilterButtons(getCategories(menu));
    addFunctionalityToButtons();
});


function getCategories(menu) {
    return menu.reduce((values, item) => {
        const category = item.category
        if (!values.includes(category))
            values.push(category);
        return values;
    }, ['all']);
}

function displayFilterButtons(categories) {
    const categoryBtns = categories.map(category =>
        `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    ).join('');

    btnContainer.innerHTML = categoryBtns;
}

function addFunctionalityToButtons() {
    // filter items
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            const category = e.currentTarget.dataset.id;
            let menuCategory = [];
            if (category === 'all')
                menuCategory = menu;
            else
                menuCategory = menu.filter(item => item.category === category);
            displayMenuItems(menuCategory);
        });
    });
}



function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(item =>
        `<article class="menu-item">
        <img src="${item.img}" class="photo" alt="${item.title}" />
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
        </div>
    </article>`
    );

    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
}