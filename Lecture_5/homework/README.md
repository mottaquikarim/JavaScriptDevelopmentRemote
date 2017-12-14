# Homework #1

## DUE: Weds Dec 20th, Midnight

## Assignment: Functions Basic PSET

Please solve all the functions described here:

**[LINK](http://samantha.fewd.us/#broadcast/mottaquikarim/FEWD629_functions_pset_1)**

**^^NOTE:** To "fork" this pset, please swap the word `broadcast` in the URL with the word `fork` and refresh. It should make a workspace scoped to your github profile.

In case you wanted to attempt this via nodeJS or some other way, here are the problems pasted below.

```js
/*
    @func addTwoNumbers
    @param {number} a
    @param {number} b
    @returns {number}
    @desc - adds two numbers and returns the result
    
    @example addTwoNumbers(1,2) // 3
    @example addTwoNumbers(1) // 1
*/


/*
    @func turnNumberToString
    @param {number} a
    @returns {string}
    @desc - turns a number into string
    
    @example turnNumberToString(1); // "1"
    @example turnNumberToString("2"); // "2"
*/

/*
    @func fullName
    @param {string} firstName
    @param {string} lastName
    @returns {string}
    @desc - concatenates first and last name
    
    @example fullName('Taq', 'Karim'); // "Taq Karim"
    @example fullName('Foo'); // "Foo"
*/

/*
    @func fullNameSentence
    @param {string} firstName
    @param {string} lastName
    @param {string} restOfSentence
    @desc - takes firstName, lastName and concatenates with
            restOfSentence
            USE THE `fullName` function to compute the firstName +
            lastName portion
            
    @example 
        // expect: "John Smith is awesome"
        fullNameSentence('John', 'Smith', 'is awesome');
*/

/*
    @func fullNameSentenceWithChecks
    @param {string} firstName
    @param {string} lastName
    @param {string} restOfSentence
    @desc - takes firstName, lastName and concatenates with
            restOfSentence
            USE THE `fullName` function to compute the firstName +
            lastName portion
            IF `lastName` or `restOfSentence` are not defined
            return 'Required variables are not set!'
            
    @example 
        // expect: "John Smith is awesome"
        fullNameSentence('John', 'Smith', 'is awesome');
    @example
        // expect: 'Required variables are not set!'
        fullNameSentenceWithChecks('John', 'Smith');
*/

/*
    @func fToC
    @param {number} f
    @returns {number}
    @desc - converts farenheit to celsius
    
    @example fToC( 32 ); // 0 
    @example fToC( 212 ); // 100
    @example fToC(); // 0
    
*/

/*
    @func fToKelvin
    @param {number} f
    @returns {number}
    @desc - converts farenheit to kelvin
            conversion factor is this:
            k = c + 273.15
            USE THE `fToC` function you wrote to calculate
            the `c`, then plug that in to the equation above
            to calculate k
            
    @example fToC( 32 ); // 273.15
    @exmple fToC( 212 ); // 373.15
    @example fToC(); // 273.15
*/

/*
    @func fToKelvinWithChecks
    @param {number} f
    @returns {number}
    @desc - converts farenheit to kelvin
            conversion factor is this:
            k = c + 273.15
            USE THE `fToC` function you wrote to calculate
            the `c`, then plug that in to the equation above
            to calculate k
            IF `f` is not passed in, return "ERROR: variable 'f' is not set"
            
    @example fToC( 32 ); // 273.15
    @exmple fToC( 212 ); // 373.15
    @example fToC(); // "ERROR: variable 'f' is not set"
*/



```
