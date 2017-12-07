/*
	let's build an RPS game
*/

const rpsChoices = {
	'PAPER': 0,
	'ROCK': 1,
	'SCISSORS': 2
};

const p1 = 1;
const p2 = 0;

let winner = 'tie';

const p1r_p2p = (p1 === rpsChoices.ROCK && p2 === rpsChoices.PAPER);
const p1p_p2s = (p1 === rpsChoices.PAPER && p2 === rpsChoices.SCISSORS);
const p1s_p2r = (p1 === rpsChoices.SCISSORS && p2 === rpsChoices.ROCK);
const p1r_p2s = (p1 === rpsChoices.ROCK && p2 === rpsChoices.SCISSORS);
const p1p_p2r = (p1 === rpsChoices.PAPER && p2 === rpsChoices.ROCK);
const p1s_p2p = (p1 === rpsChoices.SCISSORS && p2 === rpsChoices.PAPER);

if (p1r_p2p || p1p_p2s || p1s_p2r) {
	winner = 'p2';
}
else if (p1r_p2s || p1p_p2r || p1s_p2p) {
	winner = 'p1';
}


console.log(winner);

/*
	#STRETCHGOAL: can you update the code so that p1 and p2 have values that are randomly generated?
	#STRETCHGOAL: can you do stretchgoal1 but with ROCK, PAPER, SCISSORS as strings...?
*/