const testScores = {
    'studentA': 92,
    'studentB': 64,
    'studentC': 85,
}

// apply a curve to each grades
const curvedScores = Object.keys(testScores)
    .reduce((newGrades, studentName) => {
        const grade = testScores[studentName];
        newGrades[studentName] = Math.floor(10 * grade ** 0.5)
        return newGrades;
    }, {});
    
console.log(curvedScores)
// ^^ returns: { 'studentA': 95, 'studentB': 80, 'studentC': 92,

let obj1 = { a: 0 , b: { c: 0}};
let obj2 = Object.assign({}, obj1);
console.log(obj2); // { a: 0, b: { c: 0}}

const a = {a: 1}
const b = {b: 2}
const c = {c: 3}

const d = Object.assign({}, a, b, c)
console.log(d)

const updateSuperHero = (superHero, keyName, keyValue) => {
    // const o = {}
    // o[keyName] = keyValue;
    // return Object.assign({}, superHero,  o)
    return Object.assign({}, superHero,  {
        [keyName]: keyValue,
    });
}
