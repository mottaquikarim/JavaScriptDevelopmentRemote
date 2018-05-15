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
/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {
  	const a = airtableBase({
  		apiKey: 'XXXXXXXXX',
  		baseId: 'XXXXXXXXX',
  		tableName: 'Table 1'
  	});
  	a.list().then(data => {
  	  cb(null, { data: data });
  	})
  
};
