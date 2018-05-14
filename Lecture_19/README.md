### Lecture 19
# Life beyond the browser
### Taq Karim

*Senior Software Engineer*, ** [Intersection](https://www.intersection.com/)**

---

## Objectives

* Complete ShoppingListUI implementation w/Airtable
* Explore Webtask, move implementation serverside
* Take a peek at React

---


## Agenda

* Completing ShoppingList factory
* Proxying with Webtask
* Building UI around ShoppingList factory w/React

---

## Game Plan for Weds

* What to expect
* What to submit

---
## Complete ShoppingList Factory

**[Code](https://github.com/mottaquikarim/JavaScriptDevelopmentRemote/blob/master/Lecture_18/class_notes/shoppinglist/javascript/main.js)**

Let's complete this implementation with Airtable.

---

## Problems with Airtable Implementation

Mainly:

* API key / app key are both publicly available...which is *really* bad
* Implementation is also publicly available, anyone can go into code and deduce the schema of your tables


---

## Webtask to the rescue

Traditionally, we would set up a proxy API service on a backend somewhere to hide application details. 

**Recall** that this was the exact reasoning behind why services like Giphy and OpenWeatherMap make their data available thru web APIs.

-

### Provisioning a server is complex

* Requires knowledge of NodeJS / how serverside programming works
* Requires provisioning of remote environment, deployment, configs, etc etc

-

### Webtask is a "serverless" solution to this problem

Let's read the** [docs](https://webtask.io/)** together

-

### Advantages

* API key and other sensitive information is concealed from client
* We can circumvent any CORs issues as they come up

-

### Exercise

* Create a webtask account
* Go to **[this](https://webtask.io/make)** URL to access the in-browser code editor
* Create a new Webtask script with a **basic** template.

-

### Exercise cont'd

* Before doing anything with the code, explore the UI. Can you guess what the `context` variable represents? How do you "call" serverside code...? What are the inputs? The outputs? How is it different from the browser? How can you explore this?

-

### Exercise cont'd

* Update the serverless function to return the current date as a timestamp
* Add **[moment](https://momentjs.com/)** support to your endpoint and have your function return a "pretty" formatted date

---

## Proxying with Webtask

Let's move our ShoppingList over to a serverside script.

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


---

## React

**[Docs](https://reactjs.org/docs/hello-world.html)**

**[Getting Started](https://reactjs.org/docs/try-react.html)**

-

### Component Lifecycle

[![component lifecycle](https://www.codevoila.com/uploads/images/201607/reactjs_component_lifecycle_functions.png)](https://www.codevoila.com/post/57/reactjs-tutorial-react-component-lifecycle)

-

### Prototypal Inheritance

_When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain._

**[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)**

-

### Example

```js
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);

```

-

### Creating custom React components

```js
class TestComponent extends Component {
   ...
}
```

We inherit the lifecycle methods from `Component` class and can use as we see fit


-

### State vs Props

* **[Doc](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)**
* **[Thinking in Raect](https://reactjs.org/docs/thinking-in-react.html)**

-

### Build ShoppingListUI in React

Let's use the implementation we now have to build a shoppinglistui in react.


---

## Airtable slides

(for reference)

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

