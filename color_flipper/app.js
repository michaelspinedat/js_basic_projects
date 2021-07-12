import { colors } from "./color.js";

const btn = document.getElementById('btn');
const colorSpan = document.querySelector('.color');

btn.addEventListener('click', () => {    
    const color = getRandomColor(colors);
    document.body.style.backgroundColor = color;
    colorSpan.textContent = color;
});

const getRandomColor = (colors) => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index]
};