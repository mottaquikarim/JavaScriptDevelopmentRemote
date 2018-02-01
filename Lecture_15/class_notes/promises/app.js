// console.log('1!');
// setTimeout(() => {
// 	console.log('2!');
// 	setTimeout(() => {
// 		console.log('3!');
// 		setTimeout(() => {
// 			console.log('4!');
// 			setTimeout(() => {
// 				console.log('5!');
// 			}, 1000);
// 		}, 1000);
// 	}, 1000);
// }, 1000);

// for (let i = 0; i < 5; i++) {
// 	setTimeout(() => {
// 		console.log(`${i}!`)
// 	}, 1000 * i);
// }

// const Person = {
// 	name: 'Taq',
// 	speak: () => {
// 		console.log('foobar')
// 	}
// }; // object literal

// Person.speak()

// const timenow = new Date(2017, 0, 1); // object constructor
// console.log(timenow.getFullYear());

// setTimeout(() => {
// 	console.log('5!');
// }, 1000);

// const thisWillOccur = (num = 1) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(`${num}!`);
// 		}, 1000);	
// 	});
// }

// thisWillOccur(1)
// 	.then(data => {
// 		console.log(data)
// 		return thisWillOccur(2)
// 	})
// 	.then(data => {
// 		console.log(data)
// 		return thisWillOccur(3)
// 	})
// 	.then(data => {
// 		console.log(data)
// 		return thisWillOccur(4)
// 	})
// 	.then(data => {
// 		console.log(data)
// 		return thisWillOccur(5)
// 	})
// 	.then(data => {
// 		console.log(data)
// 	})

// let prom = thisWillOccur(1);
// for (let i = 1; i < 10; i++) {
// 	prom = prom.then(data => {
// 		console.log(data)
// 		return thisWillOccur(i+1)
// 	});
// }

const a = 1+2;
// i KNOW that a is equal 3

// setTimeout(() => { // timeout 1
// 	console.log(1)
// 	// pretend we are trying to grab weather conditions in nyc
// 	// suppose it is raining
// 	setTimeout(() => { // timeout 2
// 		console.log(2)
// 		// pull in a giphy of rain
// 		setTimeout(() => { // timeout 3
// 			console.log(3)
// 			setTimeout(() => { // timeout 4
// 				console.log(4)
// 			}, 1000)

// 		}, 1000)

// 	}, 1000);

// }, 1000);

// const firstTimeout = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log(1)
// 		resolve();
// 	}, 1000);
// });

// firstTimeout
// 	.then(() => {
// 		setTimeout(() => {
// 			console.log(2)
// 		}, 1000);
// 	});

/*
	you roll a die
	if you get 1,2,or 3 you WIN
	otherwise you lose
*/

const dieRoll = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const dieVal = Math.floor(Math.random()*6) + 1;
			// 1,2,3,4,5,or 6
			if (dieVal < 4) {
				resolve(dieVal)
			}
			else {
				reject(dieVal)
			}
		}, 1000);
	});
}


// dieRoll()
// 	.then(dieVal => {
// 		console.log(dieVal);
// 		retuen dieRoll();
// 	})

dieRoll()
	.then(dieVal => {
		console.log('you win!', dieVal)
	})
	.catch(dieVal => {
		console.log('you lose! FU!', dieVal);
	});


// const firstTimeout = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(); // FULFILL THIS PROMISE
// 	}, 1000);
// });


// firstTimeout
// 	.then(() => {
// 		console.log("LOOK MA IM DONE");
// 	});

















