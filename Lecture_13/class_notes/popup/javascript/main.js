/* --------------------------------

	1. Write the state object
	2. Create the event listeners that the user
		will interact with to mutate the state
	3. Write a "render" function to make 1 and 2 
		"connect" with each other


-------------------------------- */

const state = {
	isOpen: true,
	toggle: () => {
		state.isOpen = !state.isOpen;
	},
};

const render = (container, myState) => {
	if (myState.isOpen === false) {
		container.style.display = 'none';
	}
	else {
		container.style.display = 'flex';
	}
}

const togglePopup = event => {

	// this is a switch that mutates the isOpen
	// property of our state - effectively opening OR
	// closing the popup window
	state.toggle();

	// now re-render the UI to reflect the new,
	// mutated state object
	render(popupCont, state);
}

const onKeyDown = event => {
	if (event.key === 'Escape' && state.isOpen === true) {
		togglePopup();
	}
	else if (event.key === "o" && state.isOpen === false) {
		togglePopup();
	}
}

const onBgShimClicked = event => {
	if (!event.target.matches('.popup-content')) {
		togglePopup();
	}
}

const toggleBtn = document.querySelector('.js-toggle');
const popupCont = document.querySelector('.js-popup-container');
const closeBtn = popupCont.querySelector('.js-popup-close');

document.addEventListener('keydown', onKeyDown)
toggleBtn.addEventListener('click', togglePopup);
// closeBtn.addEventListener('click', onCloseBtnClicked);
popupCont.addEventListener('click', onBgShimClicked)


