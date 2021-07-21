import { menu } from "./items.js";

const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');

// load items
window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
});

// filter items
filterBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        const category = e.currentTarget.dataset.id;
        let menuCategory = [];
        if(category === 'all')
            menuCategory = menu;
        else 
            menuCategory = menu.filter(item => item.category === category);        
        displayMenuItems(menuCategory);        
    });
});

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