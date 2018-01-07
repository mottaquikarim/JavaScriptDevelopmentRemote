/*
    @func capitalizeEachWordWithExceptions
    @param {string} str
    @param {array} exceptions
    @returns {string}

    @desc - returns string with each WORD capitalized EXCEPT the exceptions
    @example - capitalizeEachWord(
                'the cow and a fox went on the trip', 
                ['the', 'and', 'a', 'on']
               )
               // 'The Cow and a Fox Went on the Trip'
*/

const capitalizeEachWord = (str, exceptions) => {
    console.log(str, exceptions);
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (exceptions.indexOf(words[i]) == -1) {
            words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1);
        }
        
    }

    return words.join(" ");
}

console.log(capitalizeEachWord('the cow and a fox went on the trip', ['the', 'and', 'a', 'on']))