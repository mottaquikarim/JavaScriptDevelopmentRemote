/* CURRENTLY IN: javascript/main.js */
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

const state = {
	searchQuery: '', // this is what the user puts into the input field
	isValidSearchQuery: false, 
	errMessage: '',
	gifs: [], // based on our search, we store the gifs returned from giphy here
	
	/*
		SAFELY set the searchQuery property of our state
	*/
	setSearchQuery: (query) => {
		if (query === '' || query.trim() === '') {
			state.isValidSearchQuery = false;
			state.errMessage = "Query cannot be empty!";
			return;
		}
		if (query.length < 3) {
			state.isValidSearchQuery = false;
			state.errMessage = "Query must be at least three chars long";
			return;
		}
		state.isValidSearchQuery = true;
		state.errMessage = "";
		state.searchQuery = query;
	},

	/*
		SAFELY retrieve and set the data from GIPHY API 
		into the .gifs property of our state
	*/
	refreshGifs: (functionToBeCalledWithDataIsBack) => {
		// do something with searchQuery to retrieve gifs...
		if (state.isValidSearchQuery === false) {
			return;
		} // do not make network call if we do not have a valid search query

		const apiEndpoint = `http://api.giphy.com/v1/gifs/search?api_key=092c46931d544511a32b9911142ec6b9&q=${state.searchQuery}`
        const start = Date.now();
        return vanillaGet(apiEndpoint)
			.then(data => {
				state.gifs = [];
	        	console.log((Date.now() - start)/1000)
				for (let i = 0; i < data.data.length; i++) {
					const gifUrl = data.data[i].images.downsized_medium.url;
					state.gifs.push(gifUrl)
				}

				return true;
			})
	}
};

const searchQueryInp = document.querySelector('.js-search-query');
const searchBtn = document.querySelector('.js-search');
const luckBtn = document.querySelector('.js-lucky')
const hint = document.querySelector('.js-hint');
const gifsContainer = document.querySelector('.js-gifs')

const render = () => {
	if (state.isValidSearchQuery === false) {
		hint.innerHTML = state.errMessage;
		hint.style.color = 'red';
		hint.style.width = '100%';
		hint.style.display = 'block';
		return;
	}

	// if we are here, then there is a *valid* search query input
	// by the user
	// we must now request and retrieve data from GIPHY that relates
	// to this search query
	hint.innerHTML = '';
	gifsContainer.innerHTML = `<div id="loading"></div>`;
	searchBtn.setAttribute('disabled', 'disabled');
	searchQueryInp.setAttribute('disabled', 'disabled');

	state.refreshGifs()
		.then(() => {
			// we now assume that the "network" call
			// came back successfully
			searchBtn.removeAttribute('disabled');
			searchQueryInp.removeAttribute('disabled');
			searchQueryInp.value = '';
			searchQueryInp.setAttribute('placeholder', state.searchQuery);
			let str = '';
			for (let i = 0; i < state.gifs.length; i++) {
				str += `<img src=${state.gifs[i]}>`;
			}
			gifsContainer.innerHTML = str;
		});
	
}

const updateStateAndRedraw = (callback) => {
	callback();
	render();
}

const onKeyPressed = e => {
	if (e.keyCode === 13) {
		updateStateAndRedraw(() => {
			state.setSearchQuery(e.target.value);
		});
	}
};

searchQueryInp.addEventListener('keypress', onKeyPressed);

searchBtn.addEventListener('click', e => {
	const value = searchQueryInp.value;
	updateStateAndRedraw(() => {
		state.setSearchQuery(value);
	});
});


// luckBtn.addEventListener('click', e => {
// 	updateStateAndRedraw(() => {
// 		state.setSearchQuery('pandas');
// 		state.refreshGifs();
// 	})
// })
