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