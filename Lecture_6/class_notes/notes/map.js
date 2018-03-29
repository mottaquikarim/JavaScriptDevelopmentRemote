// [1,2,3] -> [1,4,9]

const a = [1,2,3];
const b = [];

for (let i = 0; i < a.length; i++) {
	// access current item in a
	const curr = a[i];

	// multiply by itself
	const square = curr ** 2;

	// add it to b
	b.push(square)
}

console.log(b);

const our_map = (arr, cb) => {
	const mapped = [];
	for (let i = 0; i < arr.length; i++) {
		// access current item in a
		const curr = arr[i];

		// transform current value of array
		// into another value
		const currTFormed = cb(curr, i, arr);

		// add it to b
		mapped.push(currTFormed)
	}
	return mapped;
}

console.log('here')
console.log(our_map([11,22,33], (curr, i, arr) => {
	return curr ** 2;
}))

console.log(our_map(['abe', 'belle', 'caleb'], (curr, i, arr) => {
	return curr[0].toUpperCase() + curr.slice(1); // Abe
}))


const arrayToMap = [1,2,3];
const squares = arrayToMap.map((curr, i, originalArray) => {
	return curr ** 2;
});

console.log(squares);

















