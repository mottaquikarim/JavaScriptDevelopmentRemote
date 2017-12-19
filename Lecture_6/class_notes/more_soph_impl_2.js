const validatePlayerChoice = (player) => {
	if (player !== "rock" && player !== "paper" && player !== "scissor") {
		throw new Error("INVALID INPUT: player " + player)
	}	
}

const rps = (p1, p2) => {
	// basic function definition
	let winner = "Arya Stark";

	validatePlayerChoice(p1);
	validatePlayerChoice(p2);

	console.log(p1, p2)


	return winner;
}

const validatePlayerChoice2 = (player, playerName) => {
	if (player !== "rock" && player !== "paper" && player !== "scissor") {
		return "INVALID INPUT player" + playerName + ": " + player
	}	
}

const rps2 = (p1, p2) => {
	// basic function definition
	let winner = "Arya Stark";

	const isP1Invalid = validatePlayerChoice2(p1, "1");
	const isP2Invalid = validatePlayerChoice2(p2, "2");

	if (isP1Invalid || isP2Invalid) {
		return isP1Invalid + " and " + isP2Invalid;
	}
	
	console.log(p1, p2)


	return winner;	
}

const theWinnerIs = rps2('paper', 'scissor');
console.log(theWinnerIs);






