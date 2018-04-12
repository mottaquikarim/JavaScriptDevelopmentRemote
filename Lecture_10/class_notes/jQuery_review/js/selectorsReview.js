(function() { // protect the lemmings!

	// the goal of this pset is to select different HTML elements with JQuery
	// it is meant to show you a little bit about the paradigm jQuery is built around
	// and demonstrate the power of the jQuery selector engine ( called sizzle )

	// please select the item with ID : page-header
	// save it to a variable and console.log it
	let pageHeaderEl = document.querySelectorAll('#page-header');
	console.log(pageHeaderEl)

	// please select the item or items with CLASS : card
	// save it to a variable and console.log it
	let cardEl = document.querySelectorAll('.card');
	console.log(cardEl, cardEl.constructor === NodeList)
	// what kind of javascript variable is cardEl?
	let cardElType = typeof cardEl;
	console.log(cardElType)
	// (interesting article that describes what the jQuery object actually returns:
	// http://www.learningjquery.com/2008/12/peeling-away-the-jquery-wrapper/ )

	// please select all the unorder lists in the document
	// save it as var and console log it
	let ulEls = document.querySelectorAll('ul');
	console.log(ulEls)

	// I want to know how many anchor tags are present in the ENTIRE document
	// please construct a selector that will grab them all and console.log out
	// the number of anchor tags in this document
	let numAnchorTags = document.querySelectorAll('a').length;
	console.log(numAnchorTags)

	// I would like to know how many ULs can be found inside the CLASS: card
	// please construct a selector that chooses them all and console.log out the number
	// of ULs that are children of the CLASS: card
	let numberOfUlsChildrenOfLIs = document.querySelectorAll('.card ul');
	console.log(numberOfUlsChildrenOfLIs)

	// please console.log out the text inside the FIRST list item in ID: page-header
	let textInsideFirstPageHeaderItem = pageHeaderEl[0].querySelectorAll('li')[0];
	const getText = (domEl) => {
		return domEl.innerText || domEl.textContent;
	}
	// const getText = domEl => domEl.innerText || domEl.textContent;

	const text = getText(textInsideFirstPageHeaderItem)
	console.log(text)

	// please construct a selector that returns ALL the ODD list items in
	// the HTML element with CLASS: cards
	// console.log out these results
	let oddChildrenOfCards = document.querySelectorAll('.cards li');
	const oddItems = Array.from(oddChildrenOfCards).filter((node, index) => {
		return index % 2 === 1;
	})
	console.log(oddItems)


	// REFERENCE: here's a list of jQuery selectors:
	// http://api.jquery.com/category/selectors/

})();




