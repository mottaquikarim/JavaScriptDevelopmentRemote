const rand = ( s, e ) => {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}

const colorHolder = document.querySelector('.js-color-holder');
const squareHolder = document.querySelector('.js-square-holder');
const colorName = document.querySelector('.js-color-name');
const colorHistoryView = document.querySelector('.js-color-history')
const button = document.querySelector('.js-copy-button')
const copyNumberValue = document.querySelector('.js-color-number-input')
const counter = document.querySelector('.js-count');
const total = document.querySelector('.js-total');
const MAX_ALLOWED_COLORS = 5;

total.innerHTML = MAX_ALLOWED_COLORS;

let colorHistory = []

const onClick = event => {
    const R = rand(0,255);
    const G = rand(0,255);
    const B = rand(0,255);
    const randomColor = `rgb(${R},${G},${B})`

    colorHolder.style.backgroundColor = randomColor;
    squareHolder.innerHTML += `<div class="square" style="background-color: ${randomColor}"></div>`

    if (R < 150 || G < 150 || B < 150) {
        colorHolder.style.color = "white";    
    }
    else {
        colorHolder.style.color = "black";
    }

    colorHolder.innerHTML = randomColor;
    colorHistory.push(randomColor);
    colorHistoryView.value = randomColor;


    if (colorHistory.length > MAX_ALLOWED_COLORS) {
        squareHolder.innerHTML = ''
        colorHolder.style.backgroundColor = null
        colorHolder.innerHTML = 'Click to Generate Color'
        colorHolder.style.color = "white";
        colorHistory = []
        colorHistoryView.value = colorHistory
    }

    counter.innerHTML = colorHistory.length;
}

colorHolder.addEventListener('click', onClick);






