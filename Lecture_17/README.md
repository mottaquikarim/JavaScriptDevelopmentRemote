### Lecture 17
# Promises cont'd
### Taq Karim

*Senior Software Engineer*, ** [Intersection](https://www.intersection.com/)**

---

## Objectives

* Practice w/promises
* Shopping List w/Promises

---


## Agenda

* Creating Promises
* Practice
* Using Promises
* Practice
* Shopping List

---
## Creating Promises

-

Let's begin by remembering how to create a promise.

```js
const p = new Promise((resolve, reject) => {
	resolve(5);
});
```

Here, **`p`** is a **promise object**. 

-

Because we **`resolve`**d  **`p`** to **5**, we can expect the following:

```js
p.then((data) => {
	console.log(data); // we expect to see 5 here
});
```

-

Moreover, let us now consider the following:

```js
const p = new Promise((resolve, reject) => {
	reject(5);
});
```

Notice that here, we are **`reject`**-ing **5**.

-

Therefore, we can expect:

```js
p.catch((err) => {
  // now we get 5, but in the __catch__ 
	// property of promise object p
	console.log(err);
});
```

-

Promises can be **resolved** or **rejected**. This is especially useful for AJAX requests when there is a real possibility that the operation may time out or be canceled for one reason or another (for example, lack of authentication and/or expired API key).

-

Here's an example demonstrating how to create a promise capable of resolving / rejecting itself

```js
const p = new Promise((resolve, reject) => {
	if (Math.random() < 0.5) { resolve(5); }
	else { reject(5); }
});

p.then(d => console.log('resolved!'))
 .catch(err => console.log('rejected!'))
```

-

However, creating a promise outright (as in, storing into a variable), is not very useful. To make promise based actions more reusable, let's wrap into a function.

```js
const get5AsPromise = () => {
	return new Promise((resolve, reject) => {
		if (Math.random() < 0.5) { resolve(5); }
		else { reject(5); }
	});
}
```

-

Crucially, notice that:

```js
const p = get5AsPromise();
p.then(d => console.log('resolved!'))
 .catch(err => console.log('rejected!'))
```
^^^ ... which looks exactly the same as what we had done before, except that the promise implementation is now wrapped into a function 

---

## Practice

**[Promises PSET](http://samantha.fewd.us/#fork/mottaquikarim/JSR-PSET_Creating_Promises)**

(To test the XHR problem, use the **Giphy** random api endpoint:

**https://api.giphy.com/v1/gifs/random**)

---

## Using Promises

Let's talk through some usecases with chainable **then** and **catch** method invocations


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

