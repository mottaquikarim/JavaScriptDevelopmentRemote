// BASIC

// prints how old I am

// 10 PRINT 'I AM'
// 20 GOSUB 50
// 30 PRINT ' years old.'
// 40 END
// 50 A = 13
// 60 PRINT A
// 70 RETURN

// ES5 syntax

// function doubleAge(age){
//     // insert statements here
//     console.log(age * 2);  // CONSOLE LOG DOES NOT RETURN ANYTHING!!!!
//     console.log(age * 3);  // I am not returned.
//     console.log(age * 4);  // I am also not returned!!;
//
//     return age * 2;  //returned value. end of the function.
// }
// const doubledAge = doubleAge(10);


const anotherOne = (petName) => {
    const fullName = petName + ' Smith';
    return fullName;
}

const petName = anotherOne('Harry');

console.log(petName);