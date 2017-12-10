# Lecture 4: Functions and Scope

### Taq Karim
Senior Software Engineer, Intersection

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
* Rock Paper Scissors Lab

---
## Introduction to Functions
A function is a reusable statement, or a group of reusable statements, that can be called anywhere in a program*****. This avoids the need to rewrite the same statement(s) over and over again.

&nbsp;

Functions also enable us to divide a large, unwieldy piece of code into smaller, more manageable pieces.

&nbsp;

*****As long as we have access to it.

---
A critical component of programming, functions address a key tenet of engineering: Don't Repeat Yourself, or **DRY**.

&nbsp;

Our goal is to create programs with as few lines as possible, while maintaining clarity.

---
In JavaScript, functions are considered **first-class citizens**.

As a consequence, JavaScript also has **higher-order** functions.

---
In JavaScript, every function:

* is an an `object`*****
* can have properties*****
* has a link to its constructor method*****
* can be stored in a variable
* can be returned from another function*****
* can be passed into another function as an argument*****

&nbsp;

***** We'll go over these concepts at length in later classes.

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
} // no semicolon
```

&nbsp;

### Function Expression
```js
var speak = function(words) {
  console.log(words);
}; // notice the semicolon
```

---
Both methods share similarities, but only function declarations allow us to call the function before it's defined.*****

&nbsp;

*****We'll see why later. It's related to a concept called hoisting.

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

var speak = function(words) {
  console.log(words);
};
// TypeError: undefined is not a function
```

---
### Function Declaration Syntax
Function declarations have the following:

* a name for the function after the `function` keyword
* statements inside the the function body (which get executed every time the function is called) inside the `{}`
* an optional list of parameters inside `()` with multiple parameters separated by a comma

&nbsp;

What is the name, statement(s), and parameters for the function declaration below?
```js
function speak(words) {
  console.log(words);
}
```

---
### Calling Functions
Calling, or invoking, a function executes the code defined inside the function.

&nbsp;

Defining and calling a function are two different acts. A function will not be called when it's defined*****.

&nbsp;

*****We'll see how to immediately invoke a function expression in a later class.

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
*****We'll talk about objects in-depth later.

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
    console.log('Hello ' + name);
}

// 'Mark' is an argument
sayHello('Mark');
//=> 'Hello Mark'

sayHello('Steven');
//=> 'Hello Steven'
```

---
**Parameters** refer to the variables defined in the function's declaration. **Arguments** refer to the actual values passed into the function when it's called.

```js
function fn(param) {
    //param is the parameter
}

fn(arg);
//arg is the argument
```

Note that parameters from one function will never affect parameters in another function as long as they're not nested. Parameters are local to each function.
---
Use a comma-separated list to write a function with more than one parameter. Each **p**arameter **p**arks its **p**lace for the argument passed in when the function is called.

```js
function sum(x, y, z) {
  console.log(x + y + z);
}

sum(1, 2, 3);
//=> 6

// With those arguments
// what are the values of x, y, and z inside sum?
```

---
JavaScript functions don't perform type checking. We can't specify the type of a parameters when defining the function.

&nbsp;

To prevent errors, we can write checks to verify the types are correct. We'll almost always use the same type***** for the same parameter every time we call the function.

&nbsp;

*****The parameters in the function definition can be of different types.

---
## Return Statement
If we want to update a variable using values computed in a function or pass it into another function, we'll use a `return` statement.

&nbsp;

Using the `return` statement ends the function's execution and "spits out" the value we're returning.

&nbsp;

By default, all functions in JavaScript return `undefined`. Even if we don't have the `return` keyword in our function body, it will return `undefined`.

---
### Storing Returned Value in Variable
```js
function sum(x, y) {
    return x + y;
}

var z = sum(3, 4);
//=> 7 // returned from sum(3, 4);

console.log(z);
//=> 7 // assigned to variable z
```

---
### Passing a Function Call into a Function Call
```js
var num = sum(3, 4);
//=> 7

function double(x) {
    return x * 2;
}

var numDouble = double(num);
//=> 14

// We can write the above with:
var numDouble = double(sum(3, 4));
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
  var numOne = 1;
  var numTwo = 2;
  console.log(words);
}
//what will speak("hi") return?
```

---
### Tweet Length Check Function

```js
function isTweetInRange(text, longerSizeEnabled) {
  var longerSize = 280;
  var defaultSize = 140;
  var maxLength = longerSizeEnabled ?
    longerSize : defaultSize;

  return text.length <= maxLength;
}

isTweetInRange("Hello World");
//=> true
```
---
### Cities Markup Function

```js
var cities = ["NYC", "SF", "Sydney", "London"];

function getSingleLocationMarkup(location) {
  return "<div>" + location + "</div>";
}

function getLocationsMarkup(locations) {
  var markup = locations.map(getSingleLocationMarkup);
  // equivalent to below!
  // var markup = locations.map(function(location) {
  //   return "<div>" + location + "</div>";
  // });
  return markup.join("");
}

getLocationsMarkup(cities);
```

---
## Introduction to Scope
Scope is a concept present in programming languages. It refers to the current context of execution, with context being which values can be referenced.

&nbsp;

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

&nbsp;

We would call such a variable a **global** variable.

&nbsp;

Global variables are bad practice because it's easy to accidentally overwrite the value of a variable. Any function or expression on the page can reference and alter a global variable.

---
The environment for global variables is accessible via the **global** object. In the browser, this is the `window` object. In `Node`, it's the `global` or `GLOBAL` object. All global variables are attached to the global object.

```js
// message is part of the global scope
var message = "Hi Students!";

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

&nbsp;

We don't want to pollute the global **namespace**.

&nbsp;

We'll soon see how we can create namespaces to organize our code. Namespacing is a way for us to prevent collisions with other objects or variables.

---
### Local Scope
We create a new scope whenever we declare a function. Inside the function body, we have access to variables declared inside of that function and in the outer scope. Any variables declared inside of that function are local to it. *****

&nbsp;

*****A function nested inside of a function has access to the outer function's variables.

---
```js
var globalNum = 1;
function scopeHelper() {
    var localNum = 2;
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
A function can access variables of the parent scope. Therefore, a function defined in the global scope can access all the variables defined in the global scope*****.
```js
// Global Scope
var prefix = "Hello";

// sayHello is defined in the global scope
function sayHello(name) {
    // prefix was defined in the global scope
    console.log(prefix + " " + name);
}

sayHello("JavaScript");
=> "Hello JavaScript";
```
***** If it's a function declaration, we can also call it anywhere that has access to the global scope.

---
### Nested Function Scope Example
When a function is defined inside of another function, it's possible to access variables defined in the outer function from the inner function:
```js
var numOne = 1;

function getScore() {
  var numTwo = 2;
  var numThree = 3;

  function add() {
      return numOne + numTwo + numThree;
  }

  return add();
}

getScore();
//=> 6
```

---
![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
## Rock Paper Scissors Lab

---
## Rock Paper Scissors Lab
Please work in groups of 2-3.

&nbsp;

The instructions are in `app.js` in the starter code folder. You can use `node` or `repl.it`.
