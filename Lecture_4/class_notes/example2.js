// string
// number
// boolean
// arrays
// object
// symbol

const myFunc = (params) => {
        console.log(params);
        return;
};


const logTwoThings = (param1, param2, param3) => { // These are parameters!!
    // console.log(param1);
    // console.log(param2);
    // console.log(param3);
    return [param1, param2, param3];  // optional if your function is not returning anything.
}

 // logTwoThings(1,2);
 console.log(logTwoThings(true,1, ['this', 'is','an','array'])); // We are passing in ARGUMENTS!!