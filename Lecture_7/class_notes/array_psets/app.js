 /* 
  1
    @function Array.pop()
    @description:
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

    Intended to be: easy
    CHALLENGE: do not use slice/splice/etc, just loops
*/

// PLAN:
//  1. grab and return last element
//  2. try to modify the array itself

const pop = arr => {
    const lastEl = arr[arr.length-1];
    const newAr = []
    for(let i = 0; i < arr.length-1; i++) {
        newAr.push(arr[i])
    }
    console.log(newAr)
    return lastEl;
}

// const a = [1,2,3];
// console.log(a);
// console.log(pop(a));
// console.log(a);


/*  2
    @function Array.push()
    @description:
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    
    Intended to be: easy
    CHALLENGE: do not use slice/splice/etc, just loops

    [1,2,3].push(4)
*/
// [1,2,3] -> arr
// [4,5] -> val

// arr.length -> 3
// val.length -> 2
// 5


// const push2 = (arr, val) => {
//     let j = 0;
//     const originalLength = arr.length;

//     for (let i = originalLength; i < originalLength+val.length; i++) {
//         arr[i] = val[j];
//         j++;
//     }
// }

/******
    arr = [1,2,3]
    val = [5]

    i   j   arr     arr.length
    3   0   [1,2,3,5]     3
    4   1   [1,2,3,5]     4


********/

// the ... is called the rest operator
const push = (arr, ...vals) => {
    for (let i = 0; i < vals.length; i++) {
        arr[arr.length] = vals[i]
    }
}

// const b = [1,2,3]
// console.log('b originally is', b)
// console.log('pushing...')
// push(b, 5, 6, 7, 8, 9, 10)
// console.log('new b is...', b)

/*  3
    @function Array.shift()
    @description:
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

    Intended to be: easy
    CHALLENGE: do not use slice/splice/etc, just loops
*/
const shift = arr => {
    const firstItem = arr[0];

    for (let i = 1; i < arr.length; i++) {
        arr[i-1] = arr[i]
        // kind of like... const a = 1
    }

    arr.length = arr.length - 1;

    return firstItem;
}

const b = ['a','b', 'c']
shift(b)
console.log(b)

/*  4
    @function Array.unshift()
    @description:
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

    Intended to be: easy
    CHALLENGE: do not use slice/splice/etc, just loops
*/

/*  5
    @function Array.join()
    @description:
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

    Intended to be: easy
*/

const join = (arr, delimiter = ",") => {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i < arr.length - 1) {
            str += delimiter;
        }
    }

    return str;
}

const elements = ['Fire', 'Wind', 'Rain'];
console.log(join(elements));
// Fire-Wind-Rain



/*  6
    @function Array.indexOf()
    @description:
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

    Intended to be: easy
*/

const forEach = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr); 
        /*
            ^^^ this corresponds to our three params: 
            current, index, origAr        
        */
    }
}

forEach([1,2,3], (index) => {
    // ...
});


/*  11
    @function Array.every()
    @description:
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

    Intended to be: hard

    CHALLENGE:
        1. implement with just for loops
        2. implement again, but with reduce function
        3. implement again, but with filter
*/

const every = (arr, cb) => {
    for(let i = 0; i < arr.length; i++) {
        if (!cb(arr[i])) {
            return false;
        }
    }

    return true;
}

const isBelowThreshold = (currentValue) => {
    return currentValue < 40;
}

const array1 = [1, 30, 39, 29, 10, 13];

console.log(every(array1, isBelowThreshold));

const every












