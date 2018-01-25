/* CURRENTLY IN: javascript/main.js */

const $slideshow1 = $('.slick-slideshow')
const $slideshow2 = $('.slick-slideshow2')

$slideshow1.slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1
})
$slideshow2.slick();


$slideshow1.on('edge', function(event, slick, direction){
	console.log('edge was hit');
	$slideshow2.slick('slickNext');
})



const state = {
	length: 3,
	currentSlide: 0,
	slideInterval: 1000,
	goToNextSlide: () => {
		// ikncrement the currentSlide by 1
		state.currentSlide++;

		// HOWEVER, if currentSlide is equal to the 
		// LENGTH of this slideshow, then we have reached
		// the last slide, reset back to 0
		if (state.currentSlide === state.length) {
			state.currentSlide = 0;
		}
	},
	goToPrevSlide: () => {
		// decrement the currentSlide by 1
		state.currentSlide--;

		// HOWEVER, if currentSlide is LESS than 0
		// then we have reached the beginning of slides
		// set the currentSlide to be the LAST slide
		// available
		if (state.currentSlide === -1) {
			state.currentSlide = state.length - 1;
		}
	},
	isLastSlide: () => {
		if (state.currentSlide === state.length - 1) {
			return true;
		}

		return false;
	}
}

const render = (container, mySlideshowState) => {
	// console.log(mySlideshowState.currentSlide, '-100px')
	const slideWidth = parseInt(window.getComputedStyle(container, null).width, 10)
	container.style.marginLeft = (-1 * slideWidth * mySlideshowState.currentSlide) + 'px';

	if (mySlideshowState.isLastSlide()) {
		slideshowRight.style.display = 'none'
	}
	else {
		slideshowRight.style.display = 'inline'
	}
}

const onRightArrow = event => {
	state.goToNextSlide();
	render(slideshowAnchor, state);
}

const slideshow = document.querySelector('.js-slideshow');
const slideshowAnchor = slideshow.querySelector('.js-anchor-slide');
const slideshowRight = document.querySelector('.js-slideshow-right');

slideshowRight.addEventListener('click', onRightArrow);

