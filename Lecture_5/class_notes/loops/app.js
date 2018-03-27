(function() { // protect the lemmings


	// loops are a block of code that
	// runs for N iterations

	let i = 0;
	while (i<10) {
		console.log('LOOK MA, IM LOOPIN', i);
		i = i + 1;
	}

	const fam = ['abe', 'bob', 'cam', 'dan', 'eve'];

	let j = 0;
	while (j < fam.length) {
		console.log(fam[j])
		j = j + 1;		
	}

	// const numbers = Array.from(Array(101).keys()).slice(1);
	const range = (start, end) => {
		return Array.from(Array(end+1).keys()).slice(start);
	}

	const numbers = range(2,100);
	// [2,3,4,5...,200]


	let sum = 0;
	let k = 0;
	while (k < numbers.length) {
		sum = sum + numbers[k] // 1
		k = k + 1;		
	}

	console.log(sum)

})();


(function() {
	const rangeFunc = (start, end) => {
		let out = [];
		while(start <= end){
			out.push(start);
			start++;
		}
		return out;
	}

	console.log(rangeFunc(1, 10))
})();


(function() {
	const rangeFunc = (start, end) => {
		let out = [];
		for(let i = start; i <= end; i++) {
			out.push(i);
		}
		return out;
	}

	console.log(rangeFunc(1, 10))

	const a = ['a', 'b', 'c', 'd', 'e'];
	const A = [];
	for(let i = 0; i < a.length; i++) {
		A.push(a[i].toUpperCase())
	}

	console.log(A)

})();