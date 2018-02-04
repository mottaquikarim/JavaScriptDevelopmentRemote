### Lecture 16
#  AsyncJS
### Taq Karim

*Senior Software Engineer*, ** [Intersection](https://www.intersection.com/)**

---

## Objectives

* Practice and fully grokk the principle behind promises, callbacks and generally asynchronous programming
---


## Agenda

1. Basic Promise Practice Problems
2. Use Promises in Giphy Search Engine
3. Build a GIF Weather App

---

## Warmup

We will begin by refamiliarizing ourselves with _why_ it is necessary to understand and use promises in the first place.

👇👇👇

-

We will need to clone a new **[boilerplate project](https://github.com/FEWDMaterials/boilerplate-plain)**.

👇👇👇

-

### Context Setting

We will begin simply by exploring Promises as another _approach_ for handling async operations

-

### Get Random Gif

Let's make a single call out to the Giphy API and return a random, **G** rated response.

-

### Requirements

API Endpoint to hit:

```html
GET https://api.giphy.com/v1/gifs/random
```

Use **jquery**'s **GET** method:
```js
$.get('https://api.giphy.com/v1/gifs/random', data => {
	console.log(data)
});
```

PS: Don't forget to add an `api_key` query parameter

-

### Requirements (cont'd)

Update the code above so that the returned GIF object is **rendered** as an image on the page.

* Do this as a **callback** first. 
* Then, perform again, but as a **promise**.

-

### Requirements 2.0

Having implemented the random GIF retrieval, update the project so that it retrieves **TWO** GIFs in **sequence**.

-

In particular, it should:

* grab GIF 1
*  update the UI with a message saying "GIF retrieved"
*  then, retrieve GIF 2.

Once both GIFs have been retrieved, it should then and only then update the UI with both assets.

-

### Requirements 3.0

Now, repeat the implementation of the previous requirements, but this time with **5** random GIFs.

Successful completion of this task should demonstrate  - in context - **why** promises are easier to work with over callbacks.

---

## Giphy Search Engine

![woohoo](https://media3.giphy.com/media/31lPv5L3aIvTi/giphy.gif)

👇👇👇

-

Pull down **[this](https://github.com/FEWDMaterials/gifSearchEngine/tree/jsr1117_ajax)** repo.


👇

-

### Requirement

Use a promise to handle the async portion of this app (instead of having to rely on a callback).

---

## Gif Weather App

You can start with this HTML **[boilerplate](https://github.com/FEWDMaterials/boilerplate-plain)**

👇👇👇

-

**Requirements**

* Use **[OpenWeatherMap](https://openweathermap.org/api)** API to query current weather conditions for your city / locality
* Use **[GiphyAPI](https://developers.giphy.com/)** to then query for a gif that describes current weather condition returned from OpenWeatherMap.
* Once both data points have been resolved, display gif and weather conditions on screen for user

---

## Homework

**DUE:** Weds Feb 14th.

Begin work on your final projects!
