/* CURRENTLY IN: javascript/main.js */

/*
	@fucntion xhrGet
	@desc perform vanilla JS GET request
		  given string URL and callback to handle response
*/
const xhrGet = (url, callback) => {
	const ajaxCall = new XMLHttpRequest();
	ajaxCall.open('GET', url);
	ajaxCall.onload = e => {
		callback(JSON.parse(e.target.responseText)) // converts string that looks like javascript object notation
													// into an actual javascript object literal
	}
	ajaxCall.send();
}

/*
	@function getWeatherEndpoint
	@desc given a cityName str, return the
		  api endpoint to call to fetch weather data
*/
const getWeatherEndpoint = (cityName) => {
	const baseUrl = "https://api.openweathermap.org/data";
	const version = 2.5;
	const endpoint = 'weather';
	const q = encodeURIComponent(cityName);
	const appid = '51b03e8d15d7df69f88921b3c1ba2f69';

	return `${baseUrl}/${version}/${endpoint}?q=${q}&appid=${appid}`;
};

/*
	@function getGiphyEndpoint
	@desc given a query str, return the
		  api endpoint to call to fetch giphy data
*/
const getGiphyEndpoint = (queryStr) => {
	const baseUrl = "https://api.giphy.com";
	const version = "v1"
	const endpoint = "gifs/search";
	const q = encodeURIComponent(queryStr); // to "encode" chars such as space, etc
											// to URL safe code like "%20"
	const apiKey = 'syP7w6LxYPKIJiQ8sP7lH5X7PsMqqAhC';

	return `${baseUrl}/${version}/${endpoint}?q=${q}&api_key=${apiKey}`;

};

/*
	@function renderWeatherGif
	@desc given an img src and weather conditions, display to UI
*/

const renderWeatherGif = (src, weather) => {
	const content = document.querySelector('.js-content');
	content.innerHTML = `<div>
		<img src=${src} />
		<h1>${weather}</h1>
	</div>`	
}

/*
	@function init
	@desc bootstrap entire javascript application here
*/	
const init = () => {
	xhrGet(getWeatherEndpoint("chicago, usa"), response => {
		if (response.weather.length === 0) {
			// handle error case...there is no weather description
		}

		xhrGet(
			getGiphyEndpoint("weather " + response.weather[0].description), 
			giphyResponse => {
				const giphyImgSrc = giphyResponse.data[0].images.original.url;
				renderWeatherGif(giphyImgSrc, response.weather[0].description);
			});
	});	
}

init();

const fakePromise = 1;

const myPromise = new Promise((resolve, reject) => {
	// this is a callback
	// we can do any kind of asynchronous work here...
	setTimeout(() => {
		resolve('2!')

		// ^^ this replaces the `return` that we would use
		// in a "normal" function
	}, 500)
});

const timeoutWithPromise = (num) => {
	return new Promise((resolve, reject) => {
		// this is a callback
		// we can do any kind of asynchronous work here...
		setTimeout(() => {
			resolve(num);

			// ^^ this replaces the `return` that we would use
			// in a "normal" function
		}, 500)
	});
}


// console.log('- 1!');
// setTimeout(() => {
// 	console.log('- 2!');
// 	setTimeout(() => {
// 		console.log('- 3!')
// 	}, 500)
// }, 500)


console.log('1!')
timeoutWithPromise(2)
	.then((num) => {
		console.log(num + '!')
		return timeoutWithPromise(3)
	})
	.then((num) => {
		console.log(num + '!')
		return 'foobar'
	})
	.then((string) => {
		console.log('string was=', string)
	});


// let p = myPromise;
// p = p.then(() => {...})
// p = p.then(() => {...})






















