/* CURRENTLY IN: javascript/main.js */

const query = document.querySelector('.js-search-query');
const submit = document.querySelector('.js-submit');
const content = document.querySelector('.js-content');
const page = document.querySelector('.js-page');

query.addEventListener('keydown', e => {
	
	if (e.keyCode === 13) { // ASCII keycodes for simple characters
		e.preventDefault();
		const queryStr = e.target.value;
		e.target.value = '';

		gifAPICall(queryStr);	
	}

});

const gifAPICall = (searchTerm) => {
	const giphySearchEndpoint = "http://api.giphy.com/v1/gifs/search?q="+searchTerm+"&api_key=syP7w6LxYPKIJiQ8sP7lH5X7PsMqqAhC&limit=3";
	
	jqXhrGet(giphySearchEndpoint, response => { 
		content.innerHTML = "";
		const pagination = response.pagination;

		// const count = pagination.count;
		// const offset = pagination.offset;
		// const total_count = pagination.total_count;

		// object destructing...just syntax sugar, but
		// worth remembering/grokking
		const {count, offset, total_count} = pagination;

		const numPages = Math.ceil(total_count / count);
		console.log('numPages=', numPages)
		console.log('pagination=', pagination)

		let paginationMarkup = "";
		for (let p = 0; p < 4; p++) {
			/*
				psuedo code:
					on click of the `page` variable
					see if the target is anchor tag with class page-link
					if it is, grab the data-offset using the `getAttribute` method
					then, make API call to giphy endpoint
					but tack on `offset=` pagenumber, which is stored
					in the `data-offset` attribute you just grabbed
			*/
			paginationMarkup += `<li class="page-item">
				<a data-offset="${p}" class="page-link" href="#">${p+1}</a>
			</li>`
		}
		paginationMarkup += `<li class="page-item">
			<a class="page-link">...</a>
		</li>`
		paginationMarkup += `<li class="page-item">
				<a data-offset="${numPages}" class="page-link" href="#">${numPages}</a>
			</li>`

		page.innerHTML = paginationMarkup;
		
		for (let i = 0; i < response.data.length; i++) {
			const imgUrl = response.data[i].images.original.url;
			content.innerHTML += `<div class="col">
				<img style="width: 100%;" src="${imgUrl}" />
			</div>`;
		}

		/*
			const imgMarkups = response.data.map(gif => {
				const imgUrl = gif.images.original.url;
				return `<img src="${imgUrl}" />`;
			});

			content.innerHTML = imgMarkups.join("\n")

			// one liner approach
			content.innerHTML = response.data.map(gif => {
				const imgUrl = gif.images.original.url;
				return `<img src="${imgUrl}" />`;
			}).join("\n");
		*/
	});

	// xhrGet(giphySearchEndpoint, response => { 
	// 	console.log("success got data", response);
	// 	const imgUrl = response.data[0].images.original.url;
	// 	content.innerHTML = `<img src="${imgUrl}" />`
	// });
}

const jqXhrGet = (url, callback) => {
	const xhr = $.get(url)
	xhr.done(callback)
}

const xhrGet = (url, callback) => {
	const ajaxCall = new XMLHttpRequest();
	ajaxCall.open('GET', url);
	ajaxCall.onload = e => {
		console.log(e)
		callback(JSON.parse(e.target.responseText)) // converts string that looks like javascript object notation
													// into an actual javascript object literal
	}
	ajaxCall.send();
}

/*
	TASK:

		- please refactor the `stubAPICall` function to now use the xhr method seen below
		- create an API key here: https://developers.giphy.com/docs/
		- once data comes back, update content.innerHTML to be the downsized_medium image
			for the FIRST response item (it should render the GIF)
*/

