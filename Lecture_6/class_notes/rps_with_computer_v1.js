const generateRandomNum = (s,e) => Math.floor(Math.random()*(e-s+1))+s;
const validatePlayerChoice = player => {
    player = player.toLowerCase().substring(0,1);
    if (player !== "r" && player !== "p" && player !== "s") {
        throw new Error("INVALID INPUT: player " + player)
    }
    return player;
}
const rps = (p1) => {
    p1 = validatePlayerChoice(p1);

    const randomNum = generateRandomNum(0,2);
    let p2;
    if (randomNum === 0) {
        p2 = 'r'
    }
    else if (randomNum === 1) {
        p2 = 'p'
    }
    else {
        p2 = 's'
    }


    if (p1 === p2 ) {
        return 'tie';
    }

    const p1p2 = p1+p2;
    if (p1p2 === 'rp' || p1p2 === 'ps' || p1p2 === 'sr') {
        return 'p2'
    }
    else {
        return 'p1'
    }
}

for (let i = 0; i < 10; i++) {
    console.log(rps('rock'))
}













