/*
	[
		'north america', 
		'south america', 
		'europe', 
		'asia', 
		'africa', 
		'australia', 
		'antartica'
	]
	=>
	[
		'asia', 
		'africa', 
		'australia', 
		'antartica'
	]

*/

const continents = [
	'north america', 
	'south america', 
	'europe', 
	'asia', 
	'Africa', 
	'australia', 
	'antartica',
];
const filtered_continents = [];
for (let i = 0; i < continents.length; i++) {
	const curr = continents[i];
	if (curr[0].toLowerCase() === 'a') {
		filtered_continents.push(curr)
	}
}
console.log(filtered_continents)

const our_filter = (arr, cb) => {
	const filtered = [];
	for (let i = 0; i < arr.length; i++) {
		const curr = arr[i];
		if (cb(curr, i, arr)) {
			filtered.push(curr)
		}
	}
	return filtered;
}

console.log(our_filter(continents, curr => {
	return curr.length > 5;
}))

console.log(our_filter(continents, curr => {
	return curr.length > 7 && curr[0].toLowerCase() === 'a';
}))

console.log(continents.filter((curr, i, originalArray) => {
	return curr[0].toLowerCase() === 'a';
}));


const tformed = continents.filter(curr => {
	return curr[0].toLowerCase() === 'a';
}).map(curr => {
	return curr[0].toUpperCase() + curr.slice(1)
});

console.log(tformed);



