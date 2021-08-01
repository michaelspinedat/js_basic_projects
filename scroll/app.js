// set date.
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// close links.
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    linksContainer.style.height = 
        containerHeight ? 0 : `${linksHeight}px`;
});

// fixed navbar.
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) 
        navbar.classList.add('fixed-nav');
    else 
        navbar.classList.remove('fixed-nav');

    if (scrollHeight > 500) 
        topLink.classList.add('show-link');
    else
        topLink.classList.remove('show-link');
});