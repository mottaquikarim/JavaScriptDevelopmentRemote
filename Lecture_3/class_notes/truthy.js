if (true) {
	console.log('look ma! im in a conditional block')
}

if (1) {
	console.log('will this even run tho?')
}

// truthiness vs falsiness
// EVERYTHING IN JS IS truthy EXCEPT:
// ''
// null
// undefined
// NaN -> not-a-number
// 0

if (1) {
	// this code will run, 1 is not '', nulll, undefined, NaN, 0
}

if (0) {
	// will not run
}

if (null) {
	// will not run
}

if (undefined) {
	// will not run
}

if (NaN) {
	// will not run
}