/* CURRENTLY IN: javascript/main.js */



const API_KEY = '092c46931d544511a32b9911142ec6b9'
const randomGifApiEndpoint = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

const vanillaGet = (url, callback) => {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', e => {
		const data = JSON.parse(e.currentTarget.response);
		callback(data)
	})
	xhr.addEventListener('error', err => {
		console.log(err);
	})
	xhr.send();
}

vanillaGet(randomGifApiEndpoint, data => {
	console.log('LOOK MA IM IN VANILLA JS', data)
});
// vanillaGet(randomGifApiEndpoint);


// -------------------------------------

$.get(randomGifApiEndpoint, data => {
	console.log('jQuery', data)
})
// $.get(randomGifApiEndpoint, data => {
// 	console.log(data)
// })