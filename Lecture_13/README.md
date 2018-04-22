### Lecture 13
#  Events, Examples, Practice
### Taq Karim

*Senior Software Engineer*, ** [Intersection](https://www.intersection.com/)**

---

## Objectives

* Register and trigger event handlers
* Build simple UI widgets using DOM API and event handling

---


## Agenda

* Final Project Proposals
* Homework
* Event Handling
* Example UI
* Practice

---

## Final Project Proposals

**REMINDER**: Your final project proposals are due today!

---

## Homework

**[Homework](https://github.com/mottaquikarim/JavaScriptDevelopmentRemote/tree/master/Homework_2)** will be due **next Monday** April 30th! 

**NOTE**: You are on the hook to solve **Second Pass** and **Third Pass**. (We will cover **First Pass** either tonight or this week...)

---


## Event Handling

-

We use event listeners, also called event handlers, to designate certain code to run based on `events`.

-

There are built-in events for things that happen on our page, *e.g.* click, hover, submit, page finished loading, etc.

-

Common events are: `submit`, `click`, `mouseenter`, `mouseleave`, `load`. 

You can find a full list of events **[here](https://developer.mozilla.org/en-US/docs/Web/Events)**.

-

### addEventListener()
```
element.addEventListener(type, listener);
```

-

We can attach a `listener`, a function to run when the `event` occurs, to an `element` on the page.

-

We can retrieve the `element` using the methods mentioned previously, *e.g.* `document.querySelector()`.

-

### addEventListener() Example
```
<a href="https://www.google.com/" target="_blank" rel="noopener">
    Click Me!
</a>
```

```js
const anchorElem = document.querySelector("a");
// The parameter `event` is an object with information
// about the mouse click.
anchorElem.addEventListener("click", event => {
    // There are some default actions associated
    // with an element.
    // For anchor tags, we're taken to a new page.
    // We need to disable that default behavior
    // using `preventDefault()`
    event.preventDefault();
    console.log("You clicked the anchor tag!");
});
```

-

### Exercises

Create the following files:

1. **index.html**, create a simple **text** input field and a **button**.
2. **app.js**, write an event listener for your **button** that, when triggered will `console.log` out the contents of your **input** field.

(No need to create a js folder for now, this is a quick exercise)

-

Consider **[this repo](https://github.com/FEWDMaterials/javascript_psets)**. Download and open the **simple_events_review** folder. Complete the  ask in **js/app.js** file.

Solve twice, once **without** jQuery and then again **with** jQuery.

-

Consider **[this repo](https://github.com/FEWDMaterials/javascript_psets)**. Download and open the **dragging** folder. Think about how you would implement dragging functionality

Solve twice, once **without** jQuery and then again **with** jQuery.


---

## Example UI

As a class, let's build the **First Pass** from the **[Homework](https://github.com/FEWDMaterials/ShoppingListUI)**.

---

## Practice

Let's build a few simple UI elements

-

### [Simple Popup](https://github.com/FEWDMaterials/simplepopup)

Instructions are in the **README**. Remember to look through and properly use the given CSS code and javascript code!

-

### [Simple Accordion](https://github.com/FEWDMaterials/simpleaccordion)

Instructions are in the **README**. Remember to look through and properly use the given CSS code and javascript code!

-

### [Simple Cash Register](https://github.com/FEWDMaterials/simplecashregister)

Instructions are in the **README**. Remember to look through and properly use the given CSS code and javascript code!
