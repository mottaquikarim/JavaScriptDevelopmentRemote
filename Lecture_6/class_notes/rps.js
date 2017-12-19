// "ROCK", "RoCk", "rOcK", "rock" => "rock"
// "rock"

const validatePlayerChoice = (player) => {
	// remove bias for case insensitivity
	player = player.toLowerCase();

	// remove bias for misspelled choices
	player = player.substring(0,1);

	if (player !== "r" && player !== "p" && player !== "s") {
		throw new Error("INVALID INPUT: player " + player)
	}

	// if we are here, then player is VALID and it is either
	// "r", "p", "s"

	return player;
}

const rps = (p1, p2) => {
	// basic function definition
	let winner = "Arya Stark";

	p1 = validatePlayerChoice(p1);
	p2 = validatePlayerChoice(p2);


	if (p1 === p2 ) {
		winner = 'tie';
	}
	else if (p1 === 'r' && p2 === 'p') {
		winner = 'p2';
	}
	else if (p1 === 'r' && p2 === 's') {
		winner = 'p1';
	}
	else if (p1 === 'p' && p2 === 'r') {
		winner = 'p1';
	}
	else if (p1 === 'p' && p2 === 's') {
		winner = 'p2';
	}
	else if (p1 === 's' && p2 === 'r') {
		winner = 'p2';
	}
	else if (p1 === 's' && p2 === 'p') {
		winner = 'p1';
	}


	return winner;
}

console.log(rps('r', 'r')) // tie
console.log(rps('r', 'p')) // p2
console.log(rps('r', 's')) // p1
console.log(rps('p', 'r')) // p1
console.log(rps('p', 'p')) // tie
console.log(rps('p', 's')) // p2
console.log(rps('s', 'r')) // p2
console.log(rps('s', 'p')) // p1
console.log(rps('s', 's')) // tie



// rps('rock', 'scissor');
// rps('rOck', 'scissor');
// rps('r0ck', 'scissor');
// rps('rocCCck', 'scissor');
// rps('ROCK', 'scissor');
// rps('R', 'scissor');
// console.log(theWinnerIs);



