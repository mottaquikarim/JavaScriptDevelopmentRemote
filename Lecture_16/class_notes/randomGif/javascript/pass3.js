/* CURRENTLY IN: javascript/main.js */

const API_KEY = '092c46931d544511a32b9911142ec6b9'
const randomGifApiEndpoint = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`


const getReqAsPromise = url => {
	return new Promise((resolve, reject) => {
		$.get(url, data => {
			resolve(data);
		});
	})
}

const whenPromiseComesBack = data => {
	document.querySelector('.js-gif').innerHTML += `
		<h2>Look ma! This is a promise!!!</h2>
		<img src="${data.data.image_url}">	
	`	
}

getReqAsPromise(randomGifApiEndpoint)
	.then(data => {
		console.log('FIRST ONE BACK', data);
		whenPromiseComesBack(data)
		return getReqAsPromise(randomGifApiEndpoint);
	})
	.then(data => {
		console.log('SECOND ONE BACK', data);
		whenPromiseComesBack(data)
		return getReqAsPromise(randomGifApiEndpoint);
	})
	.then(data => {
		console.log('THIRD ONE BACK', data);
		whenPromiseComesBack(data)
		return getReqAsPromise(randomGifApiEndpoint)
	})
	.then(data => {
		console.log('DONE!', data)
		whenPromiseComesBack(data)
	})




