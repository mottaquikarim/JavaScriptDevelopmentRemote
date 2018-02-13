'use strict';

const express    = require('express');
const Webtask    = require('webtask-tools');
const bodyParser = require('body-parser');
const Airtable   = require('airtable');

const parseQuery = () => {
	return {
	  'baseKey': 'XXX',
	  'apiKey': 'XXX',
	}
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

const app = express();

app.use(bodyParser.json());

app.get('/list', function (req, res) {
  ShoppingList.list().then(data => {
    res.json(data);
  })
});

app.get('/list/:id', function (req, res) {
  console.log(req.params)
  ShoppingList.listOne(req.params.id).then(data => {
    res.json(data);
  });
});

module.exports = Webtask.fromExpress(app);
