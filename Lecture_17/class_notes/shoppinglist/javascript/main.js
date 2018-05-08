/* CURRENTLY IN: javascript/main.js */
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
	return {
		create: (item, price) => {
		    return new Promise((resolve, reject) => {
				const id = _uuid4();
				if (!_validatePrice(price) || !_validateItem(item)) {
					reject("Price or Item is not valid!");
					return;
				}

				if (config.mode === 'airtable') {
					// connect to airtable api,
					// create the new record
					// confirm it works
					// THEN, resolve(id)
				}
				else {
					_list[id] = {
						'item': item,
						'price': price,
					}
					resolve(id)
				}

		    })
		},
		list: () => {
			return new Promise((resolve, reject) => {
				const arr = [];
				const keys = Object.keys(_list)
				for (let i = 0; i < keys.length; i++) {
					const key = keys[i];
					arr.push(_list[key])
				}
				resolve(arr)
			});
		}		
	};
};


const sl = getShoppingList({
	mode: 'airtable',
	apiKey: '1234568'
});

sl.create('eggs', 3.99)
	.9y
	.then(list => {
		console.log(list)
	})
	.catch(err => {
		console.log('REASON: ', err)
	})