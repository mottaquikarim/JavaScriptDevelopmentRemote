/*
	create a variable called `coinToss`
	this variable should be a NUMBER

	write a conditional statement that says:
	if coinToss is 0, then it's heads
	else it is tails

	#stretchGoals: if coinToss is an EVEN number, it is heads
	else tails

	#stretchGoals: if coinToss is an ODD number, it is heads
	else tails
*/

// to run mutliple times in command line:
// for i in {1..10}; do node current.js; done

const coinOutcomes = {
	'HEADS': 0,
	'TAILS': 1,
}

const coinToss = Math.floor(Math.random()*4) // 0, 1, 2, 3
console.log('coinToss is', coinToss)

if (coinToss === coinOutcomes.HEADS) {
	console.log('Heads!')
}
else if (coinToss === coinOutcomes.TAILS) {
	console.log('Tails!')
}
else {
	console.log('Invalid Cointoss')
}

const result = coinToss === coinOutcomes.HEADS ? 'Heads' : 'Tails';

const isEven = coinToss % 2 === 0 ? true : false;
console.log(isEven, coinToss)







