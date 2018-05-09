### Lecture 18
# Promises, APIs, and UIs
### Taq Karim

*Senior Software Engineer*, ** [Intersection](https://www.intersection.com/)**

---

## Objectives

* Complete the ShoppingList implementation using promises
* Explore Webtask

---


## Agenda

* Completing ShoppingList factory
* Building UI around ShoppingList factory
* Proxying with Webtask

---
## Complete ShoppingList Factory

**[Code](https://github.com/mottaquikarim/JavaScriptDevelopmentRemote/tree/master/Lecture_17/class_notes/shoppinglist)**

Let's complete this implementation as a class with a few additional requirements...

-

### Requirements

* Support: **in-memory** storage, **localstorage**, and **airtable** storage
* Regardless of storage config, API should be the same and ShoppingList should use a constant set of functions for CRUD
* Developer is able to pass along a config object with settings as needed


---

## Building UI around ShoppingList Factory

Now, let's create a simple UI around the ShoppingList Factory

-

Initially, we just want to:

* Have input fields for item and price
* Adding "new" item updates storage and **then** updates UI
* Price is updated on the fly as user interacts with list

-

V2 (optional)

* Let's have support for **two** shopping list UIs side by side
* When either one is updated, we should reflect a message on bottom which states how much cheaper one list is vs the other
* Developer has ability to have say left side use in-memory storage and right side use airtable storage, etc


---

## Proxying with Webtask

Let's move our ShoppingList over to a serverside script.

👇👇👇

-

### Advantages

* API key and other sensitive information is concealed from client
* We can circumvent any CORs issues as they come up

-

First, we must create an account on **[WebTask](https://webtask.io/)**. After signing up, go back to the home page and click on "**Learn More**" in the "**Code Editor** card on the left.

👇👇👇

-

Create a new Webtask script with a **basic** template.

👇👇👇

-

Before doing anything with the code, explore the UI. Can you guess what the `context` variable represents? How do you "call" serverside code...? What are the inputs? The outputs? How is it different from the browser? How can you explore this?


👇👇👇

-

Consider the following piece of code:

```js
const express    = require('express');
const Webtask    = require('webtask-tools');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.get('/foobar',  (req, res) => {
  // res.sendStatus(200);
  res.send(JSON.stringify({'bar': true}))
});

app.get('/foobaz',  (req, res) => {
  // res.sendStatus(200);
  res.send(JSON.stringify({'bar': false}))
});

module.exports = Webtask.fromExpress(app);

```

What does the code above do? How can you "test" this code? 


-

**CHALLENGE**: update the code above in your webtask to perform CRUD operations over our **`ShoppingList`** object.


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

