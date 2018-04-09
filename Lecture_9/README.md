### Lecture 9
#  Using Object Literals
### Taq Karim

*Senior Software Engineer*, ** [Intersection](https://www.intersection.com/)**

---

## Objectives

* Use Object literals for solving problems in javascript

---


## Agenda

1. Object Literal basics
2. Reference vs Value
3. Object methods
3. The **`this`** keyword
4. Factory functions
5. Re-imagining ShoppingList as an Object


---

## Object Literal Basics

Let's discuss the mechanics of how object literals are created and used. Then, let's use them to build something useful.

-

Object Literals are another type of **data structure**, or method for storing and retrieving data. 

* We are already intimately familiar with one type of data structure, **arrays**.
* Object literals are essentially dictionaries, or associative arrays.
* With arrays, we use the **index**, a **number**, as a way to store and retrieve information.
* With object literals, we use the **key**, a **string**, as a way to store and retrieve information.

-

**SIDE NOTE**

So actually, the computer science term for dictionaries/object literals/etc is called the **hash map**. 

**Hash maps** have a **hashing function** and an internal **array** for storing data. Given a  **key** and **value** pair that we wish to store, the hash map converts the **key** into an index for the array using the hashing function and stores the value at the calculated index.

-

### Creating Objects

```js
// empty object literal
const myObj = {};

// object with prefilled values
const myObj2 = {
    "property1": "value1",  // notice the colon!
    "property2": 2, // notice the comma!
}

// updating an object after the fact
myObj2["property3"] = true;
```

Note that updating an object literal is not the same a **redefining** it. This is why we are able to mutate our **const** object without errors.

-

Objects are just another type of valid javascript datatype. Question:

```js
//  what do you expect to see?
console.log(typeof myObj2); 

 // what do you expect to see?
console.log(typeof myObj2["property1"]);

// how about now?
console.log(typeof myObj2["thisPropertyDoesntExistTho"]);
```

-

A note about syntax:

```js
myObj2.foobar = 'baz';

const myObj3 = {
    test: 1,
}

console.log(myObj3.test)
```

Sometimes you will see object properties being referenced and defined in the manner above. 

👇👇👇

-

Generally, this is usually **ok** however if you want to store an object property that has invalid javascript characters such as spaces or dashes you **must** use the approached defined initially.

-

### Dynamically setting / retrieving values

Consider the following:

```js
const o = {
	"test": 1,
}

const key = "test";
console.log(o[key]); //  what should this give us?
```

```js
const key = "foo";
const o = {
	[key]: 'val',
}
console.log(o); // what key is stored in o?
```

Keep this technique in mind, it will come in handy when we write more complex code.

-

### Methods

Object properties that are type `function` are called **`methods`**. (Just a fancy word for a function that is the property of an object). 

👇👇👇

-

Here's how we can get/set methods

```js
const human = {
    'name': 'Taq Karim',
    speak(catchphrase) {
		    return "Hi, my name is " + 
				human.name + 
				'. ' + 
				catchphrase;
		}
}

console.log(human.speak('BOOM. We chillin')); 
```

-

Generically, we can define methods as follows:

```
const obj = {
	method() {
		// this is preferred
	},
	// or
	method2: function() {
	
	},
	// or
	method3: () => {
	
	}
}
```

-

### Example of object usecase

```js
const htmlNode = {
	tagName: 'div',
	attributes: {
		'data-test': '1',
		'id': 'LOL-dont-try-this-at-home',
		'class': 'foo bar',
	},
	getAttribute(name) {
		return htmlNode.attributes[name];
	},
	setAttribute(name, value) {
		htmlNode.attributes[name] = value;
	},
	classList: {
		add(name) {
			const currClass = htmlNode.getAttribute('class').split(' ');
			currClass.push(name);
			htmlNode.setAttribute('class', currClass.join(' '))
		}
	},
}
```

* this is a **representation** in javascript of an **HTML DOM element**

-

Primarily, this is the major usecase for objects. Think of it as a way to represent a **real world** thing in terms of code. Object literals are the simplest way to achieve that.

In a future lecture we will consider **classes** and how we can standardize this concept and make it more reusable.

-

Minimally, however, we can think of object literals as a way to **namespace** a bunch of similar datatypes. For instance, if we wanted to store some properties of a cat...

-

```
const belle = {
	fullName: 'Annabelle Lee',
	age: 12,
	isFluffy: true,
	speak() {
		return 'meow'
	}
}
```

In this case we have associated what would have been a few generic variable names under the **belle** namespace. This way, we are no longer in danger of scope collision.

-

### Example of object usecase

Consider the following function.

* What does it do?

```js
const validatePlayerChoice = player => {
	const lp = player.toLowerCase();
	const c = lp.substring(0,1);
	if (c !== "r" && c !== "p" && c !== "s") {
		throw new Error("INVALID INPUT: player " + c)
	}
	return c;
}
```

-

With comments now...

```js
const validatePlayerChoice = (player) => {
	// remove bias for case insensitivity
	const lp = player.toLowerCase();

	// remove bias for misspelled choices
	const c = lp.substring(0,1);

	if (c !== "r" && c !== "p" && c !== "s") {
		throw new Error("INVALID INPUT: player " + c)
	}

	// if we are here, then player is VALID and it is either
	// "r", "p", "s"
	return c;
}
```

-

Suppose we created an object as follows:

```js
const validPlayerChoices = {
	'r': true,
	'p': true,
	's': true,
}
```

How could we use this object to make our player validation logic easier?

👇👇👇

-

```js
const validPlayerChoices = {'r': true, 'p': true, 's': true,}

const validatePlayerChoice = (player) => {
	// remove bias for case insensitivity
	const lp = player.toLowerCase();
	// remove bias for misspelled choices
	const c = lp.substring(0,1);
	if (typeof validPlayerChoices[c] === "undefined") {
		throw new Error("INVALID INPUT: player " + c)
	}
	// if we are here, then player is VALID and it is either
	// "r", "p", "s"
	return c;
}
```

What are some benefits to this approach?

-

### PSET

In **[Samantha](http://samantha.fewd.us/#fork/mottaquikarim/FEWD_629_functions_pset_9)**, implement the first two functions:

* **getSuperHero**
* **updateSuperHero**

Work in groups of 2, 10 minutes

---
## Reference vs Value

To pass by **value** is to pass the actual value of a variable whereas passing by **reference** is to pass the **variable** itself (so value + any other state associated with it).

-

**EXAMPLE**

```js
const a = 1;
const testMutation = (s1) => {
	s1 = 2;
	console.log(a, s1);
	return;
}

testMutation(a);
console.log(a); // what should this be?
```

-

We expect **`a`** to remain **unchanged**.  When it comes to **numbers**, **strings**, and **booleans** javascript passes in by value. Meaning, **mutating** the argument within the function has no effect on whatever is **outside** of the function. This is expected behavior and what we have been assuming all along. 

Passing in an object, however...

-


**EXAMPLE**

```js
const a = {
	'number': 1
};
const testMutation = (s1) => {
	s1.number = 2;
	console.log(a, s1); // what should this be?
	return;
}

testMutation(a);
console.log(a); // what should this be?
```

-

When we pass around objects into functions, we pass **by reference**, meaning we are not sending the object itself but only a **pointer** to that object. For this reason, any mutation that the function performs will update the outside value as well.

And now for the fun part...

-

**EXAMPLE**

```js
const a = {
	'number': 1
};
const testMutation = (s1) => {
	s1 = 2;
	console.log(a, s1); // what should this be?
	return;
}

testMutation(a);
console.log(a); // what should this be?
```

-

In the final case, **because** we are redefining **s1**, any "connection" it has to the object passed in is gone. For this reason, `a` remains as it was originally defined.

-

**Key Takeaways**

1. It's important to know the difference between passing by value vs reference!
2. If you need to pass around objects, prefer to make a **copy** of the objects **first** before mutating. We call functions that return a brand new copy of the inputs (but with changes baked in) **pure functions**.

-

**[Practice](http://samantha.fewd.us/#fork/mottaquikarim/JSR-PSET_Ref_vs_Val)**

---

## Object methods

Let's talk through two useful object methods.

-

**Object.keys**

Gets us an array of object keys.

```js
const testScores = {
	'studentA': 92,
	'studentB': 64,
	'studentC': 85,
}

console.log(Object.keys(testScores)); // ['studentA', 'studentB', 'studentC']
```

* Useful for transforming an object through reduce

-

**Example of Object.keys and Array.reduce**

```js
const testScores = {
	'studentA': 92,
	'studentB': 64,
	'studentC': 85,
}

// apply a curve to each grades
const curvedScores = Object.keys(testScores)
	.reduce((newGrades, studentName) => {
		const grade = testScores[studentName];
		newGrades[studentName] = Math.floor(10 * grade ** 0.5)
		return newGrades;
	}, {});
// ^^ returns: { 'studentA': 95, 'studentB': 80, 'studentC': 92,}
```

-

**Object.assign**

Copies object

```js
 let obj1 = { a: 0 , b: { c: 0}};
 let obj2 = Object.assign({}, obj1);
 console.log(obj2); // { a: 0, b: { c: 0}}
```

-

**Object.assign gotcha**
```js

 let obj1 = { a: 0 , b: { c: 0}};
 let obj2 = Object.assign({}, obj1);
 
 obj2.b.c = 3;
 console.log(obj2); // { a: 0, b: { c: 3}}  -- we expect this
 cosole.log(obj1); // {a: 0, b: { c: 3}} -- we DONT expect this
```

For this reason we say **Object.assign** performs a "shallow" copy of the object literal.

-

**Potential way to rectify**

```js
 let obj1 = { a: 0 , b: { c: 0}};
 let obj2 = JSON.parse(JSON.stringify({}, obj1));
 
 obj2.b.c = 3;
 
 console.log(obj2); // { a: 0, b: { c: 3}}  -- we expect this
 cosole.log(obj1); // {a: 0, b: { c: 0}} -- we __DO__ expect this
```

* This works because **strings** are immutable in javascript and** JSON.stringify** converts an object to a string.
* This solution is not perfect because **JSON.stringify** does not support processing properties that are functions.

-

**[Practice](http://samantha.fewd.us/#fork/mottaquikarim/JSR-PSET_Object_methods)**

---

## `this` keyword

Let's talk about **this**.

-

In javascript, `this` is used to refer to the parent object within scope.

-

For instance, consider this:

```
(function() {
	
	function foo() {
		console.log(this)
    }

	foo()
})();
```

What will this output? Why?

-

(As a side note, consider now this:
```
(function() {
	'use strict'
	function foo() {
		console.log(this)
    }

	foo()
})();
```

What will this output? Why?)

-

Regardless, it is important to note that all functions that are defined with the **`function`** keyword in bare scope (ie: not as an object method) will have `this` refer to the **global window** object.

-

However, something like this:

```
const obj = {
	method() {
		console.log(this); // obj will show up
	}
}
```

will result in `this` being set to the `obj` variable. 

Therefore, `this` can be used to **reference an object's _own_ properties and methods**.

We will leverage this heavily when working with the DOM.

-

Worth noting as well:

What is the diff between this...
```
const obj = {
	method: function() {
		console.log(this); // obj will show up
	}
}
```

and

```
const obj = {
	method: () => {
		console.log(this); // what shows up here??
	}
}
```

-

This happens to be a **key** factor differentiating **fat arrow** functions with "regular" functions: **fat arrow** functions **do not** retain expected scope for the **this** variable.

Believe it or not, this is desired, especially when working with nested object methods.

(For instance, when working in React, we always want **`this`** to point to the React instance, **not** the dom element that was clicked)

---

## Factory functions

What if we wanted to create **two** shopping lists, each for a distinct supermarket. Let's explore this concept to better understand how **factory functions** can be useful.

-
Let's assume a simplified version of our **ShoppingList**:

```js
const newShoppingListItem = (name,price) => ({name, price,});
const addToShoppingList= (item,list=[])=> list.concat([item]);
const removeFromShoppingList = (list=[]) => list.slice(0, -1);
```
* using one liners to keep things simple
* notice how whereever applicable, we use methods that return a **new** list item, keeping our functions **pure** af

-

So, how would we use our **ShoppingList** for two different supermarkets? Perhaps something like this:

```js
const newShoppingListItem = (name,price) => ({name, price,});
const addToShoppingList= (item,list=[])=> list.concat([item]);
const removeFromShoppingList = (list=[]) => list.slice(0, -1);

const cTown = []
const wholeFoods = []

addToShoppingList(newShoppingListItem(
	'eggs',
	1.79
), cTown);
addToShoppingList(newShoppingListItem(
	'eggs',
	1.59
), wholeFoods);
```

This way, we have two distinct arrays that refer to each mart.

-
However, there is risk here. In particular, it is likely that programmer may forget to point to the correct list - or, more menacingly, mix them up, etc. 

Let's apply object literals to this situation.

-

**Object literals implementation of ShoppingList**
```js
const ShopplingList = {
	list: [],
	newShoppingListItem(name,price) {
		return {name, price,}
	},
	addToShoppingList(item) {
		this.list = this.list.concat(item);
	},
	removeFromShoppingList() {
		this.list = this.list.slice(0, -1);
	}
};
const item = ShoppingList.newShoppingListItem('eggs',1.79)
ShoppingList.addToShoppingList(item);
console.log(ShoppingList.item);
```

In this approach, we no longer have to worry about passing in lists...but, now we can **only** use one **ShoppingList**!

-
**Factory Functions**
What if our ShoppingList looked like this...?

```js
const ShoppingList = () => ({
	list: [],
	newShoppingListItem(name,price) {
		return {name, price,}
	},
	addToShoppingList(item) {
		this.list = this.list.concat(item);
	},
	removeFromShoppingList() {
		this.list = this.list.slice(0, -1);
	}
});
```
* now, **ShoppingList** is a **function** that **returns** an object literal
* we call these functions **factory functions** since we can invoke the function to get a new object

-
**Factory Functions cont'd**

```js
// assume we have the ShoppingList factory function from above...
const cTown = ShoppingList();
const wholeFoods = ShoppingList();

cTown.addToShoppingList(ctown.newShoppingListItem('eggs', 1.79))
wholeFoods.addToShoppingList(wholeFoods.newShoppingListItem('eggs', 1.59))
```

Now our code gets a little simplified, we can refer to the shopping lists by their mart name and thanks to **`this`**, we can reuse this function for as many marts as needed!

-
**Benefits of using Factory functions**

* removes need for a standalone `list` variable
* removes need to pass in that list variable into the function every time
* potentially removes the need to have to `return` that list from function every time
* logical grouping of methods under a common "namespace"


---

## Practice

👇👇👇

-


### RPS Revisited

Here is yet another implementation of our **`rps`** function:

```js
const validPlayerChoices = {'r': true, 'p': true, 's': true,}
const validatePlayerChoice = player => {
	player = player.toLowerCase().substring(0,1);
	if (!validPlayerChoices[player]) {
		throw new Error("INVALID INPUT: player " + player)
	}
	return player;
}
const rps = (p1, p2) => {
	p1 = validatePlayerChoice(p1);
	p2 = validatePlayerChoice(p2);
	const p2Cases = {'rp': true, 'ps': true, 'sr': true,}
	if (p1 === p2) return "tie"
	else if (p2Cases[p1+p2]) return "p2"
	else return "p1"
}
```

👇👇👇

-

Using the implementation above...

* Define an object called **`p1Outcomes`**
* Define an object called **`p2Outcomes`**
* Each object should have two properties: 
	* `wins`, 
	* `losses`
* Run the `rps` function and use the output to populate the properties of both your objects
* (ie: if p1 won, then **p1Outcomes.wins == 1** and **p1Outcomes.losses == 0**,  **p2Outcomes.wins == 1** and **p2Outcomes.losses == 0**)

-

Now, write **ONE** function that will take any object that looks like `p1Outcomes` or `p2Outcomes` and updates the `wins` / `losses` properties

ie:
```js
const p1Outcomes = {"wins": 0, "losses": 0};
console.log(updateOutcomes(p1Outcomes, 1, 1));
// expect: {
//    wins: 1,
//    losses: 1,
// }
```

-

Now, write **ANOTHER** function that takes `p1Outcomes` or `p2Outcomes` and returns three values:

1. The **total** games played
2. The **percentage** of games won
3. The **percentage** of games lost

How can one function return three values tho...?!

-

Finally, run the **`rps`** function 1000 times. 

1. At each iteration, update `p1Outcomes` and `p2Outcomes` with the **win/loss** results
2. Once your loop is completed, display the **total** number of games played and percentage of games won/lost by player1 and player2.

👇👇👇

-

To succeed in the problem above, you might need this:

```js
const generateRandomNum = (s,e) => Math.floor(Math.random()*(e-s)) + s
const getRandomPlayerChoice = () => {
  const options = ['r', 'p', 's'];
  return options[generateRandomNum(0,options.length+1)]
}
```

**PS**: there is an intentional bug in the code above! Find it and fix it before using! (Mainly to force you to grok what is going on here...)

👇👇👇

-

**#STRETCHGOALZ**: turn your implementation above into a function where you pass in the number of iterations instead of hardcoding to 1000...

-

**[Practice](http://samantha.fewd.us/#fork/mottaquikarim/JSR-PSET_Factories)**


****

**HINT(s)**

If we wrote our factory function generically enough, we shouldn't have to do much work!


Write another factory function that returns an object with the following properties:

* `item`: <**string**>
* `due`: <**number**>
* `isCompleted`: <**boolean**>
 
Use this function to populate the **TodoList**
