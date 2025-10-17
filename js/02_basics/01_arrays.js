// arrays
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies)

// Shallow Copies - A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.

// Deep Copies - A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.

// yani shallow copies mein agar change karenge toh original mein bhi change hoga
const myArr = [1, 2, 3, 4, 5, true, "Parth"]
const myHeroes = ["Shaktimaan", "Nagraj"]

const mrArr2 = new Array(0,1,2,3,4,5)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()

myArr.unshift(0)
// console.log(myArr);
myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(true));

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// slice, splice
console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
