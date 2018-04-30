### Lecture 15
# Dynamic Apps / Asynchronous JavaScript
### Taq Karim

*Senior Software Engineer*, ** [Intersection](https://www.intersection.com/)**

---

## Objectives

* Consider how dynamic (ie: data rich) apps are structured and built
* Understand basics of asynch javascript

---


## Agenda

* Warm up
* Dyanmic Apps
* Exercise 1
* Exercise 2

---

## Warm up

![woohoo](https://media3.giphy.com/media/31lPv5L3aIvTi/giphy.gif)

👇👇👇

-

### Giphy Search Engine

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

How do we actually *query* GIPHY tho? In order to achieve this functionality, we will need to learn about **Web APIs** and **AJAX**.


---

## Dynamic Apps

By **Dynamic App** we mean an app that reaches out to a data provider (ie: giphy, facebook, twitter, etc) to fetch up to data information for display / interactivity.

-

We are able to achieve this functionality thanks to two technologies:

* Web APIs
* AJAX

-

### Web APIs

A Web API is a list of web urls that third party developers can invoke to perform tasks on data. Really, these urls are mapping directly to functions defined in the data source's code base.

Invoking the URL will call the underlying functions provided that the URL invocation is valid.

-

Typically, data sources will require users to register as a "developer" and sign up for minimally an **API key** that can be used loosely as an identifier for the developer. 

-

This allows the data source to monitor usage and optionally, **rate limit** or block invocations if abuse is detected.

Therefore, the first step towards integrating with a web API is to **sign up for an API key**. Not all services require this but **most** usually do.

-

The web URLs themselves pertain to one of four actions:

* Create
* Read
* Update
* Delete

or, **CRUD** for short.

-

### `CRUD` and HTTP Verbs

Even though we haven't explicitly used the term `CRUD` before in this course, we've done some of the work involved with implementing `CRUD`. 

The actions Create, Read, Update, and Delete correspond directly with the HTTP verbs `POST`, `GET`, `PUT`, and `DELETE`.

-

| HTTP Method | CRUD   | Explanation                                                                                                                        |
|:------------|:-------|:-----------------------------------------------------------------------------------------------------------------------------------|
| `POST`      | Create | Most often utilized to _create_ new resources. Upon success, returns a `201` status code.                                          |
| `GET`       | Read   | Used to _read_ a representation of a resource. Upon success, returns data in the form of `XML` or `JSON` with a `200` status code. |

-

| HTTP Method | CRUD   | Explanation                                                                                                                        |
|:------------|:-------|:-----------------------------------------------------------------------------------------------------------------------------------|
| `PUT`       | Update | Most often used to _update_ data on a server. Upon success, usually returns a `200` or `204`.                                      |
| `DELETE`    | Delete | Used to _delete_ a resources. Upon success, usually returns a `200` status code.                                   
|

-

In this course, we most likely will not use anything other than the **GET** verb mainly because on frontend systems, for security reasons, we want to discourage the ability to add or remove items.

-
### Understanding `CRUD` Through Public APIs
Now that we have an understanding of what `CRUD` is and how it's implemented by means of HTTP methods, let's spend the next few minutes researching one or more of the following APIs to find examples of how to create, read, update or delete.

In the examples you find, exactly what is being created, read, updated or deleted? For example, for the Twitter API, what HTTP method on what endpoint must we hit in order to create a post in a feed, *i.e.* tweet?

- Twitter: [https://dev.twitter.com/rest/public](https://dev.twitter.com/rest/public)
- Instagram: [https://www.instagram.com/developer/endpoints/](https://www.instagram.com/developer/endpoints/)
- YouTube: [https://developers.google.com/youtube/v3/docs/](https://developers.google.com/youtube/v3/docs/)
- Flickr: [https://www.flickr.com/services/api/](https://www.flickr.com/services/api/)


**Note:** Certain APIs may provide partial support for `CRUD` functionality. For example, they might allow you to archive items instead of allowing you to delete them.

-

### CRUD and Web APIs

Bring it all together, a web API will often publish **POST**/**GET**/**PUT**/**DELETE** methods (and optionally, **PATCH**). 

-

These verbs pertain to **CRUD** actions which define how data persisted on a DB can/should be mutated.

-

The end result of these operations are usually HTTP responses that display data in JSON or XML format.

-

### AJAX

**AJAX**, or **A**synchronous **J**avascript **a**nd **X**ML, is a protocol defined by web browsers that let us **invoke** web API calls via javascript **without** reloading the page.

-

**AJAX** works through the **XMLHttpRequest**  API provided by browsers that allow us to open network connections for making web API calls and providing callbacks for listening to the response and incorporating it back to our UI code.

-

**NOTE**: AJAX calls are always asynchronous, meaning we **always** rely on callbacks to process data returned.

-

### Concurrency

It is worth pointing out that if we make **TWO** API calls simultaneously, we are not guaranteed that the first call will finish before the second! For instance:

```js
concurrentCall1(data => {
	console.log('1 is done!')
});
concurrentCall1(data => {
	console.log('2 is done!')
});
// which happens first? is it deterministic tho?
```

	**QUESTION**: how could we ensure `concurrentCall1` would occur *before* `concurrentCall2`?

---

## Exercise 1

![woohoo](https://media3.giphy.com/media/31lPv5L3aIvTi/giphy.gif)

**Part 2**

👇👇👇

-

### Giphy Search Engine

Here are the main features we would like to accomplish in our UI.

👇

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

## Exercise 2

👇👇👇

-
### Gif Weather App

You can start with this HTML **[boilerplate](https://github.com/FEWDMaterials/boilerplate-plain)**

👇👇👇

-

**Requirements**

* Use **[OpenWeatherMap](https://openweathermap.org/api)** API to query current weather conditions for your city / locality
* Use **[GiphyAPI](https://developers.giphy.com/)** to then query for a gif that describes current weather condition returned from OpenWeatherMap.
* Once both data points have been resolved, display gif and weather conditions on screen for user



