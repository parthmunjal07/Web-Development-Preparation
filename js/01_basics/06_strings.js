const name = "Parth"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and me repocount is ${repoCount}`);
const gameName = new String("Parth-PM-game")

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newString1 = "   Parth   "
console.log(newString1.trim());

const url = "https://parth.com/parth%20munjal"
console.log(url.replace('%20', "-"))

console.log(url.includes("sundar"))
console.log(gameName.split('-'))