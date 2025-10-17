// singleton (agar object constructors se bane)
// Object.create

// object literal
const mySym = Symbol("key1")

const jsUser = {
    name: "Parth",
    "full name": "Parth Munjal",
    [mySym]: "mykey1",
    age: "18",
    location: "Faridabad",
    email: "parth.munjal07@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Wednesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());

