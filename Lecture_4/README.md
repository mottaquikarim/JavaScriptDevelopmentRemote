# Lecture 4: Functions and Scope

### Wes Yu
JavaScript Engineer, Honey

---

## Objectives
* Describe how parameters and arguments relate to functions
* Define and call functions in terms of other functions
* Return a value from a function using the return keyword
* Define and call a function with argument-dependent return values
* Determine the scope of variables

---
## Agenda
* Introduction to Functions
* Function Declarations
* Parameters and Arguments
* Return Statement
* Introduction to Scope
* Using Global and Local Scope

---
## Introduction to Functions
A function is a reusable statement or group of statements that can be invoked anywhere in a program. 

-

### Why  Functions, tho?

* we no longer have to rewrite the same statements over and over again.
* gives us the ability to write reusable, modular code that is easy to test and maintain
	* especially when dealing with complex features that span hundreds or thousands of lines of code.

---
A critical component of programming, functions address a key tenet of engineering: 

**Don't Repeat Yourself**, 

or

**DRY**.

-

Our goal is to create programs with as few lines as possible, while maintaining clarity.

---
## In JavaScript, every function:

* is an an `object`
* can have properties
* has a link to its constructor method 
* can be stored in a variable
* can be returned from another function
* can be passed into another function as an argument

NB: some of these concepts will be defined / expounded upon in depth in subsequent lectures

---
## Function Declarations
Before we call, or invoke, a function, we must define it.

&nbsp;

Although there are several ways to define a function, the two most common methods involve **function declarations** and **function expressions**. Both methods use the `function` keyword.

---
### Function Declaration
```js
function speak(words) {
	console.log(words);
	return words;
} // no semicolon
```

-

### Function Expression
```js
const speak = function(words) {
	console.log(words);
	return words;
}; // notice the semicolon
```

-

### Arrow Function Expression
```js
const speak = (words) => {
	console.log(words);
	return words;
}; // notice the semicolon
```

---
Both methods share similarities, but only function declarations allow us to call the function before it's defined.

-

Generally the preferred method of function creation is to use function expressions whenever possible; in particular use _arrow_ function expressions whenever possible.

---
### Function Declaration
```js
speak('hello world!');

function speak(words) {
  console.log(words);
}
// No JavaScript Error!
```

---
### Function Expression
```js
speak('hello world!');

const speak = function(words) {
	console.log(words);
	return words;
};
// TypeError: undefined is not a function
```

---
### Function Declaration Syntax
Function declarations have the following:

* a name for the function after the `function` keyword
* statements inside the the function body (which get executed every time the function is called) inside the `{}`
* an optional list of parameters inside `()` with multiple parameters separated by a comma
* a `return` keyword, which is a special keyword that "gives" back a calculation from within the function itself (more on this when we talk about scope)

-

What is the name, statement(s), and parameters for the function declaration below?
```js
function speak(words) {
	console.log(words);
	return words;
}
```

---
### Details about Arrow Function Declarations

Basic syntax:

```
const speak = (words) => {
	console.log(words);
	return words;
}
```

-

If only one parameter is needed...
```
const speak = words => {
	console.log(words);
	return words;
}
// notice that the parenthesis are gone now - works
// ONLY for functions with one param
```

-

if only one statement is in the function...
```

const speak = words => {
	return `Hello, ${words}`;
}

// same as...

const speak = words => `Hello, ${words}`;

```

* ofc that's kind of a lame usecase, but mainly helpful to show different ways arrow functions can be used
* the terse syntax is both a blessing and a curse

---
### Calling Functions
Calling, or invoking, a function executes the code defined inside the function.

&nbsp;

Defining and calling a function are two different acts. Typically, a function will not be called when it's defined.

-

It *is* possible to define and immediately invoke  a function, we'll see how to immediately invoke a function expression in a later class.

---
We can call a function by using parentheses after it's name.

```js
function hello() {
  console.log("Hello World!");
}

hello(); // notice the semicolon

//=> Hello World!
```

---
### Functions as Methods on Objects
JavaScript functions are often defined as methods on objects*****. To call these methods:
```js
var person = {
  speak: function() {
    console.log('Hello World!');
  }
};

person.speak();
//=> 'Hello World!'
```

-

Note that this is equally valid:

```js
var person = {
  speak: () => console.log('Hello World!'),
};

person.speak();
//=> 'Hello World!'
```

If a function is to be only one line, then the _arrow_ function expression format allows us to ignore the `{}` entirely. This makes for terse code but not necessarily more readable code. 

It's a matter of preference, mainly.

---
## Parameters and Arguments
If a function did the same thing every time it was called, we wouldn't have a very powerful codebase.

&nbsp;

We would also have to write a new function for each new feature in order to enable additional behaviors in our application.

---
We would end up with something like this:

```js
function helloMark() {
    console.log('Hello Mark');
}

function helloSteven() {
    console.log('Hello Steven');
}
```

---
We can call the same function with different values by using parameters:
```js
function sayHello(name) {
    // name is a parameter
    return 'Hello ' + name;
}

// 'Mark' is an argument
console.log(sayHello('Mark'));
//=> 'Hello Mark'

console.log(sayHello('Steven'));
//=> 'Hello Steven'
```

-

**Parameters** refer to the variables defined in the function's declaration. 

**Arguments** refer to the actual values passed into the function when it's called.

-

```js
function fn(param) {
    //param is the parameter
}

fn(5);
```

Above:
* 5 is the argument
* calling fn(5) will take us to the definition above
* and set param = 5
---
Use a comma-separated list to write a function with more than one parameter. Each **p**arameter **p**arks its **p**lace for the argument passed in when the function is called.

```js
function sum(x, y, z) {
  return x + y + z;
}

console.log(sum(1, 2, 3));
//=> 6

// With those arguments
// what are the values of x, y, and z inside sum?
```

---
JavaScript functions don't perform type checking. We can't specify the type of a parameters when defining the function.

-

To prevent errors, we can write checks to verify the types are correct. We'll almost always use the same type for the same parameter every time we call the function.

-

The parameters in the function definition can be of different types.

---
## Return Statement

**THIS IS REALLY IMPORTANT, FAM**


Functions are only useful if they *return* something.


Using the `return` statement ends the function's execution and "spits out" the value we're returning.

-

If we want to update a variable using values computed in a function or pass it into another function, we'll use a `return` statement.

-

By default, all functions in JavaScript return `undefined`. Even if we don't have the `return` keyword in our function body, it will return `undefined`.

---
### Storing Returned Value in Variable
```js
function sum(x, y) {
    return x + y;
}

const z = sum(3, 4);
//=> 7 // returned from sum(3, 4);

console.log(z);
//=> 7 // assigned to variable z

console.log(sum(3,4))
//=> alternative to storing in z and console.logging
```

---
### Passing a Function Call into a Function Call
```js
const num = sum(3, 4);
//=> 7

function double(x) {
    return x * 2;
}

const numDouble = double(num);
//=> 14

// We can write the above with:
const numDouble = double(sum(3, 4));
//=> 14
//sum(3, 4) will return 7
//7 is then passed into double()
```

---
### Return Stops Execution
The `return` statement will completely stop the function's execution. Any statements after the `return` statement will not be called.

```js
function speak(words) {
  return;

  // The following statements will not run:
  const numOne = 1;
  const numTwo = 2;
  console.log(words);
}
//what will speak("hi") return?
```

---
### Tweet Length Check Function

```js
function isTweetInRange(text, longerSizeEnabled) {
  const longerSize = 280;
  const defaultSize = 140;
  const maxLength = longerSizeEnabled ?
    longerSize : defaultSize;

  return text.length <= maxLength;
}

console.log(isTweetInRange("Hello World"));
//=> true
```
---
### Cities Markup Function

```js
const cities = ["NYC", "SF", "Sydney", "London"];

function getSingleLocationMarkup(location) {
  return "<div>" + location + "</div>";
}

function getLocationsMarkup(locations) {
  const markup = locations.map(getSingleLocationMarkup);
  // equivalent to below!
  // var markup = locations.map(function(location) {
  //   return "<div>" + location + "</div>";
  // });
  return markup.join("");
}

console.log(getLocationsMarkup(cities));
// => what does this return...?
```

-

Using arrow functions only...
```js
const cities = ["NYC", "SF", "Sydney", "London"];

// notice how you no longer need the return keyword here
// because it's a one liner the return is implied
const getSingleLocationMarkup = location =>  "<div>" + location + "</div>";

const getLocationsMarkup = locations => locations
	.map(getSingleLocationMarkup)
	.join("");
console.log(getLocationsMarkup(cities));
// => what does this return...?
```

---
## Introduction to Scope
Scope is a concept present in programming languages. It refers to the current context of execution, with context being which values can be referenced.

If a variable is **not** in (the current) scope, then we can't use it because we don't have access to it.

---
If we try to use a variable we don't have access to, we'll get an error:
```js
function speak(words) {
    console.log(words);
}

//we don't have access to `words`
//outside of the speak function's body
console.log(words);
//=> Uncaught ReferenceError: words is not defined
```

---
### Global Scope
By default, we're in the **global** scope. Anytime a variable is declared outside of a function, it is part of the global scope.

-

We would call such a variable a **global** variable.

-

Global variables are bad practice because it's easy to accidentally overwrite the value of a variable. Any function or expression on the page can reference and alter a global variable.

---
The environment for global variables is accessible via the **global** object. In the browser, this is the `window` object. In `Node`, it's the `global` or `GLOBAL` object. All global variables are attached to the global object.

-


```js
// message is part of the global scope
const message = "Hi Students!";

console.log(message);
//=> "Hi Students!"

// all global variables are properties
// of the window object in the browser
console.log(window.message);
//=> "Hi Students!"

// and the global object in Node
console.log(global.message);
//=> "Hi Students!"
```

---
### Namespace
A **namespace** is a container for a set of variables and objects, *e.g.* functions, etc.

-

We don't want to pollute the global **namespace**.

We'll soon see how we can create namespaces to organize our code. Namespacing is a way for us to prevent collisions with other objects or variables.

---
### Local Scope
We create a new scope whenever we declare a function. Inside the function body, we have access to variables declared inside of that function and in the outer scope. Any variables declared inside of that function are local to it. 

NB: A function nested inside of a function has access to the outer function's variables.

---
```js
const globalNum = 1;
function scopeHelper() {
    const localNum = 2;
    console.log(globalNum);
    console.log(localNum);
}

scopeHelper();
//=> 1
//=> 2

console.log(localNum);
// what will this do?
```
---

### Local Scope Example
```js
var globalString = "Variable in the global scope.";

function scopeHelper() {
  var localString = "Variable in the scope of scopeHelper";
  return localString;
}

// what's printed by this console.log?
console.log(scopeHelper());

// what's printed by this console.log?
console.log(localString);
```

---
### Accessing Outer Scope Example
A function can access variables of the parent scope. Therefore, a function defined in the global scope can access all the variables defined in the global scope

(Example below)

-

```js
// Global Scope
const prefix = "Hello";

// sayHello is defined in the global scope
function sayHello(name) {
    // prefix was defined in the global scope
    console.log(prefix + " " + name);
}

sayHello("JavaScript");
=> "Hello JavaScript";
```

---
### Nested Function Scope Example
When a function is defined inside of another function, it's possible to access variables defined in the outer function from the inner function:
```js
const numOne = 1;

function getScore() {
  const numTwo = 2;
  const numThree = 3;

  function add() {
      return numOne + numTwo + numThree;
  }

  return add();
}

getScore();
//=> 6
```

---

## Rock Paper Scissors Lab

Please work in groups of 2-3.

```
/*
    @func rockPaperScissors
    @param {string} player1
    @param {string} player2
    @returns {number}
    @desc - given a player1 and player2
            returns 1 if player1 has won
            returns 2 if player2 has won
            returns 0 if tie
            returns -1 if invalid input
            expects both player1 and player2 inputs to be either
            "rock", "paper", or "scissors"
    
    @example rockPaperScissors( "rock", "paper" ); // 2
    @example rockPaperScissors( "rock", "scissors"); // 1
    @example rockPaperScissors( "rock", "rock" ); // 0
    @example rockPaperScissors( "r", "p" ); // -1
    @example rockPaperScissors( "r" ); // -1
    @example rockPaperScissors(); // -1
*/
```

-

```
/*
    @func RPSwithComputer
    @param {string} player
    @returns {number}
    @desc - given a player,
            randomly selects a "choice" for the computer
            RUNS rockPaperScissors from before with computer's choice
            as `player2`
            expect same results as above

    @example rockPaperScissors( "rock" ); // 2, if computer won
    @example rockPaperScissors( "rock" ); // 1, if player won
    @example rockPaperScissors( "rock" ); // 0, if tied
    @example rockPaperScissors(); // -1
*/

```

---

## Extra Practice

**[Check these out](https://medium.com/@the_taqquikarim/an-exhaustive-list-of-practice-content-50e1a6f4f498)**.

(Under **PSETS** in particular. NB: you will need to make an account for [Samantha](http://samantha.fewd.us/#/), an in-browser code editor that Taq built)
