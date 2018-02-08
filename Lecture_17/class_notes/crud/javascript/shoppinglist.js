const Airtable = require('airtable');
const parseQuery = () => {
	const args = window.location.search.substr(1);
	const eachArg = args.split('&');
	const dict = {};
	for (let i = 0; i < eachArg.length; i++) {
		const bits = eachArg[i].split('=');
		dict[bits[0]] = bits[1];
	}
	return dict;
}

const ShoppingList = {
	// NOTE: you can find your apiKey and baseKey from the Airtable docs, google it! Or 
	// look through the lecture17 slides 
	_base: new Airtable({apiKey: parseQuery().apiKey}).base(parseQuery().baseKey),
	_prepRecord: record => {
		return {
			'item': record.get('Item'),
			'price': record.get('Price'),
			'rank': record.get('id'),
			'id': record._rawJson.id,
		};
	},
	list: () => new Promise((resolve, reject) => {
		const base = ShoppingList._base('Table 1');
		const query = base.select({
	    	maxRecords: 1200,
	    	view: 'Grid view',
	    });
		const data = [];
		const onNewPage = (records, fetchNextPage) => {
	    	records.forEach(function(record) {
	        	data.push(ShoppingList._prepRecord(record));
	    	});

	    	fetchNextPage();
	    };
	    const onCompleted = err => {
	    	if (err) {
	    		reject(err);
	    	}
	    	else {
	    		resolve(data)
	    	}
	    }

	    query.eachPage(onNewPage, onCompleted);
	}),
	listOne: id => new Promise((resolve, reject) => {
		const base = ShoppingList._base('Table 1');
		base.find(id, (err, record) => {
		    if (err) {
	    		reject(err);
	    	}
	    	else {
	    		resolve(ShoppingList._prepRecord(record))
	    	}
		});
	}),
	create: (item, price) => new Promise((resolve, reject) => {
		const base = ShoppingList._base('Table 1');
		base.create({
		  "Item": item,
		  "Price": price,
		}, (err, record) => {
		    if (err) { reject(err);}
		    else { resolve(record.getId()) }
		});
	}),
	update: (id, data) => new Promise((resolve, reject) => {
		const base = ShoppingList._base('Table 1');
		if (Object.keys(data).length > 2) {
			reject('Invalid number of keys in data object');
			return;
		}

		if (typeof data['Item'] === "undefined" && typeof data['Price'] === "undefined") {
			reject('Neither `Item` nor `Price` defined');
			return;
		}

		base.update(id, data, (err, record) => {
		   	if (err) { reject(err);}
		    else { 
		    	resolve(ShoppingList._prepRecord(record));
		    }
		});

	}),
};

ShoppingList.create('yogurt', 1.59)
	.then(id => {
		console.log(id);
		return ShoppingList.list();
	})
	.then(data => {
		console.log('FIRST GRAB ALL DATA', data)
		return data[Math.floor(Math.random()*data.length)].id;
	})
	.then(id => {
		console.log('id is', id)
		return ShoppingList.listOne(id)
	})
	.then(record => {
		console.log('our record is...', record)
		return ShoppingList.update(record.id, {
			'Item': 'UPDATED LOL'
		});
	})
	.then(record => {
		console.log('updated record is...', record)
	})

/*
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
*/
