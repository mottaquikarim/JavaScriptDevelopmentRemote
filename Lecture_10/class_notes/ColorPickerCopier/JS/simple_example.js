const onClick = () => {
    console.log('LOL look ma I have been clicked')
}


const colorHolder = document.querySelector('.js-color-holder');
console.log(colorHolder);

colorHolder.addEventListener('click', onClick);

const $colorHolder = $('.js-color-holder');
console.log($colorHolder);

$colorHolder.on('click', onClick)