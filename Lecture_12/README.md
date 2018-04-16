### Lecture 12
#  jQuery Plugins
### Taq Karim

*Senior Software Engineer*, ** [Intersection](https://www.intersection.com/)**

---

## Objectives

* Practice and acquaint ourselves with jQuery
* Understand how to leverage jQuery plugins into webapp

---


## Agenda

* Warmup
* jQuery Plugins
* Exercises

---

## Warmup

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

---

## jQuery Plugins

jQuery boasts a very comprehensive plugins library, which is probably the only reason it remains relevant today.

-

### What is a plugin?

Functions written by third party developers that allow you to get complex UI components into your page easily. 

-

Generally plugins are written to work within the conventions and constraints of an existing library, for example, like jQuery.

-

When using plugins, we tread the third party developed functions as if they were a part of the library itself, even though they were added "after" the fact.

-

### Loading plugins

For jQuery in particular - but also in for plugins in general - first load the main library, then load the plugin, **then** load your implementation code that will leverage the library **and** the plugin

-

Example

```html
<!-- load jquery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!-- load plugin -->
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.8.0/slick.min.js"></script>
<!-- load implementation code -->
<script src="js/app.js"></script>
```
Optionally, and in particular for jQuery libs, you may need to **also** load some CSS files. Load those in the **`<head>`** tag as you would other CSS resources.

-

### Considerations before choosing a plugin


* Does it have good documentation?
* How many stars does it have on github? (Or, have others used it? Is it written by a reputable company? etc)
* When was the last time it was updated? Is it in active development? Is it a dead project?
* How many bugs does it have reported?
* Does it actually do what you want? Is it easy to get the functionality that you need?

-

### [jQuery Plugin Mecca](http://www.unheap.com/)

-

Let's implement **[this](http://kenwheeler.github.io/slick/)** plugin together.

---

## Exercises

Given the SlickJS implementation, build the following variations

👇👇👇

-

From the settings, add any three properties to the intialization of Slick. Observe and ensure that they work as expected.

-

Build your own prev/next buttons using slick methods

-

Have a slideshow that jumps from one slide to the next randomly, again using the slick methods

-

Set up two slideshows - one that autoplays and one that does not. When the autoplay slideshow moves, trigger a movement on the non-autoplay slideshow using slick events



