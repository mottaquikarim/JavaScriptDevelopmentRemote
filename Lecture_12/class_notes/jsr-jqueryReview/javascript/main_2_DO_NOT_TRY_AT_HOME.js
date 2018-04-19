const divs = document.querySelectorAll('.js-div');
const colors = ['red', 'green', 'blue', 'purple'];
console.log(colors.indexOf('blue')) // 2

divs.forEach((div) => {
	div.style.width = '50px';
	div.style.height = '50px';
	div.style.display = 'inline-block';
	div.style.backgroundColor = 'black';
	div.style.margin = '5px';
	div.style.transition = 'width 0.5s';
});

setInterval(() => {
	const randIndx = Math.floor(Math.random() * divs.length);
	const randWidth = Math.floor(Math.random() * 300);

	divs[randIndx].style.width = `${randWidth}px`;
	// randWidth + "px";
}, 500);


const firstDiv = divs[0];

divs.forEach((div, index) => {
	div.addEventListener('click', (e) => {
		console.log('hello wrold from div!')
		console.log('e=', e)
		console.log('element clicked is=', e.target)
		divs.forEach(cD => {
			cD.style.backgroundColor = "black"
		})

		// const parent = e.target.parentNode;
		// const index = Array.from(parent.children).indexOf(e.target)
		// console.log(index)
		e.target.style.backgroundColor = colors[index]
	})
})