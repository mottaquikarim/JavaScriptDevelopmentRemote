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
				
				_list[id] = {
					'item': item,
					'price': price,
				}
				resolve(id)
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