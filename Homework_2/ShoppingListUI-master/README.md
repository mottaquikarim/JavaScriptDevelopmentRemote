# ShoppingListUI
Simple to feature rich shopping list UI lab


## Requirements

👇👇👇


Here are the main features we would like to accomplish in our UI

👇

### First Pass

* Input field for adding items to list
* On button click **or** enter key press, item is added to list
* When added, item immediately shows up on page



### Second Pass

* Items can be edited
* Items can be deleted
* On adding items we clear the input field


### Third Pass

* Input field for item price
* On adding item, total price is calculated


### Multiple Items

Add support for adding multiple items. 

* devise a UI that will allow users to add multiple items (and prices) at once.
* come up with a way for user to easily add 2+ items at a time.
	* Implementation is up to you, be creative!


### Validation

add support for validating the item and price fields.

* if item is empty or less than three characters, do not add the item to list, display error to user. 
* if price is empty or 0, display error to user. 
* 
* **NOTE** must also work for bulk adding case.


### [Local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

Using this browser feature, implement way for shopping list to persist along page refresh.


### Coupons

Devise a method that will allow user to apply a coupon (e.g. 25% off) to the total price of items at any time. 

* User should be able to pick which items to apply the coupon to
* User should be able to visually see that a coupon has been applied
* User should have the ability to remove the coupon discount at any time


### Max Budget

Allow user to input a **MAX BUDGET**. 

* If total price of items surpasses max budget, each item added afterwards should be visually distinguishable
* User should have the ability to select various items and visually determine if they fit within budget


### Challenge

* Using the **[myjson](http://myjson.com/)** service, implement storage scenario where the list is accessible on any device. 
* Note, we do not know how to do authentication yet, so assume there is only one user - you.


### Challenge 2

* See if you can use **[this](https://serratus.github.io/quaggaJS/examples/static_images.html)** javascript library to build in a barcode scanner. 
* If you want, you can use **[this](https://www.barcodelookup.com/)** site to "look up" the code and try to determine the product

This one is super hard but result could be a **real** app that people could use, fam...

