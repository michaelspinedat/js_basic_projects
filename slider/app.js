const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++;
    carousel(counter);
});

prevBtn.addEventListener('click', () => {
    counter--;
    carousel(counter);
});

function carousel (counter) {

    counter = counter === slides.length ? 0 : counter < 0 ? slides.length - 1 : counter;

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    });
}