(function() { // protect the lemmings!
	return;
	
	const divNodeList = document.querySelectorAll("div")
	const divNode = document.querySelector("div")


	console.log(divNodeList[0], divNode);

	console.log('before setting border...')
	console.log(divNode.style.border)


	divNode.style.border = "1px solid red";

	console.log('after setting border...')
	console.log(divNode.style.border)

	// possible to update height, etc
	// divNode.style.height = "10px";

	// with querySelectorAll...
	divNodeList[0].style.width = "50%";
	console.log(divNodeList[0].style.width)

	// remove the height, lol
	divNode.style.height = null;

	// add back height tho
	// divNode.style.height = "10px";

	// background-color and other props
	// are camelCased
	divNode.style.backgroundColor = "red"

	// get computed values
	console.log('computed width=', window.getComputedStyle(divNode).width)

	// equivalent with querySelectorAll
	divNodeList.forEach((currentDiv) => {
		console.log('querySelectorAll computed width=', 
			window.getComputedStyle(currentDiv).width)
	})

	// manipulate classes
	divNode.classList.add('js-test-class');

	console.log('does contain class js-test-class?')
	console.log(divNode.classList.contains('js-test-class'))

	divNode.classList.remove('js-test-class');

	console.log('does contain class js-test-class?')
	console.log(divNode.classList.contains('js-test-class'))

	divNode.innerHTML = `<h1>
		Hello, Wrold!
	</h1>`

	const h1 = divNode.querySelector('h1')
	h1.style.color = 'white'

	divNode.innerHTML = '';


})();
