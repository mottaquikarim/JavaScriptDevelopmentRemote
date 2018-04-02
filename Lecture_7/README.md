# Lecture 7: Loops part 3

### Taq Karim
Senior Software Engineer, Intersection

---
## Objectives
* Review how callbacks are written in JS
* Understand how the `reduce` method works
* Briefly dive into recursion

---
## Agenda
* Simple loops review
* Review Callbacks
* Practice Callbacks
* Reduce
* Practice Reduce
* Recursion

---
## Simple loops review

Let's begin by refreshing our memories of how normal, good old looping works.

**[Solve Problems 1-6 in this PSET](http://samantha.fewd.us/#fork/mottaquikarim/JSR-PSET_ArrayMethods)**


---
## Review Callbacks

Let's review callbacks, how they are written, and how they are used.

-

### Callbacks: how do they work?!

A callback is a function that is passed in as an argument to another function. 

The callback is **called** by the function we pass it into, **not** by us (the programmer)

-

The toughest part of callbacks are to realize that we are **defining** our callback params / return statement to the specs **required** by the function we are passing it in to.

-

Let's consider an example:

```
[1,2,3].forEach((current, index, origAr) => {
	// ...
});
```

In this example, **`forEach`** takes exactly **one** argument, the callback.

The callback function expects **three** parameters - why? Because the **`forEach`** function, when it **invokes** the callback we have defined, will pass it **three** parameters.

-

So how do we know what to pass in to the callback function as parameters?

-

We don't. We rely on the documentation of **`forEach`** to specify what params we can work with in the callback.

-

Essentially, what this means is in the implementation of the **`forEach`** function from above, there must be something like...

```
const forEach = (arr, cb) => {
	for (let i = 0; i < arr.length; i++) {
		cb(arr[i], i, arr); 
		/*
			^^^ this corresponds to our three params: 
			current, index, origAr		
		*/
	}
}
```

---

## Practice Callbacks

Let's begin by refreshing our memories of how normal, good old looping works.

**[Solve Problems 11-15 in this PSET](http://samantha.fewd.us/#fork/mottaquikarim/JSR-PSET_ArrayMethods)**

**HARD MODE** 

Solve these problems using map or filter, where applicable

---

## Reduce

Or, how I stopped worry and love the loop

-

Reduce is the mother of javascript array looping methods. It is a generalized function that lets you **transform** a javascript array into literally any other datatype.

-

Every array properly we have looked at today can be written in terms of reduce/

-

### How It works

Let's begin with some code. Suppose I intend to find the average of some numbers in an array. Let's solve this the known way first

-

```
const mean = arr => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum/arr.length;
}

mean([1,2,3,4,5]); // 3.6

```

Straight forward - add up all the numbers then divide by length. Now with reduce...

-

```
const mean = arr => {
  return arr.reduce((sum, curr) => {
		return sum + curr;
	}, 0) / arr.length;
}

mean([1,2,3,4,5]); // 3.6

```

So what's going on in here...?

-

* `reduce` takes two arguments, a callback and an **initial value**, in this case 0
* the initial value is set equal to what we call the **accumulator**
* at each iteration of the loop, we perform some logic and **must** return something (a datatype)
* this datatype is **set to be the new value** of the **accumulator**

In the case of our function above, the accumulator is the running sum and we update it's value at each iteration

-

The callback takes four params:

```
(accumulator, current, index, origArr) => {...}
```

We can pass in current value of **accumulator** and transform it how we see fit. 

**Remember the accumulator is only updated by the return statement**.

And that's it!

-

Here is the same implementation again, but more terse:

```
const mean = arr => arr.reduce((sum, curr) => sum + curr, 0) / arr.length;
mean([1,2,3,4,5]); // 3.6
```

* Initially, **sum** is 0. And **curr** is 1. We return **sum + curr**, or 1. 
* Now, **sum** is 1. And **curr** is 2. We return **sum + curr**, or 3.
* ...
* Once we have exhausted **arr**, we should be left with sum of all values, or 18.

-

Implement **`Array.reduce()`**. Something like this:
```
reduce([1,2,3,4,5], (sum, curr) => {
	return sum+curr;
}, 0);
```

So it takes three arguments:

1. The array to reduce
2. the callback function
3. the initial value

---

##  Practice Reduce

Remember these dudes? Solve them again, but each one must now be solved with **`reduce()`**

* **OPTION1**: **[Solve Problems 1-6 in this PSET](http://samantha.fewd.us/#fork/mottaquikarim/JSR-PSET_ArrayMethods)**

* **OPTION2**: Implement **map()** and **filter()** with **reduce()**. Then, **[Solve Problems 11-15 in this PSET](http://samantha.fewd.us/#fork/mottaquikarim/JSR-PSET_ArrayMethods)**

If you think we have a good handle on **reduce**, consider **OPTION2**. Else, consider **OPTION1**. We will go over both.


---

## Recursion

**Definition**: the repeated application of a recursive procedure or definition.

-

Anything that can be achieved iteratively can be achieved recursively. Let's look at an example of a recursive implementation of a simple loop...

-

Recursively loop
```
const recursiveFor = (arr) => {
	// all recursive functions need a **base case**
	// this tells the loop when to stop
	if (arr.length === 0) return; 
	
	// here is the "meat" of the function - let's do
	// whatever it is that we need to do
	console.log(arr[0]);
	
	// finally, go to the next iteration. Since we have a base case
	// we can rest assured that it will stop once array is exhausted
	recursiveFor(arr.slice(1));
}
```

-

Thinking recursively can be tough - best thing to do is to try and break down the problem to individual repeating components, then code those components and wrap around a base case.

-

**Usecases**

Usually, it may feel simpler/easier to simply apply iteration. And typically this is true.

However, recursion can be helpful for problems where iteration becomes complex. Moreover, there are some cases - like **tree** traversal problems, where recursive solutions are simpler and easier to grok. (We will not be covering trees in this course).

-

Let's solve a famous recursive problem together - fibonacci sequence

```
const recurseFib = n => {
	if (n === 0) return 0;
	if (n < 3) return 1;
	
	return recurseFib(n-1) + recurseFib(n-2);
}
```

How does this work? Let's do a deep dive.

-

For practice, let's solve a few recursive problems together.

**[Recursion PSET](http://samantha.fewd.us/#fork/mottaquikarim/JSR-PSET_Recursion)**
