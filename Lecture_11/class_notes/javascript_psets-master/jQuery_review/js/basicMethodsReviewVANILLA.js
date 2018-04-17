(function() { // protect the lemmings!
	
	  /**************************************************************
	  	---READ THIS---
		
		NOTE THAT THIS IS AN EXACT COPY OF THE JQUERY REVIEW PSET
		
		THE MAIN DIFFERENCE HERE IS THAT YOU ARE ASKED TO COMPLETE
		THESE PROBLEMS IN __VANILLA__ JAVASCRIPT.
		
		I HAVE UPDATED THE PROMPTS AS MUCH AS POSSIBLE BUT IF YOU
		FIND JUERY REFERENCES HERE PLS IGNORE 
		
		HINT: GOOGLE IS YOUR FRIEND
		
		--------------
	  ***************************************************************/

	// ------------------------------------------------------------
	// please select all the .card HTML elements in the document
	// and save as cards
	const cards = document.querySelectorAll('.card');
	console.log('cards=', cards)

	// now please add a
	// border: 1px solid red to each item found in var cards
	// note that this property must be applied to ALL the items in var cards
	cards.forEach((card, i) => {
		card.style.border = "1px solid red";
		// console.log(`1px solid rgb(${255/(i+1)}, ${255/(i+1)}, ${255/(i+1)})`)
	})

	for(let i = 0; i < cards.length; i++) {
		cards[i].style.border = "1px solid red";
	}

	// select all the items in the document with class: profile
	const profile = document.querySelectorAll('.profile');
	// now, create a var called padding and store the padding CSS rule for the profile
	// var. what kind of variable is this? a number? string? boolean? array? object?
	const profilePaddingRule = window.getComputedStyle(profile[0]).paddingTop;
		// const profilePaddingRule = window.getComputedStyle(profile[0]).getPropertyValue("padding-top");
	console.log(profilePaddingRule)


	// ------------------------------------------------------------
	// using the const cards from earlier, add a class to each item called 'card-class-2'
	// HINT: you will need to look up the `classList` property
	cards.forEach((card) => {
		card.classList.add('card-class-2') // NOTE: NO DOT HERE
	})

	// now, create a const called cardClass2 and select all the items with class: card-class-2
	// using the `classList` object, remove the class: card-class-2
	const cardClass2 = document.querySelectorAll('.card-class-2');
	console.log(cardClass2)
	cardClass2.forEach((card) => {
		card.classList.remove('card-class-2')
	})

	// console.log the const cardClass2 now that you've removed the class: card-class-2

	// please select all LIs that are the children of id: page-header
	const pageHeaderLIs = document.querySelectorAll('#page-header li');
	// find the LI item that has the class: active, use `classList` object once again
	let activeLi = null;
	pageHeaderLIs.forEach((li) => {
		if (li.classList.contains('active')) {
			activeLi = li;
		}
	})
	console.log(activeLi)

	// FYI fam, Array.from() takes __any__ array-list object
	// and converts him into an array, the main implication here that
	// we are able to access common and useful array methods as a result
	const activeLi2 = Array.from(pageHeaderLIs).filter(li => {
		return li.classList.contains('active');
	})

	// Array.from(pageHeaderLIs).filter(li => li.classList.contains('active'))
	console.log(activeLi2)

	// ------------------------------------------------------------
	// using the .querySelectorAll() method on const cards, please find elements with class: profile
	console.log(cards)
	const profiles = cards[0].querySelectorAll('.profile1');
	console.log(profiles)
	// using the .querySelectorAll() method on const cards, please find elements with class: tags
	const tags = null;
	// using the .querySelectorAll() method on const tags, please find all anchor tags
	const anchors = null;
	// using the .querySelectorAll() method on const anchors, find all span tags
	const spans = null;
	// console.log out const spans - what do you see? can you think of a test we can do,
	// with an if statement, that could reliably tell us if any items with your selector was found?

	// ------------------------------------------------------------
	// store width and height for const profiles
	const profileWid = null;
	const profileHeight = null;
	// does this work...? Why or why not? If not, what can you do to make this work?

	// ------------------------------------------------------------
	// select the first LI item in const cards
	// update the html code to
	// <strong>Hello Wrold</strong>

	// select the second LI item in const cards
	// do the same as above, but now only update the text
	// whats the difference here?
})();

