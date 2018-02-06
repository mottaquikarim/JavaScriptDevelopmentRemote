/* CURRENTLY IN: javascript/main.js */

const API_KEY = '092c46931d544511a32b9911142ec6b9'
const randomGifApiEndpoint = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

const vanillaGet = url => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.addEventListener('load', e => {
			const data = JSON.parse(e.currentTarget.response);
			resolve(data)
		})
		xhr.addEventListener('error', err => {
			reject(err);
		})
		xhr.send();
	});
}

vanillaGet(randomGifApiEndpoint)
	.then(data => {
		console.log('LOOK MA IM IN VANILLA JS', data)
		return data.data.image_url;
	})
	.then(imgUrl => {
		document.querySelector('.js-gif').innerHTML += `
			<h2>Look ma! This is a promise!!!</h2>
			<img src="${asdfasdf}">	
		`
	})
	.catch(e => {
		console.log('SOMETHING WENT WRONG', e)
	})
// vanillaGet(randomGifApiEndpoint);


// -------------------------------------

// $.get(randomGifApiEndpoint, data => {
// 	console.log('jQuery', data)
// })
// $.get(randomGifApiEndpoint, data => {
// 	console.log(data)
// })