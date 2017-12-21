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
        })
*/

const generateRandNum = (s,e) => Math.floor(Math.random()*(e-s+1))+s;

// FINAL FORM: factory function
const getSuperHero = (name, alterEgoName, isVillain, age) => {
    return {
        "name": name,
        "alterEgoName": alterEgoName,
        "isVillain": isVillain,
        "age": age,
    }
};

/*

ALSO VALID
const getSuperHero = (name, alterEgoName, isVillain, age) => ({
    name,
    alterEgoName,
    isVillain,
    age,
})
*/

const spiderman = getSuperHero('Spiderman', 'Peter Parker', false, 19)
const batman = getSuperHero('Batman', 'Bruce Wayne', false, 45)
console.log(spiderman.isVillain, batman.isVillain)
console.log(spiderman, batman)

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

const updateSuperHero = (superObj, keyName, keyValue) => {
    superObj[keyName] = keyValue;
    return superObj;
}

console.log(updateSuperHero(batman, 'likesBats', true))












