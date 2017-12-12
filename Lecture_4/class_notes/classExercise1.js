// 1. Write a function that takes in 2 parameters.
// 2. The parameters should be of number type.
// 3. Return the difference between the values
// 4. Console log the returned value.


// const myFunc = (num1, num2) => {
//     return num1 - num2;
// }
const findDiff = (num1, num2) => {
    const difference = num1 - num2;  // declared difference once here!
    return difference;
}
const difference = myFunc(2,1);  // WTF?! second time!!

// SCOPE!!! they are within a different scope.

console.log(difference);


