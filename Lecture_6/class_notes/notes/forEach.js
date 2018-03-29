const a = [1, 2, 3, 4, 5];
for (let i = 1; i < a.length; i+=2) {
  console.log(a[i]);
}
//what should we see?

// const sum = (a, b) => {
// 	return a + b;
// }

// sum(1,2) // number
// sum('1', '2') // string
// console.log(sum(true, false)) // boolean
// console.log(sum([], [])) // array

// a.forEach()

// const invokeLater = (c, timeout=500) => {
// 	console.log('in here tho', timeout)
// 	setTimeout(() => {
// 		console.log(c());
// 	}, timeout)
// };

// const someRandomFunc = () => {
// 	return 1;
// }

// invokeLater(someRandomFunc) // c is... function
// invokeLater(someRandomFunc, 1500)

const b = ['a', 'b', 'c'];
for (let i = 0; i < b.length; i+=1) {
  console.log(b[i]);
}

const forEach = (arr, onEachIteration) => {
	for (let i = 0; i < arr.length; i++) {
		onEachIteration(arr[i], i, arr)
	}
}

forEach(['a', 'b', 'c'], (currentItem, index, originalArray) => {
	console.log('currentItem ', currentItem)
	console.log('index', index)
	console.log('og array', originalArray)
	if (currentItem.indexOf('a') > -1) {
		console.log(currentItem)
	}
	else {
		console.log('NO As found here fam...')
	}
});

['a', 'b', 'c'].forEach((current, index, originalArray) => {
	if (current.indexOf('a') > -1) {
		console.log('a')
	}
	else {
		console.log('NO As found here fam...')
	}
});

forEach(['a', 'b', 'c'], (current) => {
	console.log('in forEach', current)
});


forEach([1,2,3], (current) => {
	console.log('here are some numbers', current)
});














