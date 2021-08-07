import { months, weekdays } from "./date.js";

const giveAway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();


// set the countdown to 10 days.
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveAway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();

function getRemainingTime (futureDate) {    
    const today = new Date().getTime();
    let t = futureDate - today;
    
    // values in ms.
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(t / oneDay);    
    let hours = Math.floor( (t % oneDay) / oneHour);    
    let minutes = Math.floor((t % oneHour) / oneMinute);    
    let seconds = Math.floor((t % oneMinute) / 1000);

    return [days, hours, minutes, seconds];
}

function updateRemainingTime (futureDate) {
    let values = getRemainingTime(futureDate);

    if (values[3] < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
        return;
    }

    function format (item) {
        if (item < 10)
            item = `0${item}`;
        return item;
    }

    items.forEach( (item, index) => {
        item.innerHTML = format(values[index]);
    });
}


let countdown = setInterval(() => updateRemainingTime(futureDate), 1000);

updateRemainingTime(futureDate);