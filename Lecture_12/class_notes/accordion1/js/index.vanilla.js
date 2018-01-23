/*
 Write the logic necessary to implement an accordion
 the "content" should toggle when user clicks on the "title"
 */

// STEP 1: defined the state
const state = {
	// this property determines if accordion is
	// showing content or not
	isOpen: true,

	// this property is a function that will
	// update the isOpen / isClosed property
	// of the accordion
	toggle: () => {
		// if (state.isOpen === true) {
		// 	state.isOpen = false;
		// }	
		// else {
		// 	state.isOpen = true;
		// }

		state.isOpen = !state.isOpen;
	},
};

const render = (cont, state) => {
	const isOpen = state.isOpen;
	const content = cont.querySelector('.js-content')
	const title = cont.querySelector('.js-title')

	if (isOpen) {
		// display the content
		// content.style.display = 'block' // this is to make it pop
		content.style.height = '95px'
		title.querySelector('.dropdown').classList.remove('triangle', 'right');
	}
	else {
		// hide the content
		// content.style.display = 'none' // this is to make it pop
		content.style.height = '0px'
		title.querySelector('.dropdown').classList.add('triangle', 'right');
	}
}


// STEP 2: create the UI eventhandlers to deal with
// user interactions
const acc = document.querySelector('.js-acc')
const title = document.querySelector('.js-title');

const onTitleClicked = evt => {
	state.toggle();
	render(acc, state);
}

title.addEventListener('click', onTitleClicked)


