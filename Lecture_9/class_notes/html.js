/*
    <div class="foo bar" id="LOL-donttrythis-at-home" data-test="1"></div>
*/

const htmlNode = {
    tagName: 'div',
    attributes: {
        'data-test': '1',
        'id': 'LOL-dont-try-this-at-home',
        'class': 'foo bar',
    },
    getAttribute(name) {
        return htmlNode.attributes[name];
    },
    setAttribute(name, value) {
        htmlNode.attributes[name] = value;
    },
    classList: {
        add(name) {
            const currClass = htmlNode.getAttribute('class').split(' ');
            currClass.push(name);
            htmlNode.setAttribute('class', currClass.join(' '))
        }
    },
}

htmlNode.classList.add('LMAO');
// console.log(htmlNode)

const validPlayerChoices = {
    'r': true,
    'p': true,
    's': true,
}

const validatePlayerChoice = (player) => {
    // remove bias for case insensitivity
    const lp = player.toLowerCase();

    // remove bias for misspelled choices
    const c = lp.substring(0,1);

    // if (!validPlayerChoices[c]) {
    if (typeof validPlayerChoices[c] === "undefined") {
        throw new Error("INVALID INPUT: player " + c)
    }

    // if we are here, then player is VALID and it is either
    // "r", "p", "s"
    return c;
}

validatePlayerChoice('RoCC')
validatePlayerChoice('r')
validatePlayerChoice('M')




