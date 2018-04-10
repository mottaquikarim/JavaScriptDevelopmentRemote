/*
    @func getSuperHero
    @param {string} name
    @param {string} alterEgoName
    @param {boolean} isVillain
    @param {number} age
    @returns {object}
    @desc - takes in the params and returns an object
            that describes superhero
    @example - 
        getSuperHero('Batman', 'Bruce Wayne', false, 31);
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
*/

const getSuperHero = (name, alterEgoName, isVillain, age) => {
    return {
        name,
        isVillain,
        age,
        reveal() {
            return alterEgoName;
        }
    };
};

const spidey = getSuperHero('spiderman', 'peter parker', false, 21);
spidey['foo'] = true;
console.log(spidey)
console.log(getSuperHero('green goblin', 'harry osborne', true, 21));

/*
    @func updateSuperHero
    @param {object} superHero
    @param {string} keyName
    @param {anything} keyValue
    returns {object}
    @desc - takes an existing superhero object
            and adds a new property to it
            
    @example - 
        const batman = {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
        updateSuperHero(batman, 'likesBats', true);
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31,
            likesBats: true
        }
*/


const updateSuperHero = (superHero, keyName, keyValue) => {
    const superHeroCpy = {};
    for (const key in superHero) {
        superHeroCpy[key] = superHero[key]
    }
    superHeroCpy[keyName] = keyValue;
    return superHeroCpy;
}

const ironSpidey = updateSuperHero(spidey, 'ironSuit', true);
console.log(ironSpidey, spidey)

updateSuperHero(ironSpidey, 'foobar', 'baz')
console.log(ironSpidey.foobar, spidey.foobar)

const ironSpidey2 = updateSuperHero(spidey, 'ironSuit', () => {
    return true;
});
console.log(ironSpidey2)

/*
    @func updateSuperHeroAction
    @param {object} superHero
    @param {string} actionName
    @param {function} actionFunc 
    @returns {object}
    @desc - takes an existing superhero object
            and adds a new FUNCTION property to it 
    @example - 
        const batman = {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
        updateSuperHero(batman, 'saySomething', function saySomething() {
            return "I'm Batman";
        });
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31,
            saySomething: function saySomething() {
                return "I'm Batman";
            }
        }   
*/

const updateSuperHeroAction = (superHero, keyName, keyValue) => {
    if (typeof keyValue !== "function") {
        throw new Error('we expect an ACTION which is a function')
    }
    
    return updateSuperHero(superHero, keyName, keyValue)
}








