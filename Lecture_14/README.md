### Lecture 15
#  APIs 2.0
### Taq Karim

*Senior Software Engineer*, ** [Intersection](https://www.intersection.com/)**

---

## Objectives

* Understand how the **`Promise`**  object works
* Build dynamic apps that synthesize multiple API based data sources
---


## Agenda

1. Promises
2. Building a Gif powered weather app
3. Using the **[myjson api](http://myjson.com/api)**

---

## Promises

Promises are special javascript objects that allow us to handle asynchronous programming.

👇

-

### Asynch programming

Suppose you wanted to display to the user **1!**, **2!**, **3!**, but you wanted to have a timeout between each display. How could we achieve this?

-

One approach could be this:

```
console.log('1!');
setTimeout(() => {
	console.log('2!');
	setTimeout(() => {
		console.log('3!');
	}, 500);
}, 500);
```

Gross! 🤢🤢🤢

-

This is essentially the prime usecase for promises. Let's see how we could rewrite the code above with promises:

```
const displayNum = (num=1, timeout=0) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`${num}!`);
			resolve(num);
		}, timeout);
	})
}

displayNum()
	.then((num) => {
		return displayNum(num+1, 500);
	})
	.then((num) => {
		return displayNum(num+1, 500);
	});
```

👇

-

Ok, let's recap - what just happened??

Think of a promise as a function that issues a **delayed** return. You can choose how much to delay this return which is particularly useful when performing AJAX operations. 


-


We don't know how long it will take for an API request to come back, so we can use a Promise to basically say that **when** the response comes back, **then** we will go on to the next step of our program. 

Now, let's dive into the mechanics of how Promises work

-

```
const myPromise = new Promise((resolve, reject) => {
	// do something asycnh here
	// ...
	// if it completes successfully, call:
	resolve(5)
})
```

* The **resolve** function tells the Promise object that the asynch operation is complete. 
* We can pass along **one** argument to the **resolve** function which is essentially whatever we would like to **return** from this asynch operation.

-

Here's how we can handle a successful promise
```
const myPromise = new Promise((resolve, reject) => {
    // do something asycnh here
    // ...
    // if it completes successfully, call:
    resolve(5)
});

myPromise.then((number) => {
	console.log(number);
});
```

In this case `number` will be `5` since that's what we **resolved** our promise with

-

Also, we can continue the **Promise** chain by doing the following:

```
const myPromise = new Promise((resolve, reject) => {
    // do something asycnh here
    // ...
    // if it completes successfully, call:
    resolve(5)
});

myPromise
	.then((number) => {
		console.log(number);
		return "hello!"
	})
	.then((str) => {
		console.log(str)
	});
```
👇👇👇

-

Essentially, a **`return`** statement in a **then** function will **always** return a new promise. This makes it very easy to chain multiple asynch actions together!

-


```
const myPromise = new Promise((resolve, reject) => {
	// do something asycnh here
	// ...
	// if it FAILS, call:
	reject(5)
})
```
* The **reject** function tells the Promise object that the asynch operation has failed (ie: network error, something went wrong on API side, etc)
* We can pass along an error message to the **reject** function informing code below that a failure occurred

-

Here's how we can handle a failed promise
```
const myPromise = new Promise((resolve, reject) => {
	// do something asycnh here
	// ...
	// if it FAILS, call:
	reject(5)
})

myPromise.catch(e => {
	console.log(e); // something failed!
});
```

-

If **any** promise in a chained promise fails, we skip over to the **`catch`** function. In general it is good practice to have a `catch` at the end of a promise chain.


👇👇👇

-

```
const rollDie = () => new Promise((resolve, reject) => {
	setTimeout(() => {
		const n = Math.floor(Math.random()*10)+1;
		if (n > 6) {
			reject('Greater than 6')
		}
		else resolve(n)
	}, 500);
});

rollDie()
	.then(dieRoll => console.log(dieRoll))
	.catch(e => console.log(e))
```

In this example, we try to roll an unfair die and if our roll is greater than expected we **catch** the error and log it, else we display the die value

-

Multiple, separate promises

* What if we wanted to roll **three** die and then based on the result evaluate them...?

👇👇👇

-

Let's define the die roll a bit more simply...
```
const rollDie = () => new Promise((resolve, reject) => {
	const timeout = Math.floor(Math.random()*1000)
	setTimeout(() => resolve(Math.floor(Math.random()*10)+1), timeout);
});
```
👇👇👇

-

Then, let's implement the rolls themselves

```
const r1 = rollDie();
const r2 = rollDie();
const r3 = rollDie();

Promise.all([r1, r2, r3]).then((values) => {
	console.log(values); // expect: [1,2,3]
})
```
Much simpler!

-

Now suppose we wanted to **ensure** roll1 happened **before** roll2, etc

```
const r1 = rollDie();
const r2 = r1.then(() => rollDie());
const r3 = r2.then(() => rollDie());

Promise.all([r1, r2, r3]).then((values) => {
	console.log(values); // expect: [1,2,3]
})
```
This will ensure r1 happens **first**, **then** r2, **then** r3. We can still collect all the output using **Promise.all**.

-

**Challenge**: This is the docs for **[XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)**.

Convert this into a **Promise**-_ified_ function, **ajaxPromise**

---


## Gif Weather App

You can start with this HTML **[boilerplate](https://github.com/FEWDMaterials/boilerplate-plain)**

👇👇👇

-

**Requirements**

* Use **[OpenWeatherMap](https://openweathermap.org/api)** API to query current weather conditions for your city / locality
* Use **[GiphyAPI](https://developers.giphy.com/)** to then query for a gif that describes current weather condition returned from OpenWeatherMap.
* Once both data points have been resolved, display gif and weather conditions on screen for user

---

## [myJSON API](http://myjson.com/api)

Using the **myJSON** API, implement persistence for the **[ShoppingUI](https://github.com/mottaquikarim/JavaScriptDevelopmentRemote/tree/master/Lecture_12/class_notes/shoppingListUI)**.

---

## Homework

**DUE:** Weds Feb 14th.

Begin work on your final projects!

