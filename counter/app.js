let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => btn.addEventListener('click',
    e => changeValue(e.currentTarget.classList[1]))
);

const changeValue = (option) => {
    switch(option) {
        case 'decrease':
            count--;
            break;
        case 'reset':
            count = 0;
            break;
        case 'increase':
            count++;
            break;
    }
    changeValueColor(count);
    value.textContent = count;
};

const changeValueColor = (count) => {
    let color = '';
    if(count > 0) color = '#0f0';
    else if (count < 0) color = '#f00';
    else color = '#000'  
    value.style.color = color;
};