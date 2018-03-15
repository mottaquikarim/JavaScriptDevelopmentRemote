DATATYPES:

- numbers: 1, -4, 3.141598, 22/7 - floats, 64 bit floating point number
1, 10, 53 
      - int, integer 1, 2, -5
      - float, rational number 1.414, 3.14159
      - double, float ++
- strings: "look ma! this is a string"
- boolean: true or false
- list: [100, 97, 98]
- dict: {
    'key': 'value',
}

{
  "name": "taq",
  "weight": 185,
  "isSleepy": false,
  "sibling": {
    "name": "rumman",
  }
}

Declarations:
x = 100000

...
x = -1
...

x

EXPRESSIONS:

1. expressions operate over valid datatypes
2. expressions will EVALUATE to a new value
3. in general we have a concept of operators which are the vehicles of our expressions

DATATYPE: NUMBER

2 + 3 = 5
2 - 3 = -1
2 * 3 = 6
2 / 3 = .666666666

DATATYPE: STRING

"abc" + "def" = "abcdef" - concatenation

abc = 2 // datatype: number
def = 3 // datatype: number

abc + def = 5
2  + 3 = 5

str1 = "2" // datatype: string
str2 = "3" // datatype: string

str1 + str2 = "23" // parseInt()

DATATYPE: LIST

[2] + [1] = [2,1]

------
item1 = 1.30
item2 = 7.00
item3 = 3.00

total = item1 + item2 + item3 // 11.30
----

item1 = 1.30
item2 = 5.00
isItem2TooExpensive = item2 > 7

if isItem2TooExpensive
    item2 = 0

item3 = 3.00

total = item1 + item2 + item3 // 11.30






let list = [1,2,3]
undefined
list
(3) [1, 2, 3]
typeof list
"object"
let sat_vocab = {
    "conflagration": "fire",
}
undefined
typeof sat_vocab
"object"
list[0]
1
typeof list[0]
"number"


var a = 1;
undefined
a
1
let b = 2
undefined
b
2
const c = 3.14159
undefined
c
3.14159
b = 5
5
b
5
c = 9


console.log(c)
let c = 1;
VM547:1 Uncaught ReferenceError: c is not defined
    at <anonymous>:1:13

console.log(c);
var c = 1;
VM595:1 undefined

{
let c = 1;
}
console.log(c)
VM633:4 Uncaught ReferenceError: c is not defined
    at <anonymous>:4:13
(anonymous) @ VM633:4
{
var k = 1
}
console.log(k)
VM677:4 1
undefined

const a;
VM757:1 Uncaught SyntaxError: Missing initializer in const declaration

const $foo = 'bar';
undefined
$far

$foo
"bar"
const _foo = "bar"

_foo
"bar"

parseInt("5")
5
parseInt(":5")
NaN
typeof NaN
"number"

isNaN(5)
false
isNaN(NaN)
true
isNaN(":5")
true

parseInt(":5")
NaN
parseInt("5:")
5
parseInt("5678:")
5678
parseInt(":5678:")
NaN
parseInt("11", 10)
11
parseInt("11", 4)


3 ^ 5
6
3 * 3 * 3 * 3 * 3
243
Math.pow(3, 5)
243
3 ** 5
2435

Math.floor( s + Math.random()*(e-s+1) )

for (let i = 0; i < 200; i++) {
    console.log(Math.floor( s + Math.random()*(e-s+1) ));
}

const hiMyNameIs = "Slim Shady"
undefined
hiMyNameIs
"Slim Shady"
const navBar = "
<nav>
    <a href="https://www.google.com">Home<\/a>
<\/nav>
"
VM1968:1 Uncaught SyntaxError: Invalid or unexpected token
const navBar = "" +
"<nav>" +
    "<a href=\"https://www.google.com\">Home<\/a>" +
"<\/nav>"
"
VM1970:5 Uncaught SyntaxError: Invalid or unexpected token
const navBar = "" +
"<nav>" +
    "<a href=\"https://www.google.com\">Home<\/a>" +
"<\/nav>"
undefined
navBar
"<nav><a href="https://www.google.com">Home</a></nav>"
const navBar = "" +
"<nav>" +
    "<a href=\"https://www.google.com\">Home<\/a>" +
"<\/nav>"
VM1988:1 Uncaught SyntaxError: Identifier 'navBar' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM1988:1
const navBar2 = `
<nav>
    <a href="https://www.google.com">Home</a>
</nav>
`
undefined
navBar2
"
<nav>
    <a href="https://www.google.com">Home</a>
</nav>
"

"foobar".replace(/o/g, 'k')
"fkkbar"

const randomLink_n = list[Math.floor(Math.random()*list.length)]
let randLink5 = `
<nav>
    <a href="${randomLink_n}">Home</a>
</nav>`
