// empty object literal
const myObj = {};

// object with prefilled values
const myObj2 = {
    "property1": "value1",  // notice the colon!
    "property2": 2, // notice the comma!
}

// updating an object after the fact
myObj2["property3"] = true;

console.log(myObj2);
//  what do you expect to see?
console.log(typeof myObj2); 

 // what do you expect to see?
console.log(typeof myObj2["property1"]);

// how about now?
console.log(typeof myObj2["thisPropertyDoesntExistTho"]);

if (typeof myObj2["thisPropertyDoesntExistTho"] === "undefined") {
	console.log('LOL thisPropertyDoesntExistTho doesnt exist tho')
}
else {
	console.log('thisPropertyDoesntExistTho actually DOES exist tho')
}

myObj2.foobar = 'baz';

const myObj3 = {
    test: 1,
}

console.log(myObj3.test)

const o = {
    "test": 1,
}

const key = "test";
console.log(o[key]);


const key2 = "baz";
const p = {
    [key2]: 'val',
}
console.log(p); // what key is stored in o?

const belle = {
	fullName: "Annabelle Lee",
	age: 10,
	isCute: true,
	speak: () => {
		return "meow";
	}
}

console.log('-----------')
console.log(belle.speak())
console.log('-----------')

const human = {
    'name': 'Taq Karim',
    'speak': catchphrase => {
            return "Hi, my name is " + 
                human.name + 
                '. ' + 
                catchphrase;
        }
}

console.log('-----------')
console.log(human.speak('BOOM. We chillin'));
console.log('-----------')

const validatePlayerChoice = player => {

	const choices = {
		"r": true,
		"p": true,
		"s": true,
	}
	
    player = player.toLowerCase().substring(0,1);

    if (typeof choices[player] === "undefined") {
        throw new Error("INVALID INPUT: player " + player)
    }
    return player;
}















































