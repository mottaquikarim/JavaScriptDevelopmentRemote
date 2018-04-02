### Lecture 8
#  Using Objects
### Taq Karim

*Senior Software Engineer*, ** [Intersection](https://www.intersection.com/)**

---

## Objectives

* Review homework
* Use Object literals for solving problems in javascript

---


## Agenda

1. Review HWK
2. Grokking object basics
3. `this` keyword
4. Factory functions
3. Building our own **ShoppingList** Utility


---
## Review HWK

Let's begin by solving select problems from the **[Homework Assignment](https://github.com/FEWDMaterials/JSR_Shopping_List_Functions)**


---

## 🤔 Question 🤔

What if we wanted to implement __two__ shopping lists? 

Say for example to compare prices between two competing chains. How can that be achieved?

-

Through **objects**.

Objects are just key value pairs, but they are also a powerful way to achieve namespacing and reusability for complex programs like our shopping list.

-

For now, we will only discuss **object literals**, nothing with classes or inheritance.

---

## Object Basics

Let's discuss the mechanics of how objects are created and used. Then, let's use them to build something useful.

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

Consider our **`validatePlayerChoice`** function...

(reproduced here for convenience)

```js
const validatePlayerChoice = (player) => {
	// remove bias for case insensitivity
	player = player.toLowerCase();

	// remove bias for misspelled choices
	player = player.substring(0,1);

	if (player !== "r" && player !== "p" && player !== "s") {
		throw new Error("INVALID INPUT: player " + player)
	}

	// if we are here, then player is VALID and it is either
	// "r", "p", "s"
	return player;
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
	player = player.toLowerCase();
	// remove bias for misspelled choices
	player = player.substring(0,1);
	if (typeof validPlayerChoices[player] === "undefined") {
		throw new Error("INVALID INPUT: player " + player)
	}
	// if we are here, then player is VALID and it is either
	// "r", "p", "s"
	return player;
}
```

What are some benefits to this approach?

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

---

## Factory functions

Let's convert our **ShoppingList** into an object. Then, we can explore how to "automate" the process of creating more types of ShoppingLists (...essentially creating an object "factory").

---

## Practice

-

### PSET

In **[Samantha](http://samantha.fewd.us/#fork/mottaquikarim/FEWD_629_functions_pset_9)**, implement the first two functions:

* **getSuperHero**
* **updateSuperHero**

Work in groups of 2, 10 minutes

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

Work in groups of 2, 10 minutes

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

---

## Shopping List Implementation

... with objects!

Let's consider what happens if we tried to build programs with object literals.

**NB**: this is from previous class, keeping here if anyone wants to practice.

👇👇👇

-

### Create a variable called list

It should be an array.

-

### Write a function called `addToList`.

```js
addToList([], 'mangoes');
// ['mangoes']
```

(5 mins)

-

### Write a function called `displayList`.

```js
displayList([]);
// ['mangoes']
```

(5 mins)

-

### Write a function called `removeFromList`.

```js
removeFromList(['mangoes'], 0);
// []
removeFromList(['mangoes'], 10);
// ERROR: list is too short
removeFromList([], 0)
// ERROR: list is empty
removeFromList([])
// ERROR: need index
```
(5 mins)

-

### Write a function called `addMultipleToList`

```js
addMultipleToList(['mangoes'], ['coffee', 'bread', 'ice cream']);
// ['mangoes', 'coffee', 'bread', 'ice cream']
```

* it should use the **`addToList`** function internally.

(5 mins)

-

### How can we incorporate this into an object?

(Suggestions welcome)

-

### *WHY* should we incorporate this into an object?

-

### Reasons...

* removes need for a standalone `list` variable
* removes need to pass in that list variable into the function every time
* potentially removes the need to have to `return` that list from function every time
* logical grouping of methods under a common "namespace"

-

### Refactor those functions we wrote above to be a part of **ONE** object.

What if we wanted more than one shopping list tho...?

-

### Write function that returns a shopping list object.

We call this a **factory function**.

-

### Write a **TodoList** object with the same functionality as the shopping list.

Added caveat:  each item in the list should be an object with the following properties:

* `item`: <**string**>
* `due`: <**number**>
* `isCompleted`: <**boolean**>

-

### HINT

If we wrote our factory function generically enough, we shouldn't have to do much work!

-

### Second Hint

Write another factory function that returns an object with the following properties:

* `item`: <**string**>
* `due`: <**number**>
* `isCompleted`: <**boolean**>
 
Use this function to populate the **TodoList**
