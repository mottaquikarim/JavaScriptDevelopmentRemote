const rand = ( s, e ) => {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}

const $colorHolder = $('.js-color-holder');
const $squareHolder = $('.js-square-holder');
const $counter = $('.js-count');
const $total = $('.js-total');

let colorHistory = [];
const MAX_ALLOWED_COLORS = 5;
$total.html(MAX_ALLOWED_COLORS);


const onClick = () => {
    const R = rand(0,255);
    const G = rand(0,255);
    const B = rand(0,255);
    const randomColor = `rgb(${R},${G},${B})`

    $colorHolder.css('background-color', randomColor);
    $squareHolder.html($squareHolder.html() + `<div class="square" style="background-color: ${randomColor}"></div>`);

    if (R < 150 || G < 150 || B < 150) {
        $colorHolder.css('color', 'white');
    }
    else {
        $colorHolder.css('color', 'black');
    }

    $colorHolder.html(randomColor);
    colorHistory.push(randomColor);

    if (colorHistory.length > MAX_ALLOWED_COLORS) {
        $squareHolder.html('');
        $colorHolder
            .css({
                'background-color': 'black',
                'color': 'white'
            })
            .html('Click to Generate Color');

        colorHistory = []
    }

    $counter.html(colorHistory.length);
}

// $colorHolder.on('click', onClick)
$colorHolder.click(onClick)

