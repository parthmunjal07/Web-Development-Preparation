// Primitive data types
// 7 categories: String, Number, Boolean, null, undefined, symbol, BigInt

// Reference (Non Primitve) data Types
// Arrays, objects, functions
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail
const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id === anotherId)

const bigNumber = 123456789098754321n

// JavaScript is a dynamically typed language like python
// Arrays, objects, functions
const heroes = ["shaktimaan", "naagraj", "doga"]
let myObj = {
    name: "parth",
    age: 18,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);
// use this -- https://262.ecma-international.org/5.1/#sec-11.4.3

// *******************************************************************

// Memory - Stack (Primitive), Heap (Non-primitive)

let myYoutubeName = "Parth Munjal"

let anothername = myYoutubeName
anothername = "codewith_him.exe"

console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email: "user1@google.com",
    upi: "user123@ybl"
}

let userTwo = userOne
userTwo.email = "user2@meta.com"

console.log(userOne.email);
console.log(userTwo.email);
