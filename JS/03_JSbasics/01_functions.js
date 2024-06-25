function sayMyName(){
    console.log("M");
    console.log("u");
    console.log("b");
    console.log("a");
}
// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNumbers()
// addTwoNumbers(3)
// addTwoNumbers(3,4)
// addTwoNumbers(3,"2")
// addTwoNumbers(3,"a")

// const result = addTwoNumbers(3,4)
// console.log(result);


function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNumbers(2,5)
// console.log(result);


function loggedInUser(username){
    // if(username == undefined ){
    //     return 0
    // }
    if(!username){
        return 0
    }
    
    return `${username} just login`
}

loggedInUser()
// console.log(loggedInUser(""));


function calculateCartPrice(val1, ...num1){
    return num1
}
// console.log(calculateCartPrice(100,200,300,1000)); 

user = {
    name : "mubaraka",
    price : 1000
}
function handleObjects(anyObject){
    return `${anyObject.name} you have to pay ${anyObject.price} on ur purchase`
}
// console.log(handleObjects(user));

let myArr = [100,200,300]
function getSecondValue(anyArr){
    return anyArr[1]
}
console.log(getSecondValue(myArr));