const myObj = {
    height: 20,
    width: 10,
    arr: [1,2,3,4,5],
    bool: false,
    myFunc: () => {
        console.log("I am myObj's function" );
        return;
    }
};

// console.log(myObj.height);
// console.log(myObj['height'])
// console.log(myObj.arr);
console.log(myObj.myFunc()); // myFunc Method!