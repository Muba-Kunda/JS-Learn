// primitive: (call by value)
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue =100.8

const nameOfUser = "Mubaraka"
let userEmail;
let outsideTemp = null

let bigNumber = 5656763827484987n

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
console.log(id);
console.log(anotherId);

// score = 9
// nameOfUser = 9

// console.log(bigNumber);
// console.log(typeof bigNumber);

// outsideTemp = 19

// console.table(typeof [score, scoreValue]);

// console.log(typeof score);
// console.log(typeof scoreValue);
// console.log(typeof nameOfUser);
// console.log(typeof userEmail);
// console.log(typeof outsideTemp);
// console.log(typeof bigNumber);
// console.log(typeof id);
// console.log(typeof anotherId);




// reference (non-primitive) (call by reference)
// array, object, function


let fruits = ["mango", "banana", "apple"]

const myObj = {
    name : "Mubaraka",
    age : 21
}

const myFunc = function(){
    console.log("HEllo");
}

myFunc();

console.log(typeof fruits);
console.log(typeof myObj);
console.log(typeof myFunc);

console.log(fruits);
fruits = [1, 2, 3]
console.log(fruits);

