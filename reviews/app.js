import { reviews } from "./reviews.js";

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    const review = getRandomReview(reviews);
    updateReview(review);
});

const getRandomReview = reviews => {   
    let randomItem = -1;
    do {
        randomItem = Math.floor(Math.random() * reviews.length);
    } while(currentItem === randomItem) 
    currentItem = randomItem;
    return reviews[currentItem];
};

const updateReview = (review) => {
    img.src = review.img;
    author.textContent = review.name;
    job.textContent = review.job;
    info.textContent = review.text;
};

// show previous person
prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0) currentItem = reviews.length - 1;   
    const review = reviews[currentItem];
    updateReview(review); 
});

// show next person
nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem >= reviews.length) currentItem = 0;
    const review = reviews[currentItem];
    updateReview(review); 
});

// show random person
randomBtn.addEventListener('click', () => {
    const review = getRandomReview(reviews);
    updateReview(review);    
});

