// let score = "33"
// let score = "33a"
let score = null

console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) // NaN => Not a Number

// "33" => 33
// "33abc" => NaN(Number)
// true => 1; false => 0

let isLoggedIn = "ydutdrdry"
let isBooleanLoggedIn = Boolean(isLoggedIn)
console.log(isBooleanLoggedIn)

// 1 => true; 2=> false
// "" => false; "Parth" => true
let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)

// ************************* Operations ************************

let value = 3
let negValue = -value
// console.log(negvalue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "Hello"
let str2 = " Parth"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + "2" + 2)

console.log( (3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(++gameCounter);
