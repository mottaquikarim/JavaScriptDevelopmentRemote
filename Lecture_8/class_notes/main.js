/* 13
    @function Array.some()
    @description:
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

    Intended to be: hard

    CHALLENGE:
        1. implement with just for loops
        2. implement again, but with reduce function
        3. consider optimizations that will exit as soon as match criteria is found

*/



const filter = (arr, cb) => {
    const filts = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            filts.push(arr[i])
        }
    }
    
    return filts;
}


const some_with_loops = (arr, cb) => {
    /*
       TASK: please update the for loop below to USE our `filter`
       function to achieve the same effect that we see below
    */
    
    for(let i = 0; i < arr.length; i++) {
        const test = cb(arr[i]);

        if (test) {
            return true;
        }
    }
    
    
    return false;
    
    // USE the filter() function to determine if SOME of the array items
    // are actually passing the test
    return filter(arr, cb).length > 0;
}

const some = (arr, cb) => filter(arr, cb).length > 0;

console.log(some([1,2,3,4,5], (element) => {
    return element % 2 === 0;
})); // expect to get true

console.log(some([1,3,5], (element) => {
    return element % 2 === 0;
})); // expect to get true



console.log(filter([1,2,3,4,5], (element) => {
    return element % 2 === 0;
})); // expect to get true












