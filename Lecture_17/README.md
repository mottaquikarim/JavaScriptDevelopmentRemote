### Lecture 17
#  CRUD
### Taq Karim

*Senior Software Engineer*, ** [Intersection](https://www.intersection.com/)**

---

## Objectives

* Understand CRUD principles
---


## Agenda

1. Definition of CRUD
2. Writing our ShoppingList with CRUD principles
3. Refactoring ShoppingList to use Airtable

---

## CRUD

**C**reate, **R**ead, **U**pdate, **D**elete

👇👇👇

-

In general, there are four standard actions that we can perform on a set of data: 
* Create, 
* Read, 
* Update, and 
* Delete 

or `CRUD` for short. 

👇👇👇

-

The term `CRUD` is standard when referring to functions we can perform on some stored data, typically stored in a database.

👇👇👇

-

We can also perform `CRUD` actions when interacting with an API. For example, with Instagram's API, a user is allowed to:

👇👇👇

-

* **Create** new data on Instagram's server by uploading a post with a picture with a caption
* **Read** data from Instagram's server by fetching posts
* **Update** data in Instagram's server by editing a caption
* **Delete** data from Instagram's server by removing a post

-

Typically, to implement `CRUD`, we run our application on a server, and use it to interact with a database.  However, any type of stateful app that implements functions for creating, reading, updating, and deleting data from an array or object technically counts as CRUD.

-

Today, we will explore CRUD first by refactoring our **`ShoppingList`** with CRUD. Find the requirements below:



---


## ShoppingList Refactor

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

## ShoppingList w/Airtable

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


---

## Homework

**DUE:** Weds Feb 14th.

Begin work on your final projects!
