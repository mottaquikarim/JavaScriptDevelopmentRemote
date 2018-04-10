const dynKey = "getAge";
const human = {
    'name': 'Taq Karim',
    'birthday': new Date(1990, 7, 2),
    speak(catchphrase) {
            return `Hi, my name is ${human.name}. ${catchphrase}.`
    },
    [dynKey]() {
        return (Date.now() - human.birthday.getTime()) / (1000 * 60 * 60 * 24 * 365);
    }
}

console.log(human.speak('BOOM. We chillin'));
console.log(human.getAge());
