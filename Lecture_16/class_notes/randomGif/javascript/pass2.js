/* CURRENTLY IN: javascript/main.js */

const API_KEY = '092c46931d544511a32b9911142ec6b9'
const randomGifApiEndpoint = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
const onDataReturned = data => {
	document.querySelector('.js-gif').innerHTML += `
		<img src="${data.data.image_url}">	
	`
	console.log(data)
};

$.get(randomGifApiEndpoint, data => {
	console.log('FIRST ONE IS BACK LOL', new Date().getTime(), Date.now())

	$.get(randomGifApiEndpoint, data1 => {
		console.log('SECOND ONE IS BACK LOL')

		$.get(randomGifApiEndpoint, data2 => {
			console.log('SECOND ONE IS BACK LOL')

			$.get(randomGifApiEndpoint, data3 => {
				console.log('SECOND ONE IS BACK LOL', data, data1, data2)
			});
	
		});
	
	});

});


// const getReqAsPromise = url => {
// 	return new Promise((resolve, reject) => {
// 		$.get(url, data => {
// 			resolve(data);
// 		});
// 	})
// }

// const whenPromiseComesBack = data => {
// 	document.querySelector('.js-gif').innerHTML += `
// 		<h2>Look ma! This is a promise!!!</h2>
// 		<img src="${data.data.image_url}">	
// 	`	
// }

// getReqAsPromise(randomGifApiEndpoint).then(whenPromiseComesBack)




