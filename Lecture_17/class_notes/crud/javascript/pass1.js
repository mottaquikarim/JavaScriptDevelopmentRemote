const uuidv4 = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
	.replace(/[xy]/g, c => {
		const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});

const ShoppingList = {
	_list: {},
	_prepRecord: (record, id) => {
		return Object.assign({}, record, {
			id,
		});
	},
	create: (item, price) => {
		const id = uuidv4();

		ShoppingList._list[id] = {
			item,
			price,
		};

		return id;
	},
	list: () => {
	    const keys = Object.keys(ShoppingList._list);
	    const data = [];
	    for (let i = 0; i < keys.length; i++) {
	    	const currentId = keys[i];
	    	const record = ShoppingList._list[currentId];
	    	const objectToAppend = ShoppingList._prepRecord(record, currentId);
	    	data.push(objectToAppend)
	    }
	    return data; 
	},
	listOne: id => {
		const record = ShoppingList._list[id];

		if (typeof record === "undefined") {
			return null;
		}

		return ShoppingList._prepRecord(record, id);
	},
	update: (id, data) => {
		const record = ShoppingList._list[id];

		if (typeof record === "undefined") {
			return null;
		}

		if (Object.keys(data).length > 2) {
			return null;
		}

		if (typeof data['item'] === "undefined" && typeof data['price'] === "undefined") {
			return null;
		}

		// look below for explanation of how object.assign works...
		ShoppingList._list[id] = Object.assign({}, record, data);

		return ShoppingList._prepRecord(ShoppingList._list[id], id);
	},
	remove: id => {
		const record = ShoppingList._list[id];

		if (typeof record === "undefined") {
			return null;
		}

		delete ShoppingList._list[id];

		return {}
	}
};

console.log(ShoppingList._list);
const eggsId = ShoppingList.create('eggs', 5.00);
const oj = ShoppingList.create('freshly squeezed orange juice', 4.50);
console.log(ShoppingList._list, eggsId);
console.log(ShoppingList.list())
console.log('EGGS RECORD IS...')
console.log(ShoppingList.listOne(eggsId))

console.log(ShoppingList.update(eggsId, {
	'item': 'organic eggs'
}))

console.log(ShoppingList.update(eggsId, {
	'price': 8
}))

console.log(ShoppingList.update(eggsId, {
	'foobar': 'organic eggs'
}))

console.log(ShoppingList.update(eggsId, {
	'foobar': 'organic eggs',
	'a': 1,
	'b': 2
}))

console.log(ShoppingList.update(eggsId, {}))
console.log(ShoppingList.listOne(eggsId))

console.log(ShoppingList.remove(eggsId))
console.log(ShoppingList.list())

/*
	record = {
		'item': 'eggs',
		'price': 5
	}

	data = {
		'item': 'organic eggs'
	}

	Object.assign({}, record, data)
	Object.assign({}, {
		'item': 'eggs',
		'price': 5
	}, {
		'item': 'organic eggs'
	}) = {
		'item': 'organic eggs',
		'price': 5
	}
*/


