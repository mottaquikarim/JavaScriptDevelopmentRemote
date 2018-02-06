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

// const first = getReqAsPromise(randomGifApiEndpoint);

// const second = first.then(data => {
// 	console.log('FIRST ONE BACK', data);
// 	whenPromiseComesBack(data)
// 	return getReqAsPromise(randomGifApiEndpoint);
// });

// const third = second.then(data => {
// 	console.log('SECOND ONE BACK', data);
// 	whenPromiseComesBack(data)
// 	return getReqAsPromise(randomGifApiEndpoint);
// });

// const fourth = third.then(data => {
// 	console.log('THIRD ONE BACK', data);
// 	whenPromiseComesBack(data)
// 	return getReqAsPromise(randomGifApiEndpoint)
// });

// const fifth = fourth.then(data => {
// 	console.log('DONE!', data)
// 	whenPromiseComesBack(data)
// });

const promises = [];
promises[0] = getReqAsPromise(randomGifApiEndpoint);

for (let i = 1; i < 15; i++) {
	promises[i] = promises[i-1].then(data => {
		console.log(i + ' ONE BACK', data);
		whenPromiseComesBack(data)
		return getReqAsPromise(randomGifApiEndpoint);
	});
}

// promises[1] = promises[0].then(data => {
// 	console.log('FIRST ONE BACK', data);
// 	whenPromiseComesBack(data)
// 	return getReqAsPromise(randomGifApiEndpoint);
// });
// promises[2] = promises[1].then(data => {
// 	console.log('SECOND ONE BACK', data);
// 	whenPromiseComesBack(data)
// 	return getReqAsPromise(randomGifApiEndpoint);
// });
// promises[3] = promises[2].then(data => {
// 	console.log('SECOND ONE BACK', data);
// 	whenPromiseComesBack(data)
// 	return getReqAsPromise(randomGifApiEndpoint);
// });






