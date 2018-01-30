/* CURRENTLY IN: javascript/main.js */

// document.addEventListener('ready', onReady)


const opts = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true, 
};

const $slideshow = $('.slick-slideshow');
$slideshow.slick(opts);

$slideshow.on('swipe', (event, slick, direction) => {
  // Get the current slide
  const currentSlide = $slideshow.slick('slickCurrentSlide');
  console.log(direction, currentSlide);
  // left
});

const moveSlides = (nextSlide=false) => {
	if (nextSlide === true) {
		$slideshow.slick('slickNext')
	}
	else {
		$slideshow.slick('slickPrev')
	}
	
}
$('.js-prev').on('click', () => moveSlides());
$('.js-next').on('click', () => moveSlides(true));




