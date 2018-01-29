### Lecture 14
#  APIs 1.0
### Taq Karim

*Senior Software Engineer*, ** [Intersection](https://www.intersection.com/)**

---

## Objectives

* Understanding how to query dynamic data with javascript
---


## Agenda

1. Implement a simple jQuery plugin
2. Giphy search engine

---

## Warmup

First, let's begin by implementing something with the **[slick js plugin](http://kenwheeler.github.io/slick/)**. You can start with this HTML **[boilerplate](https://github.com/FEWDMaterials/boilerplate-plain)**

👇

-

**Requirements**

* When page loads, a SlickJS powered slideshow should show up on the page
* Slideshow should have 6 slides (can be images, text, whatever)

**NOTE**: do not worry about our render / state technique for this exercise

👇

-

**Requirements 2.0**

* Implement two buttons that trigger slideshow **next** and **prev** commands
* Implement a callback function that will **`console.log`** or display on screen a message when the user **swipes** the slideshow
---

## Giphy Search Engine

![woohoo](https://media3.giphy.com/media/31lPv5L3aIvTi/giphy.gif)

👇👇👇

-

Here are the main features we would like to accomplish in our UI.

👇

-

### Set up

Please clone **[this](https://github.com/FEWDMaterials/boilerplate-plain)** github repo.

👇

-

### First Pass

* Input field for querying Giphy API
* On button click **or** enter key press, trigger a function call that starts timer (stubbing API call for now)
* When timer runs out, display something on the screen

-

### Second Pass

* Read and grok **[Giphy API](https://developers.giphy.com/docs/)** docs
* Pull in a sample API response and use that to mock a single result set in browser
* IE: regardless of what user types in, always display results for a certain query (ie: pandas, let's say) to the browser window (with the images rendering)

-

### Third Pass

* Figure out how to make API calls in javascript
* Make an appropriate API call to giphy search API to display real results to browser

---

## Homework

**DUE:** Weds Feb 14th.

Begin work on your final projects!

