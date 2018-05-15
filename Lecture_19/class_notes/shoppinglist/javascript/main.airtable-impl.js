/* CURRENTLY IN: javascript/main.js */


const airtableBase = (config) => {
	// destructing 
	const {apiKey, baseId} = config;
	const Airtable = require('airtable');
	const base = new Airtable({apiKey: apiKey}).base(baseId);
	const selectionOpts = {
	    maxRecords: 99,
	    view: "Grid view"
	}

	return {
		list: () => {
			return new Promise((resolve, reject) => {
				// global array of records to resolve this promise with
				const records = [];
				// call out to airtable API...

				// first, grab table name we want to connect to
				base(config.tableName)
					// then, specify how many records to grab
					.select(selectionOpts)
					// for each "page" that is retrieved, do the following...
					.eachPage(function page(airtableRecords, fetchNextPage) {
					    // This function (`page`) will get called for each page of records.
					    console.log(records)
					    airtableRecords.forEach(function(record) {
					    	const backend_id = record['_rawJson']['id'];
					    	const updatedRecord = Object.assign({}, record['_rawJson']['fields'], {
					    		'backend_id': backend_id,
					    	})
					    	records.push(updatedRecord)
					        console.log('Retrieved', record, record.get('id'), record.get('Item'));
					        console.log(records.length)
					    });

					    // To fetch the newxt page of records, call `fetchNextPage`.
					    // If there are more records, `page` will get called again.
					    // If there are no more records, `done` will get called.
					    fetchNextPage();

					}, function done(err) {
				    	if (err) { reject(err); return; }
				    	console.log('records=', records)
				    	resolve(records)
					});
			});
		},
		create: (item, price) => {
			return new Promise((resolve, reject) => {
				base(config.tableName).create({
				  "Item": item,
				  "Price": price,
				}, function(err, record) {
				    if (err) { reject(err); return; }
				    resolve(record.getId());
				});
			});
		}
	}
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

	const a = airtableBase({
		apiKey: 'keyFFObr6RVSZCsw6',
		baseId: 'app0c21j4MXKtYhIj',
		tableName: 'Table 1'
	});

	return {
		create: (item, price) => {
		    return new Promise((resolve, reject) => {
				const id = _uuid4();
				if (!_validatePrice(price) || !_validateItem(item)) {
					reject("Price or Item is not valid!");
					return;
				}
				
				// _list[id] = {
				// 	'item': item,
				// 	'price': price,
				// }

				a.create(item, price).then(backend_id => {
					resolve(backend_id)
				})
				// resolve(id)
		    })
		},
		list: () => {
			return a.list();

			// if (config.type === "airtable") {
			// 	return a.list();
			// }
			// else {
			// 	// ... do something to return the in-memory version
			// }
			
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


const sl = getShoppingList();

const eggs = sl.create('eggs', 3.99);
const steak = sl.create('steak', 2.99);

Promise.all([eggs, steak])
	.then(promiseReturns => {
		console.log(promiseReturns);

		return sl.update(promiseReturns[1], {
			'price': 1.59,
			'tax': 0.0825,
		});
	})
	.then(isUpdateSuccess => {
		console.log(isUpdateSuccess)

		return sl.list()
	})
	.then(list => {
		console.log(list)
	})
	.catch(err => {
		console.log('REASON: ', err)
	});

