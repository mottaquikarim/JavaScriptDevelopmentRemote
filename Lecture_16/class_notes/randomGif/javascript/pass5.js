/* CURRENTLY IN: javascript/main.js */

const stopwatch = timeout => {
	return new Promise((resolve, reject) => {
		/* asynch action */
		setTimeout(() => {
			resolve();
		}, timeout)
	});
}

console.log('starting')
stopwatch(1000)
	.then(() => {
		console.log('done with 1!');
		return stopwatch(2000);
	})
	.then(() => {
		console.log('done with 2!');
		return stopwatch(3000);
	})
	.then((five) => {
		console.log('done with 3!');
	})



// console.log('starting')
// setTimeout(() => {
// 	/* ... */
// 	// gets invoked after set amount of time
// 	console.log('first is done')
// 	setTimeout(() => {
// 		console.log('second is done')
// 		setTimeout(() => {
// 			console.log('third is done')
// 		}, 3000);
// 	}, 2000);
// }, 1000);