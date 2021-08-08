import { text } from "./lorem_text.js";

const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');

form.addEventListener('submit', e => {
    e.preventDefault();
    const value = parseInt(amount.value);
    const randomIndex = Math.floor(Math.random() * text.length);

    if (isNaN(value) || value <= 0 || value > 9)
        result.innerHTML = `<p class="result">${text[randomIndex]}</p>`
    else {
        let tempText = text.slice(0, value);
        tempText = tempText.map(item => `<p class="result">${item}</p>`).join('');        
        result.innerHTML = tempText;        
    }
});