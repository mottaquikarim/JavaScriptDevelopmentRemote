// const findDiff = (num1, num2) => {
//     console.log(num1, num2);
//     const difference = num1 - num2;
//     return difference;
// }
// const val = findDiff();
// console.log(val);

const otherDiff = (num1 = 0, num2 = 0) => { // PARAM DEFAULTS!

    console.log(num1, num2);
    const difference = num1 - num2;
    return difference;
}

//const val2 = otherDiff;   // This gives me the entire function assigned to the otherDiff variable.

const val2 = otherDiff();

console.log(`this is val2: ${val2}`);
