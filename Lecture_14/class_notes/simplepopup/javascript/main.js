/* CURRENTLY IN: javascript/main.js */

/*
	YOU ARE TO CREATE A SIMPLE POPUP

    If user clicks the 'popup' button, show popup
    If user clicks the 'x' button, hide popup
    If user clicks the 'Ok' button, hide popup

	PHASE 1:
		* w/partner: SIMPLY __COMMENT__ out all these lines of code 
		  so that you are clear as to what is happening. feel free to console.log
		  as you see fit
	
	PHASE 2:
        * If user clicks the 'popup' button, show popup
        * If user clicks the 'x' button, hide popup
        * If user clicks the 'Ok' button, hide popup

	PHASE 3:
        * create a concept of "isAck" which will not show the popup if the user
        * clicks the 'Ok' button

	PHASE 4:
        * imagine this is a 'cookie warning' popup. Display the popup as soon as page loads, if the user clicks 'ok' do not show the popup again
        * ...this means if the user reload the page, popup should not show up
        * if the user clicks 'x', hide the popup but if user reloads show the popup again
*/

/*
    GAME PLAN:
        1. Select the Popup button
        2. Select the hidden popup div
        3. When user clicks on popup, SHOW the hidden popup
*/

const popupBtn = document.querySelector('.js-popup-opener');
const popupCont = document.querySelector('.js-popup');
const popupWrap = document.querySelector('.js-popup-content')
const popupClose = document.querySelector('.js-popup-close');
const popupAck = document.querySelector('.js-popup-ack');

// popupBtn.addEventListener('click', event => {
//     popupCont.classList.remove('hidden');
// });

// const closePopup = (event) => {
//     console.log(event)
//     popupCont.classList.add('hidden');
// }

// popupClose.addEventListener('click', event => {
//     closePopup(event)
// });
// popupAck.addEventListener('click', closePopup);

// popupCont.addEventListener('click', closePopup);
// popupWrap.addEventListener('click', event => {
//     event.stopPropagation();
// })

const popupState = {
    isOpen: false,
    updateIsOpen: (bool) => {
        this.isOpen = bool;
    }
}

const popupState2 = (function() {
    let isOpen = false;

    const _render = () => {
        if (isOpen) {
            popupCont.classList.remove('hidden')
        }
        else {
            popupCont.classList.add('hidden')
        }
        
    }
    return {
        updateOpenState: (bool) => {
            isOpen = bool;
            _render();
        }
    }
})();

popupBtn.addEventListener('click', event => popupState2.updateOpenState(true));
popupClose.addEventListener('click', event => popupState2.updateOpenState(false));
popupAck.addEventListener('click', event => popupState2.updateOpenState(false));
popupCont.addEventListener('click', event => popupState2.updateOpenState(false));
popupWrap.addEventListener('click', event => event.stopPropagation())


// const par = document.querySelector('.js-parent');
// const child = document.querySelector('.js-child');

// par.addEventListener('click', event => {
//     console.log('clicked on the parent')
// })

// child.addEventListener('click', event => {
//     event.stopPropagation();
//     console.log('clicked on the child')
// })


