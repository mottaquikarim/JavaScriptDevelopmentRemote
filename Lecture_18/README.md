### Lecture 18
#  Life after the Browser
### Taq Karim

*Senior Software Engineer*, ** [Intersection](https://www.intersection.com/)**

---

## Objectives

* Understand how to run javsacript outside of the browser context
---


## Agenda

1. Move our CRUD app into the serverside
2. Building a simple chatbot with Twilio
3. Writing scripts with NodeJS

---

## Serverside JS

**C**reate, **R**ead, **U**pdate, **D**elete

👇👇👇

-

Remember our CRUD** [ShoppingList app](https://github.com/mottaquikarim/JavaScriptDevelopmentRemote/tree/master/Lecture_17/class_notes/crud)**? 

👇👇👇

-

Let's leverage the apparent advantage of writing our code in **state** vs **render** specific UI code.

👇👇👇

-

First, we must create an account on **[WebTask](https://webtask.io/)**. After signing up, go back to the home page and click on "**Learn More**" in the "**Code Editor** card on the left.

👇👇👇

-

Create a new Webtask script with a **basic** template.

👇👇👇

-

Before doing anything with the code, explore the UI. Can you guess what the `context` variable represents? How do you "call" serverside code...? What are the inputs? The outputs? How is it different from the browser?

-

Copy the **[highlighted code here](https://github.com/mottaquikarim/JavaScriptDevelopmentRemote/blob/master/Lecture_17/class_notes/crud/javascript/shoppinglist.js#L1,L91)** and paste into Webtask (above the **module.exports** function)

👇👇👇

-

Invoke a **`ShoppingList.create`** within the **module.exports** call. What does it do? 

-

Consider the following piece of code:

```js
const express    = require('express');
const Webtask    = require('webtask-tools');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.get('/foobar',  (req, res) => {
  // res.sendStatus(200);
  res.send(JSON.stringify({'bar': true}))
});

app.get('/foobaz',  (req, res) => {
  // res.sendStatus(200);
  res.send(JSON.stringify({'bar': false}))
});

module.exports = Webtask.fromExpress(app);

```

-

What does the code above do? How can you "test" this code? 

-

**CHALLENGE**: update the code above in your webtask to perform CRUD operations over our **`ShoppingList`** object.


---


## Twilio Chatbot

Let's create a simple Texting Chat bot with JS and Webtask

👇👇👇

-

###  Requirements

Our bot will be super simple; it should:

1. Process a text message sent with webtask (we call this a **webhook**)
2. Reply back such that the initial text message sender gets a response.

👇👇👇

-

### Twilio

**[Twilio](https://www.twilio.com/)** is a software service that allows developers to purchase phone numbers for programmatic use.

👇👇👇

-

Sign up for a free **[Twilio](https://www.twilio.com/)** account. Do not pay for a phone number, your first one should be free.

We will use **[this](https://www.twilio.com/docs/quickstart/node/programmable-sms#sign-up-for-twilio-and-get-a-twilio-phone-number)** tutorial to set up our twilio chat bot.

-

### Scheduler

Using Webtask's scheduler UI, we can also have our script send us texts on a regular basis. (Great for doing lookups for train times/traffic conditions, etc for your morning/evening commutes).

---

## NodeJS Scripting

We can also write simple scripts that run on our machine

👇👇👇

-

### NannyScript

Let's write a simple script that will yell at us if we open our terminal after 9PM.

-

We can start with **[this](https://developer.atlassian.com/blog/2015/11/scripting-with-node/)**
tutorial which shows us how to install a nodejs script that can be run from terminal.

👇👇👇

-

Then, let's create a **`~/.bashrc`** file and run our node script in it. The **`~/.bashrc`** script will run every time we open terminal.

👇👇👇

-

### JS file copy

We can also write our own version of the **copy** command we always use on computers.

-

Take a look at **[fs.readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)** and **[fs.writeFile](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)**.

Are promises necessary to achieve this copy effect?

-

The **[Commander](https://github.com/tj/commander.js)** NPM module makes it very easy to pull in arguments from the command line, like so:

```js
$ copyfile-js source.txt destination.txt
```


---

## Homework

**DUE:** Weds Feb 14th.

Begin work on your final projects!
