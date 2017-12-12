const nounArr = ['cat', 'hotdog', 'wallaby','cat', 'hotdog', 'wallaby','cat', 'hotdog', 'wallaby'];
const verbArr = ['ate', 'stole', 'destroyed','ate', 'stole', 'destroyed','ate', 'stole', 'destroyed','ate', 'stole', 'destroyed'];
const adjectiveArr = ['quickly', 'slowly', 'casually','quickly', 'slowly', 'casually','quickly', 'slowly', 'casually','quickly', 'slowly', 'casually'];

const randomNoun = Math.floor(Math.random()* nounArr.length);
const randomVerb = Math.floor(Math.random()* verbArr.length);
const randomAdjective = Math.floor(Math.random()* adjectiveArr.length);

const template = `
    My ${nounArr[randomNoun]} ${verbArr[randomVerb]} my homework ${adjectiveArr[randomAdjective]}
`;

console.log(template);