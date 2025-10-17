const marvelHeroes = ["Thor", "Iron Man", "SpiderMan"]
const dcHeroes = ["SuperMan", "Flash", "BatMan"]

// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);

// const all_new_heroes = [...marvelHeroes, ...dcHeroes]
// console.log(all_new_heroes);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArr = anotherArr.flat()

console.log(Array.isArray("Parth"));
console.log(Array.from("Parth"));
console.log(Array.from({name: "Parth"})); // interesting ques for interviews

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
