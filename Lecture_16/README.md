### Lecture 16
# Introduction to Promises
### Taq Karim

*Senior Software Engineer*, ** [Intersection](https://www.intersection.com/)**

---

## Objectives

* Understand how the Promise object works
* Build dynamic apps that synthesize multiple API based data sources

---


## Agenda

* Warm up 1
* Warm up 2
* Promises
* Exercise 1
* Exercise 2
* Exercise 3

---

## Warm up 1

(Assuming we did not cover this last lecture)

👇👇

-
### Gif Weather App

You can start with this HTML **[boilerplate](https://github.com/FEWDMaterials/boilerplate-plain)**

👇👇👇

-

**Requirements**

* Use **[OpenWeatherMap](https://openweathermap.org/api)** API to query current weather conditions for your city / locality
* Use **[GiphyAPI](https://developers.giphy.com/)** to then query for a gif that describes current weather condition returned from OpenWeatherMap.
* Once both data points have been resolved, display gif and weather conditions on screen for user



---

## Warm up 2

👇👇👇

-

We will need to clone a new **[boilerplate project](https://github.com/FEWDMaterials/boilerplate-plain)**.

👇👇👇

-

### Get Random Gif

Let's make a single call out to the Giphy API and return a random, **G** rated response.

-

### Requirements

API Endpoint to hit:

```html
GET https://api.giphy.com/v1/gifs/random
```

Use **jquery**'s **GET** method:
```js
$.get('https://api.giphy.com/v1/gifs/random', data => {
	console.log(data)
});
```

PS: Don't forget to add an `api_key` query parameter

-

### Requirements (cont'd)

Update the code above so that the returned GIF object is **rendered** as an image on the page.

-

### Requirements 2.0

Having implemented the random GIF retrieval, update the project so that it retrieves **TWO** GIFs in **sequence**.

-

In particular, it should:

* grab GIF 1
*  update the UI with a message saying "GIF retrieved"
*  then, retrieve GIF 2.

Once both GIFs have been retrieved, it should then and only then update the UI with both assets.

-

### Requirements 3.0

Now, repeat the implementation of the previous requirements, but this time with **5** random GIFs.

Successful completion of this task should demonstrate  - in context - **why** callbacks and asynchronous javascript tasks can be tough to work with.


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

## Exercise 1

(Giphy weather app...but with promises!)
👇

-
### Gif Weather App

You can start with this HTML **[boilerplate](https://github.com/FEWDMaterials/boilerplate-plain)**

👇👇👇

-

**Requirements**

* Use **[OpenWeatherMap](https://openweathermap.org/api)** API to query current weather conditions for your city / locality
* Use **[GiphyAPI](https://developers.giphy.com/)** to then query for a gif that describes current weather condition returned from OpenWeatherMap.
* Once both data points have been resolved, display gif and weather conditions on screen for user
* **MUST USE PROMISES** to handle all asynchronous aspects of this build

---

## Exercise 2

👇👇👇

-

### REMINDER: CRUD

**C**reate, **R**ead, **U**pdate, **D**elete

👇👇👇

-

### ShoppingList Refactor

Let's refactor our shopping list to implement CRUD.

👇👇👇

-

###  Requirements

Implement the following functions:

* **`ShoppingList.create`**
* **`ShoppingList.list`**
* **`ShoppingList.listOne`**
* **`ShoppingList.update`**
* **`ShoppingList.remove`**

More info on each method below

👇👇👇

-

### `ShoppingList.create`

```js
ShoppingList.create = (item, price) => {
	const id = /* unique id corresponding to record */
	/* this id must be stored / associated with */
	/* the record being added */
	/* ... */
	return id;
}
```

-

### `ShoppingList.list`

```js
ShoppingList.list = () => {
	/* return array of all records */
	/* each item in array must be object that */
	/* contains the ID of the record that was created */
	/* ShoppingList.create */
	return []; 
}
```

-

### `ShoppingList.listOne`

```js
ShoppingList.listOne = (id) => {
	/* query records, find by id and return that record */
	return {};
}
```

-

### `ShoppingList.update`

```js
ShoppingList.update = (id, data) => {
	/* data should be an object */
	/* that includes EITHER item or price or both */
	/* id cannot be changed */
	return true; // or false if id not found
}
```

-

### `ShoppingList.remove`

```js
ShoppingList.remove = (id) => {
	/* remove entire record from store */
	return true; // or false if id not found
}
```

---

## Exercise 3

👇👇👇

-

### ShoppingList w/Airtable

**[Airtable](https://airtable.com/)** is a simple spreadsheet as a service application.
(Create an account on Airtable now).

👇👇👇

-

We can create spreadsheets in Airtable and then use their API to programmatically add or remove data from that sheet.

👇👇👇

-

This essentially gives us a database, but it is much more beginner friendly and easier to set up - making it an ideal choice for our initial foray into persistent, CRUD based apps

👇👇👇

-

### Copy [Base](https://airtable.com/shr34mfhrGxf1Cp63/tblgcLwxNfHOxXhz2/viwLSG3uEwUIjlZXJ).

Essentially a **base** is Airtable's terminology for a spreadsheet. I've created a sample one we can use for our CRUD app.

Assuming you have an account with Airtable already, copy the base.

-

### API Docs

Once the base is open in your account, click on the top right **?** icon and click **API Documentation**.

-

### API Calls

The Airtable API is insanely non-restrictive. 

**DO NOT DEPLOY ANY OF THE FOLLOWING IMPLEMENTATIONS**.

👇👇👇

-

**Gut check**: can we retrieve our data?

Following the **node** tab instructions, ensure that you can make a call out to Airtable API and receive data.

You may need to check the **show api key** box on the top right for this.

👇👇👇

-

**Install Airtable client for browser**

This is a **javascript** library written by airtable. We will prefer this lib because we can use the same functions on serverside as well.

* **Go [here](https://github.com/Airtable/airtable.js)**.
* Navigate to **build/** folder.
* Download and save the **airtable_browser.js** file.

-

**Test the client to ensure it works**

Click to the nearest **list records** entry (just scroll down, it will show up).

Copy and paste the example code on the righthand side for the **node** tab and ensure that you are able to console.log your records in browser.

-

Having proved the **gut check**, we will now update our **`ShoppingList`** CRUD app to call out to this **Airtable** API for performing all operations.

-


**UPDATE** the **`ShoppingList`** CRUD app to rely on Airtable API to create, read, update, and delete data. Your functions themselves should not change, however the **implementations** (ie: their guts) **should** change drastically.

In particular, all our functions should return promises. 

-

Next lecture, we will move our app into a serverside script and discover that, with very little additional work, we can create our own API to handle these operations.

