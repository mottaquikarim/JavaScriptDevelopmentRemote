/* CURRENTLY IN: javascript/main.js */

const API_KEY = '092c46931d544511a32b9911142ec6b9'
const randomGifApiEndpoint = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
const onDataReturned = data => {
	document.querySelector('.js-gif').innerHTML += `
		<img src="${data.data.image_url}">	
	`
	console.log(data)
};
$.get(randomGifApiEndpoint, onDataReturned);


const getImagePromise = new Promise((resolve, reject) => {
	/* ... */
	$.get(randomGifApiEndpoint, data => {
		console.log('here')
		resolve(data);
	});
});

const whenPromiseComesBack = data => {
	document.querySelector('.js-gif').innerHTML += `
		<h2>Look ma! This is a promise</h2>
		<img src="${data.data.image_url}">	
	`	
}
getImagePromise.then(whenPromiseComesBack)