const div = document.querySelectorAll('.js-div');
console.log("div=", div); // NodeList

// apply singular style to nodelist items
div.forEach(currentDiv => {
	currentDiv.style.border = "2px solid red";
});

// READ a property of each div
div.forEach(currentDiv => {
	console.log(currentDiv.style.border)
})

// console.log(window.getComputedStyle(div[0]))

div.forEach(currentDiv => {
	currentDiv.style.height = '50px';
	currentDiv.style.backgroundColor = 'red';
	currentDiv.style.borderRadius = "5px";
	currentDiv.style.margin = '5px'
})

div.forEach(cD => {
	cD.classList.add('js-test-class-lol')
})

div.forEach(cD => {
	cD.setAttribute('data-test', '1')
	console.log("cD attribute 'test'=", cD.getAttribute('data-test'))
})

div.forEach(cD => {
	cD.innerHTML = "<h1>Hello!</h1>"
})


// NOTE: the $- is a CONVENTION
// to make it clear that the current variable
// is actually storing a jQuery object
// however it is NOT required nor is it any
// type of special ... anythin
const $div = $('.js-div-jq');
console.log("$div=", $div);

// apply singular style to jquery obj
$div.css('border', '2px solid green');
console.log("$div[1]=", $div[1]);
const secondDiv = $div[1];
$(secondDiv).css('border', '2px solid');

// READ a property
console.log($div.css('border'));
console.log($div.css('width'));

$div.css({
	'height': '50px',
	'backgroundColor': 'black',
	'borderRadius': '5px',
	'margin': '5px',
	'color': 'white',
})

$div.addClass('js-test-class-lol')
console.log($div.hasClass('js-test-class-lol')) // boolean, true, false

$div.attr('data-test', '1')
console.log($div.attr('data-test'))

$div.html('<h1>Hello $$$$</h1>')
console.log($div.html())


