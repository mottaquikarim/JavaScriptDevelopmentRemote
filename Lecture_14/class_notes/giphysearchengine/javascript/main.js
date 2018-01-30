/* CURRENTLY IN: javascript/main.js */

const state = {
	searchQuery: '', // this is what the user puts into the input field
	isValidSearchQuery: false, 
	errMessage: '',
	gifs: [], // based on our search, we store the gifs returned from giphy here
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
	refreshGifs: () => {
		// do something with searchQuery to retrieve gifs...
		if (state.isValidSearchQuery === false) {
			return;
		} // do not make network call if we do not have a valid search query

		// Look ma! fake data!
		/*
			API: Application Programming Interface
			    - a set of functions that can be called by any developer
			    - jquery is an API - because it provides us with functions such as .css() or .on('click', ...)

			Web API: a series of functions BEHIND web URLs

			WEBURL:
			GET https://api.giphy.com/v1/search/?q=foobar
			^^ this is called an API endpoint
			-> Giphy.Search('foobar') 
			-> {
			   img_src: '...'
			}
		*/
		console.log(data)
		for (let i = 0; i < data.data.length; i++) {
			const gifUrl = data.data[i].images.downsized_medium.url;
			state.gifs.push(gifUrl)
		}
		// state.gifs.push('https://media.giphy.com/media/jgXFDh692n8aI/giphy.gif');
		// state.gifs.push('https://media.giphy.com/media/jgXFDh692n8aI/giphy.gif');
		// state.gifs.push('https://media.giphy.com/media/jgXFDh692n8aI/giphy.gif');
	}
};

const searchQueryInp = document.querySelector('.js-search-query');
const searchBtn = document.querySelector('.js-search');
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
	setTimeout(() => {
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
	}, 1000);
}

searchQueryInp.addEventListener('keypress', e => {
	if (e.keyCode === 13) {
		state.setSearchQuery(e.target.value);
		render(hint);
	}
});

searchBtn.addEventListener('click', e => {
	const value = searchQueryInp.value;
	state.setSearchQuery(value);
	render(hint);
});