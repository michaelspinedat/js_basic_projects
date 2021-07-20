import { menu } from "./items.js";

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', () => {
    let displayMenu = menu.map(item =>
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
});