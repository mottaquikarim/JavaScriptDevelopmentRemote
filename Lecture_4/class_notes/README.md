# Class notes

[Samantha](http://samantha.fewd.us/#broadcast/mottaquikarim/JSR0312-datatypes-review)


const turnOnTheHeat = () => {
    // any valid js code will work here
    
    console.log('hello from turnOnTheHeat');
    
    return 1;    
};

// turnOnTheHeat();
// turnOnTheHeat();
// turnOnTheHeat();
// turnOnTheHeat();

const simpleAvg = (a, b, c = 0) => {
    console.log('a', a, typeof a)
    console.log('b', b, typeof b)
    console.log('c', c, typeof c)
    
    return (a+b+c)/3;
}

simpleAvg(2,3)
// console.log(simpleAvg(11,22,33))

// // console.log(simpleAvg('3',4,5))
// console.log(simpleAvg())

const required = () => {
    throw new Error('This variable must be set')
}

const fullName = (firstName, lastName = required(), middleName = '') => {
    return `${firstName} ${middleName} ${lastName}`;
}

console.log(fullName('Marshall', "M"))

const $a = 5;
console.log($a)


// -------------------------

const turnOnTheHeat = () => {
    // any valid js code will work here
    
    console.log('hello from turnOnTheHeat');
    
    return 1;    
};

// turnOnTheHeat();
// turnOnTheHeat();
// turnOnTheHeat();
// turnOnTheHeat();

const simpleAvg = (a, b, c = 0) => {
    console.log('a', a, typeof a)
    console.log('b', b, typeof b)
    console.log('c', c, typeof c)
    
    return (a+b+c)/3;
}

simpleAvg(2,3)
// console.log(simpleAvg(11,22,33))

// // console.log(simpleAvg('3',4,5))
// console.log(simpleAvg())

const required = () => {
    throw new Error('This variable must be set')
}

const fullName = (firstName, lastName = required(), middleName = '') => {
    return `${firstName} ${middleName} ${lastName}`;
}

console.log(fullName('Marshall'))
<!-- console.log(fullName('Marshall')) -->

// ---------------------------------------------

// turnOnTheHeat(); // LOL don't try this at home, folks

// function expression
const turnOnTheHeat = () => {
    // any valid js code will work here
    
    console.log('hello from turnOnTheHeat');
    
    return 1;    
};

const heat = turnOnTheHeat;
console.log('--------- invoking heat --------------')
heat();
console.log(turnOnTheHeat)
console.log('--------- stop invoking heat --------------')
// console.log(heat);



// ---------------------------------------------

turnOnTheLight();

// function declaration pattern
function turnOnTheLight() {
    // any valid js code will work here
    
    console.log('hello from turnOnTheLight');
    
    return 1;
}

turnOnTheLight.toString = () => {
    return `hi from 
    
    
    
turnOnTheLight`
}

turnOnTheLight();

console.log(turnOnTheLight)

// add(1)(2)(3); // 6

/*
// ** for javascript's eyes only

// function declaration pattern
// pass 1
function turnOnTheLight() {
    // any valid js code will work here
    
    console.log('hello from turnOnTheLight')
    
    return 1;
}


// pass 2
turnOnTheLight();


turnOnTheLight();
// ** end for javascripts eyes only

*/




// ---------------------------------------------

// TWO ways to declare a variable in javascript

const a = 1;
let b = 2;

// const is a CONSTANT, it can be set only once and thats it
// let is malleable

let c; //  this is undefined
let d = 2;


console.log(typeof c);
console.log(typeof d);

// typeof is an operator which will reveal the datatyoe that is
// assigned to a variable

const c_type = typeof c;
console.log(c_type);
console.log(typeof typeof c);
console.log(typeof c_type);

const myNameIs = 'Slim Shady';
const myNameIs2 = "Slim Shady";
const myNameIs3 = `Slim

Shady`; //  we are allowed multilined strings with `` 

const isItWinter = true; // boolean
const empty = null; // this is DEFINED by empty, lol

const supported_browsers = ['IE Edge', 'Google Chrome', 'Mozilla Firefox']
console.log(typeof supported_browsers)
