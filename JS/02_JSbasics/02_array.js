let fruits = ['banana', 'apple', 'pineapple']
let vegetables = ['onion', 'tomato', 'cucumber', 'capsicum']

// let fruitz = ['banana', 'apple', 'pineapple', 'strawberry']
// let basket = fruitz.push(vegetables)
// console.log(basket);
// console.log(fruitz);

let myBasket = fruits.concat(vegetables)
console.log(myBasket);

let myNewBasket = [...fruits, ...vegetables]
console.log(myNewBasket);

let arr = [0, 1, 2, [2, 3], 4, [1, [2, 3,[1, 2,[2, 4]]]]]
let newFlatArr = arr.flat(Infinity)

console.log(arr);
console.log(newFlatArr);

console.log(Array.isArray("Mubaraka"));
console.log(Array.from("Mubaraka"));
console.log(Array.from({name:'muba', age:20}));

console.log(Array.of(1,3,6));

score1 = 5
score2 = 10
score3 = 15
console.log(Array.of(score1, score2, score3));