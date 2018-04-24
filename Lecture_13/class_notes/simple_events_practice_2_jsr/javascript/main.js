/*
	const inputEl = document.querySelectorAll('.js-input')

	inputEl.forEach(input => {
		input.addEventListener('keydown', e => {
			if (e.keyCode === 13) {
				console.log('enter pressed')
				console.log(e.target.value)
			}
		});	
	})
*/

const inputEl = document.querySelector('.js-input')
const contentEl = document.querySelector('.js-content')
contentEl.style.padding = "10px"
contentEl.style.border = "2px solid red"
inputEl.addEventListener('keydown', e => {
	if (e.keyCode === 13) {
		const value = e.target.value;
		contentEl.innerHTML += `<li>${value} <button class="btn btn-primary btn-sm js-close">X</button></li>`;
		e.target.value = '';

		/*
			const closeBtns = document.querySelectorAll('.js-close')
			closeBtns[closeBtns.length - 1].addEventListener('click', e => {
				console.log('close btn clicked')
			});
		*/
	}
});
contentEl.addEventListener('click', e => {
	console.log("e.target=", e.target)
	if (e.target.matches('.js-close')) {
		console.log('clicked the close button, fam!')
	}
})

/*
// will not work because initially no .js-close buttons found on page!
const closeBtns = document.querySelectorAll('.js-close');
console.log(closeBtns)
closeBtns.forEach(closeBtn => {
	closeBtn.addEventListener('click', e => {
		console.log('close btn clicked')
	});
});
*/

const $inputEl = $('.js-input-jq')
const $contentEl = $('.js-content-jq')
$inputEl.on('keydown', e => {
	if (e.keyCode === 13) {
		const value = $(e.target).val();
		$contentEl.append(`<li>${value} <button class="btn btn-primary btn-sm js-close">X</button></li>`);
		$(e.target).val('');
	}	
});
$contentEl.on('click', '.js-close', e => {
	console.log('clicked the close button with jq tho')
})

