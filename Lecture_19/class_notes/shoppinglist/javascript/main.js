const xhrGetPromise = (url) => {
	return new Promise((resolve, reject) => {
		const ajaxCall = new XMLHttpRequest();
		ajaxCall.open('GET', url);
		ajaxCall.onload = e => {
			resolve(JSON.parse(e.target.responseText)) // converts string that looks like javascript object notation
														// into an actual javascript object literal
		}
		ajaxCall.onerror = err => {
			reject(err)
		}
		ajaxCall.send();
	});
}


const getShoppingList = (config) => {
	const _list = {};
	const _uuid4 = () => {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}
	// @TODO: validate!
	const _validateItem = item => {return true;}
	// @TODO: validate!
	const _validatePrice = price => {return Math.random() < 0.5 ? true : true;}
	
	const _itemExists = id => {
		if (typeof id !== "string") {
			return false;
		}

		if (typeof _list[id] === "undefined") {
			return false;
		}

		return true;
	}

	return {
		create: (item, price) => {
		    return new Promise((resolve, reject) => {
				const id = _uuid4();
				if (!_validatePrice(price) || !_validateItem(item)) {
					reject("Price or Item is not valid!");
					return;
				}


				const ajax = xhrGetPromise("https://wt-taqqui_karim-gmail_com-0.sandbox.auth0-extend.com/test-jsr-0312?method=create&item="+item+"&price="+price)
				ajax.then(backend_id => {
					resolve(backend_id)
				})
		    })
		},
		list: () => {
			return xhrGetPromise("https://wt-taqqui_karim-gmail_com-0.sandbox.auth0-extend.com/test-jsr-0312?method=list")			
		},
		listOne: (id) => {
			const promiseCritCb = (resolve, reject) => {
				if (!_itemExists(id)) {
					reject('id is not string or item does not exist in list')
				} // _itemExists
				
				resolve(_list[id]);
			};
			return new Promise(promiseCritCb);
		},
		// update: function(id, data) {}
		update(id, data) {
			return this.listOne(id)
				.then(listItem => {

					if (data.price) {
						_list[id].price = data.price
					}
					if (data.item) {
						_list[id].item = data.itme
					}

					// const dataKeys = Object.keys(data)
					// const _listIdKeys = Object.keys(_list[id]) // ['item', 'price']
					// const newData = {};

					// if (dataKeys.length > _listIdKeys.length) {
					// 	for (let i = 0; i < _listIdKeys.length; i++) {
					// 		const key = _listIdKeys[i];
					// 		newData[key] = data[key];
					// 	}
					// }
					// _list[id] = Object.assign({}, listItem, newData);

					return true;
				})
				.catch(e => {
					console.log(e)
					return false;
				});
		},
	};
};


// const sl = getShoppingList();

// const eggs = sl.create('eggs', 3.99);
// const steak = sl.create('steak', 2.99);

// Promise.all([eggs, steak])
// 	.then(promiseReturns => {
// 		console.log(promiseReturns);

// 		return sl.update(promiseReturns[1], {
// 			'price': 1.59,
// 			'tax': 0.0825,
// 		});
// 	})
// 	.then(isUpdateSuccess => {
// 		console.log(isUpdateSuccess)

// 		return sl.list()
// 	})
// 	.then(list => {
// 		console.log(list)
// 	})
// 	.catch(err => {
// 		console.log('REASON: ', err)
// 	});


//  <h1><span class="foo">Hello, world!</span></h1>;

/*
React.createElement("h1", {
	children: [React.createElement("span", {
		className: "foo",
		innerHTML: "Hello, Wrold!"
	})]
})
*/


