const rps = (p1, p2) => {
	// basic function definition
	let winner = "Arya Stark";

	// I assume inputs are valid
	let isP1Valid = true
	let isP2Valid = true


	if (p1 !== "rock" && p1 !== "paper" && p1 !== "scissor") {
		isP1Valid = false
	}

	if (p2 !== "rock" && p2 !== "paper" && p2 !== "scissor") {
		isP2Valid = false
	}

	if (isP1Valid === false || isP2Valid === false) {
		return "INVALID INPUTS p1: " + isP1Valid + " p2:" + isP2Valid; 
	}

	console.log(p1, p2)

	return winner;
}

const theWinnerIs = rps('=', 'scissor');
console.log(theWinnerIs);