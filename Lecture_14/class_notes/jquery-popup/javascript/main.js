/* CURRENTLY IN: javascript/main.js */

const $anch = $('.js-anch');
$anch.on('click', e => {
	$(e.target).modal({
		  fadeDuration: 300,
		  fadeDelay: 0.5, // Will fade in 750ms after the overlay finishes.
		  // showClose: false,
	})
});

console.log($.modal.AFTER_CLOSE)
$('#ex1').on($.modal.AFTER_CLOSE, (e, modal) => {
	console.log('here')
	$anch.html('MODAL CLOSED ON ' + new Date())
	$slides.slick('slickPlay');
})

$('#ex1').on($.modal.BEFORE_BLOCK, e => {
	$slides.slick('slickPause');
})

const $slides = $('.js-slideshow');
const $children = $slides.children();
const $dots = $('.js-dots')

$slides.slick({
	adaptiveHeight: true,
  	infinite: true,
  	speed: 300,
  	slidesToShow: 1,
  	autoplay: true,
});

$slides.on('afterChange', (e, slickObj) => {
	console.log('here', e, slickObj.currentSlide)
	if (slickObj.currentSlide === 1) {
		$anch.modal({
		  fadeDuration: 300,
		  fadeDelay: 0.5, // Will fade in 750ms after the overlay finishes.
		  // showClose: false,
		})
	}
})

$('.js-slick-next').on('click', e => {
	$slides.slick('slickNext');
})

for (let i = 0; i < $children.length; i++) {
	const $dot = $(`<div class="slick-dot">Dot ${i}</div>`)
	$dots.append($dot);
	$dot.on('click', e => {
		$slides.slick('slickGoTo', i);
	})
}



