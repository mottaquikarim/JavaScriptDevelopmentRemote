# Lecture 5: Loops

### Taq Karim
Senior Software Engineer, Intersection

---
## Objectives
* Understand looping in javascript
* Review iteration using `for` and `forEach`, and introduce `while` and `do/while` loops
* Learn about and leverage the `map`, `filter`, and `reduce` functions

---
## Agenda
* Warmup / Review
* `while` & `do/while`
* Iteration
* `map`, `filter`, `reduce`

---
## Warmup / Review

First, let's review **[these](http://samantha.fewd.us/#fork/mottaquikarim/FEWD629_functions_pset_3)** problems as a class.

-

From **[this](http://samantha.fewd.us/#fork/mottaquikarim/JSR-PSET_conditionals)** PSET, please solve:
* **`compareInts`**
* **`signOfProduct`**
* **`signOfProduct2`**
* **`anyUpperCase`**
* **`isEmptyString`**
* **`validatePassword`**


---
## Loops

Let's review some ways to make loops in JavaScript. We'll use them to evaluate some block of code multiple times.

-
## While Loop
We can use the `while` statement to run a code block as long as the condition is `true`. The condition is evaluated **before** executing the block.

```
while (condition) {
    //statements
}
```

-

Outside of interviews, I've rarely use a `while` loop. They're useful for rare problems where you're not iterating over an array, or you don't know when to stop outside of the loop.

-

## Infinite and Never-run While Loops
Remember, the condition is evaluated **before** executing the block.
```
while (true) {
  // infinite loop
}

while (false) {
  // never-run loop
}
```

-

Create an array containing the numbers 1-10 inclusive
```
const num = 1;
const numArray = [];
while (num < 11) {
    numArray.push(num);
    num++;
}
console.log(numArray);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

-

Alertnative approach:
```js
const numArray = [];
while (numArray.length < 10) {
    numArray.push(numArray.length+1);
}
console.log(numArray);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```
^ what are the key differences between this example and the one above it?

-

ES6 approach:
```js
const numArray = Array.from(Array(11).keys()).slice(1)
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```
Note that this approach, while terse may be considered a bit more confusing. (NB: I'm personally very fond of this technique)


-

## Do-While Loop
The `do...while` runs a block of code until the condition is `false`. The condition is evaluated **after** executing the statement once.

```
const num = 10;
const numArray = [];
do {
    numArray.push(num);
    num -= 1;
} while (num > 0);
// [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
```

---
## For Loop
We've see a `for` loop already. Let's take one more look:
```
const a = [1, 2, 3, 4, 5];
for (const i = 0; i < a.length; i++) {
  console.log(a[i]);
}
//what should we see?
```

-

If we absolutely need to use a `for` loop to iterate over an array, it's helpful to cache the array's length:

```
const a = [1, 2, 3, 4, 5];
const len = a.length;
for (const i = 0; i < len; i++) {
  console.log(a[i]);
}
```

-

Alternatively, here is a more terse approach
```
const a = [1, 2, 3, 4, 5];
for (const i = 0, len = a.length; i < len; i++) {
  console.log(a[i]);
}
```

---
## forEach Loop
As mentioned in the last class, we prefer the `forEach` loop:
```
["dog", "cat", "turtle"].forEach(
    function(currentValue, index, array) {
        console.log("I want a ", currentValue);
        console.log(currentValue);
    }
);
```
Using the `array` and `index` parameter, how else could we have logged each value?

-

Here's another way to write the above (NB: I strongly prefer this approach

```
["dog", "cat", "turtle"].forEach(
    (currentValue, index, array) => {
        console.log("I want a ", currentValue);
        console.log(currentValue);
    }
);
```

---
## `map`,  `filter`, `reduce`

-

**map()**

Allows us to transform one loop into another. For example, we may "map" `[1,2,3]` to `[1,4,9]`

-

**Example**

With a normal for loop

```js
const arr = [1,2,3];
const sqarr = [];
for (let i = 0; i < arr.length; i++) {
	sqarr.push(arr[i] ** 2);
}
console.log(sqarr)
```

-

**Example**

With `map`

```js
const sqarr = [1,2,3].map(curr => {
	return curr ** 2; // MUST return something
});
```

the callback in `map` gets three arguments:
* current value of array
* current index of array
* reference to the entire array

-

**CHALLENGE**

Implement the `map` function:

```js
/*
	@function map
	@param arr {array}
	@param callback {function}
	@returns {array}
	@example
		map([1,2,3], (curr, i) => {
			return curr ** 2;
		});
	
*/
```

-

**filter()**

Allows us to filter out items from array, for example we may filter out odd numbers from:

`[1,2,3,4,5]` to `[2,4]`

-

**Example**

With a normal for loop

```js
const arr = [1,2,3,4,5];
const evenarr = [];
for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 === 0) {
		evenarr.push(arr[i]);
	}
}
console.log(evenarr)
```

-

**Example**

With `filter`

```js
const evenarr = [1,2,3,4,5].filter(curr => {
	return curr % 2 === 0; // MUST return something
});
```

* if return value is `true`, adds to array
* else, omits


-

**CHALLENGE**

Implement the `filter` function:

```js
/*
	@function filter
	@param arr {array}
	@param callback {function}
	@returns {array}
	@example
		filter([1,2,3,4,5], (curr, i) => {
			return curr % 2 === 0;
		});
	
*/
```

-

**reduce()**

The king of all loop functions, reduce will transform an array into any other javascript datatype. For example we may reduce:

`[1,2,3,4,5]` to `15` 

^^ (the sum of 1+2+3+4+5)

-

**Example**

With a normal for loop

```js
const arr = [1,2,3,4,5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum += arr[i]
}
console.log(sum); // 15
```

-

**Example**

With `reduce`

```js
const sum = [1,2,3,4,5].reduce((accumulator, curr, i) => {
	return accumulator + curr;
}, 0);
```

* accumulator is the value we pass along to each iteration (in for loop example it was `sum`)
* whatever is returned from callback is the new value of accumulator

-

We are able to perform powerful transformations with reduce. For example, both map and filter can be implemented with the reduce function.

-

**CHALLENGE**

Implement `map` using the reduce function.

-

**CHALLENGE**

Implement `filter` using the reduce function

-

**CHALLENGE**

Implement the `reduce` function:

```js
/*
	@function reduce
	@param arr {array}
	@param callback {function}
	@param initialAcc {datatype}
	@returns {array}
	@example
		reduce([1,2,3,4,5], (acc, curr, i) => {
			return acc + curr;
		}, 0);
	
*/
```

---

## Practice

* **[Loops](http://samantha.fewd.us/#fork/mottaquikarim/FEWD_629_functions_pset_8)** - NB: there is a **second** tab with additional problems!
* **[Arrays](http://samantha.fewd.us/#fork/mottaquikarim/FEWD_629_functions_pset_10)**

---
## [Homework](https://github.com/mottaquikarim/JavaScriptDevelopmentRemote/tree/master/Homework_1)
