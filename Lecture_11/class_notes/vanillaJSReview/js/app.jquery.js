(function() { // protect the lemmings!

	// regular js
	const divNode = document.querySelector('div');
	const divNodeList = document.querySelectorAll('div')
	console.log('### Vanilla JS ###')
	console.log(divNode, divNodeList)

	/*
		// equialent to jquery .css() method

		divNodeList.forEach(div => {
			div.style.border = '1px solid red';
			div.style.height = '30px';
		})

		// if we wanted to implement .css()
		// ourselves...
		const applyCss = (nodeList, cssProperty, cssValue) => {
			nodeList.forEach((node) => {
				node.style[cssProperty] = cssValue;
			})
		}
	*/



	// in jquery
	const $div = $('div');

	console.log('### jQuery ###')
	console.log($div)

	$div.css('border', '1px solid red').css('height', '30px');

	console.log($div.css('border'))
	console.log(window.getComputedStyle(divNode).border)

	$div.css({
		backgroundColor: 'red',
		margin: '10px',
	})

	// CAUTION: this gives us a VANILLA JS object
	$div[0].style.border = '10px solid green'


})();