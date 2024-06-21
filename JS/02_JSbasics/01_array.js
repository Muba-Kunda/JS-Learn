let myArr = [1, 2, 3, 4, 5]
let myHeros = ["batman", "superman"]
let myMixUpArr = [1, true, "hello", [1, 2], {name: "xyz", age: 20}]

console.log(myArr);
console.log(myArr[1]);
console.log(myMixUpArr[4].name);
console.log(myMixUpArr[4]["age"]);

let myArr2 = new Array(2, 4, 6, 8)

myArr2.push(8)
myArr2.push(10)
console.log(myArr2);
myArr2.pop()
console.log(myArr2);

myArr2.unshift(10)
myArr2.unshift(20)
console.log(myArr2);
myArr2.shift()
console.log(myArr2);

console.log(myArr2.includes(5));
console.log(myArr2.includes(8));

console.log(myArr2.indexOf(5));
console.log(myArr2.indexOf(8));
console.log(myArr2.indexOf(10));


console.log(`before Slice: ${myArr2}`);
console.log(myArr2.slice(1,4));
console.log(myArr2.slice(3));
console.log(myArr2.slice(-4));
console.log(myArr2.slice(0,4));

console.log("after Slice & before splice: ", myArr2);

console.log(myArr2.splice(1,3));
console.log(`after Splice: ${myArr2}`);

console.log(myArr2);
console.log(myArr2.join());
console.log(myArr2);

n = myArr2.join()
console.log(n);

