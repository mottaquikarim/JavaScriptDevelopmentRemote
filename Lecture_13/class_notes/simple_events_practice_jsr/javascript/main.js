/* CURRENTLY IN: javascript/main.js */

const anchorElem = document.querySelector("a");
// The parameter `event` is an object with information
// about the mouse click.
anchorElem.addEventListener("click", event => {
    // There are some default actions associated
    // with an element.
    // For anchor tags, we're taken to a new page.
    // We need to disable that default behavior
    // using `preventDefault()`
    event.preventDefault();
    console.log("You clicked the anchor tag!");
});

const $anchorElem = $("a");
$anchorElem.on('click', event => {
	event.preventDefault();
	console.log("you clicked the anchor tag, but with jQuery!")
});

/*
	$anchorElem.click(event => {
		event.preventDefault();
		console.log("you clicked the anchor tag, but with jQuery!")
	});
*/


const inputEl = document.querySelector('.js-no-vowels');
// document.querySelector('input[type="text"]')

const vowels = {
	'65': true,
	'69': true,
	'73': true,
	'79': true,
	'85': true,
}

inputEl.addEventListener('keydown', (event) => {
	console.log(event.keyCode)
	if (vowels[event.keyCode]) {
		event.preventDefault();
	}

	/*
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const filtered = vowels.filter(vowel => {
		return vowel === event.key.toLowerCase()
	})

	if (filtered.length > 0) {
		console.log('ITS A VOWEL')
	}
	else {
		console.log('not a vowel')
	}

	if (vowels.indexOf(event.key.toLowerCase()) > -1) {
		console.log('ITS A VOWEL, indexOf')
	}
	else {
		console.log('not a vowel, indexOf')
	}
	*/

});

const $inputEl = $('.js-no-vowels');

$inputEl.on('keydown', event => {
	if (vowels[event.keyCode]) {
		event.preventDefault();
	}
})

const onBtnClicked = e => {
	console.log(e.target)
}
document.querySelectorAll('input[type="button"]').forEach(button => {
	button.addEventListener('click', onBtnClicked);
});


$('input[type="button"]').on('click', onBtnClicked)














