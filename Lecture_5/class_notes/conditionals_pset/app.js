(function() { // protect them lemmings
    /*
        @func isUndefined
        @param varToTest
        @returns {boolean}
        @desc - checks to see if a variable is undefined
                if it IS undefined, return true
                else return false
                
        @example
            let foo;
            isUndefined( foo ); // true
            
        @example isUndefined( 1 ); // false
    */
    const isUndefined = (varToTest) => {
        console.log('IN function `isUndefined`');
        console.log('`varToTest` is...', varToTest)

        if (typeof varToTest === "undefined") {
            return true;
        }
        else {
            return false;
        }
    };

    // HOW TO TEST that a function works as expected
    //  - assert that function body is invoked (this we do with console.log)
    //  - assert that function returns correct data type (this we do with return)
    //  - assert that function params are correctly set (this we do with console
    //              logging the params within body)

    const output = isUndefined(1);
    console.log(output); // false


    let undefinedVar;
    console.log(isUndefined(undefinedVar)); // true
})(); // IIFE: Immediately Invoked Function Expression


(function() { // mourn the white rhinos, RIP :(

    /*
        @func isUndefined
        @param varToTest
        @returns {boolean}
        @desc - checks to see if a variable is undefined
                if it IS undefined, return true
                else return false
                
        @example
            let foo;
            isUndefined( foo ); // true
            
        @example isUndefined( 1 ); // false
    */
    const isUndefined = varToTest => typeof varToTest === "undefined";
    /*
    const isUndefined = (varToTest) => {
        return typeof varToTest === "undefined";
    }
    */

    // HOW TO TEST that a function works as expected
    //  - assert that function body is invoked (this we do with console.log)
    //  - assert that function returns correct data type (this we do with return)
    //  - assert that function params are correctly set (this we do with console
    //              logging the params within body)

    const output = isUndefined(1);
    console.log(output); // false


    let undefinedVar;
    console.log(isUndefined(undefinedVar)); // true

})();


