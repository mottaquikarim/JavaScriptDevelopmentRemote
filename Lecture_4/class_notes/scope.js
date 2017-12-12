const myGlobalVar = 'Wherever you are, you\'ll find me';

const myFunc = () => {
    const sentence = myGlobalVar + ', cause I say so';
    return sentence;
}

const sentence = myFunc();    // Outer scope can't access inner vars,
                              // This var name (sentence )has not yet been taken yet
                              // out here in the wild (Global Scope).


// const myGlobalVar = 'I am available everywhere!';
//
// const myFunc = () => {
//     const myLocalVar = 'What about me?'; // myLocalVar is scoped to myFunc.
//     const innerFunc = () => {
//         console.log(myLocalVar);
//         console.log(myGlobalVar);
//         const innerFunc2 = () => {
//             console.log(myGlobalVar);
//             const innerFunc3 = () => {
//                 const innerMostVar = 'I am inside, hiding.';
//                 console.log(myGlobalVar);
//                 console.log(innerMostVar);
//             }
//             innerFunc3();
//         }
//         innerFunc2();
//     }
//     innerFunc();
//     return;
// }
//
// myFunc();