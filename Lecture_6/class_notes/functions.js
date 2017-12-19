const fullName = (firstName, lastName) => {
	const myFullName = firstName + " " + lastName;
	return {
		'theFullName': myFullName,
		'firstNameCapitalized': firstName.toUpperCase(),	
	};
}

const cat = {
	'name': 'annabelle',
	'age': 10,
}
console.log('typeof cat is...')
console.log(typeof cat)

const sum = 5

const p1 = fullName("Taq", "Karim");
const p2 = fullName("Raq", "Karim");

console.log('p1 = ', p1)
console.log('p1.theFullName = ', p1.theFullName)



/*
	GOLDEN RULES ABOUT FUNCTIONS
	1. functions will never run unless they are called
	2. functions take in parameters which are set WHEN 
		the function is being called
	3. Variables created within a function are NOT accessible
		outside of the function call
	4. Functions can "output" ONE return value - this return
		value can be used to expose a variable taht was defined
		internally in the function's scope
*/






