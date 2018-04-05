// let i = 1;
// while (i < 4) {
//     /*... some code ...*/
//     console.log('i is', i)
//     i++;
// }
// console.log('-----------------')
// const test = (N=1) => {
//     console.log('N is', N)
//     // base case
//     if (N === 1) return 1;
//     test(N-1);
// }

// test(3)
// console.log('-----------------')
// const nums = [1,2,3,4,5]

// for (i = 0; i < nums.length; i++) {
//     console.log(nums[i])
// }

// console.log('-----------------')

// const recursiveFor = (arr) => {
//     if (arr.length === 0) return;
    
//     console.log(arr[0]);
//     recursiveFor(arr.slice(1))
    
// }

/*
    f([1,2,3,4,5])
    console.log(arr[0]) -> 1
    f([2,3,4,5])
    console.log(arr[0]) -> 2
    f([3,4,5])
    console.log(arr[0]) -> 3
    f([4,5])
    console.log(arr[0]) -> 4
    f([5])
    console.log(arr[0]) -> 5
    f([])
    arr.length === 0 -> return
*/

// recursiveFor(nums)

/*
    1,1,2,3,5,8,13,21,35...
*/

// let's write a function that gets us the Nth value of the fibonacci sequence
// fib(1) - 1
// fib(2) - 1
// fib(3) - 2
// fib(4) - 3

const fib = N => {
    if (N === 1 || N === 2) return 1
    let a = 1;
    let b = 1;
    let curr = 0;
    for (let i = 2; i < N; i++) {
        console.log('a is', a) // 1
        console.log('b is', b) // 1
        curr = a + b;
        const tmp = b;
        b = curr;
        a = tmp;
        
        console.log('a is NOW', a) // 1
        console.log('b is NOW', b) // 2
    }
    return curr;
}

console.log(fib(3))

const recurseFib = N => {
    
    if (N == 1 || N == 2) return 1;
    
    return recurseFib(N-1) + recurseFib(N-2)
    
}

/*
    fib(5)
                     fib(4) + fib(3)
            fib(3) + fib(2) + fib(2) + fib(1)
   fib(2) + fib(1)
*/

console.log('recursive', recurseFib(5))











