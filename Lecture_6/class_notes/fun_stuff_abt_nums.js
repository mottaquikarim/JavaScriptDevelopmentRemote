const generateRandomNum = (s,e) => Math.floor(Math.random()*(e-s+1))+s;

// tests to help us ascertain what
// gernerateRandomNum does...

let i = 0; // initial conditions
while (i < 10) { // iteration condition
    console.log(generateRandomNum(1, 10));
    i = i + 1; // continuation condition
}


for (let i = 0; i < 10; i++) {
    console.log(generateRandomNum(1, 10));
}

Array.from(Array(10).keys()).forEach(i => {
    console.log(generateRandomNum(1, 10))
});