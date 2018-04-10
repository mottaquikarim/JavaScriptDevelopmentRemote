// empty object literal
const myObj = {};
const myArr = [];

// console.log(myArr, myObj)

// object with prefilled values
const myArr2 = [1,2,3];
const myObj2 = {
    "property1": "value1",  // notice the colon!
    "property2": 2, // notice the comma!
    "some-non-standard-val": 4,
    foo: 6,
}
// console.log(myArr2, myObj2)

// updating an object after the fact
myObj2["property3"] = true;
myArr2.push(4);

//  what do you expect to see?
console.log(typeof myObj2); 

 // what do you expect to see?
console.log(typeof myObj2["property1"]);

// how about now?
console.log(typeof myObj2["thisPropertyDoesntExistTho"]);

const keyName = "property1"

console.log(myObj2["property1"])
console.log(myObj2.property1)

console.log(myObj2[keyName]) // value
console.log(myObj2.keyName)

console.log(myObj2["some-non-standard-val"])

const key = "foo-testing-dynamic-property";
const o = {
    [key]: 5,
}
console.log(o);

const sum = (a,b) => a + b;
o.sum2 = (a,b) => a + b; // this is a METHOD of object o

console.log(sum(1,2)) // invokes the sum function
console.log(o.sum2(1,2)) // invokes the sum2 METHOD of object o













