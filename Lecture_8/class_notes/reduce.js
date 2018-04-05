const nums = [1,2,3,4,5,6,7,8,9,10];

// PROBLEM: I would like to find the sum of all the elements
// in this array

let n = 0;
for (let i = 0; i < nums.length; i++) {
    n += nums[i];
}
console.log(n);

nums.reduce((n, element) => {
    console.log('n is...', n, 'element is...', element)
    const updatedN = n + element
    return updatedN;
},0);

// let m = 0;
// for(let i = nums.length - 1; i > -1; i--) {
//     m += nums[i]
// }
// console.log(m)

const sumArray = arr => {
    let n = 0;
    for (let i = 0; i < nums.length; i++) {
        n += nums[i];
    }
    
    return n;
}
console.log(sumArray(nums))

const reduceToSum = arr => {
    return arr.reduce((n, element) => {
        return n + element;
    }, 0)
}
console.log(reduceToSum(nums))

const reduceToSum_oneliner = arr => arr.reduce((n, element) => n+element, 0)
console.log(reduceToSum_oneliner(nums))

const characters = ['r','a','c','e','c','a','r']
const word = characters.join("");
console.log(word)

characters.reduce((word, element) => {
    // console.log("word is: ", word, "element is: ", element)
    return word+element
}, "")


const join = (arr, delimiter="") => {
    return arr.reduce((word, element, index, ogArr) => {
        // if (index === arr.length-1) {
        //     return word+element
        // }
        return word+element+delimiter
    }, "").slice(0,-1*delimiter.length)
}

console.log(join(characters, "- -"))

const filter = (arr, cb) => {
    const filts = []
    for (let i = 0; i < arr.length; i++) {
        if(cb(arr[i])) {
            filts.push(arr[i])
        }
    }
    return filts
}

console.log(filter([1,2,3,4,5], (element) => {
    return element % 2 === 0
}))


console.log([1,2,3,4,5].reduce((filts, element) => {
    
    if (element%2 === 0) {
        filts.push(element)
    }
    
    return filts;
    
}, []))















