const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const colorSpan = document.querySelector('.color');

btn.addEventListener('click', () => {
    const color = getRandomHexColor();
    colorSpan.textContent = color;
    document.body.style.backgroundColor = color;
});

const getRandomIndex = () => {
    return Math.floor(Math.random() * hex.length);
};

const getRandomHexColor = () => {
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += hex[getRandomIndex()];
    }
    return color;
};