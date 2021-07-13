import { getRandomColor } from "./color.js";

const btn = document.getElementById('btn');
const colorSpan = document.querySelector('.color');

btn.addEventListener('click', () => {    
    const color = getRandomColor();
    document.body.style.backgroundColor = color;
    colorSpan.textContent = color;
});

