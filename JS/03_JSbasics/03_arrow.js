const user = {
    userName : "Mubaraka",
    price : 1000,
    welcomeMessage : function(){
        console.log (`${this.userName} , Welcome to website`)
        console.log(this);
    }

}

// user.welcomeMessage()
user.userName = "Maria"
// user.welcomeMessage()

// console.log(this);


function chai(){
    let userName = "Moonira"
    // console.log(this);
    console.log(this.userName);
}

// chai()

// const chai2 = function(){
//     let userName = "Moobaraka"
//     console.log(this.userName);
//     console.log(this);
// }

const chai2 = () => {
    let userName = "Moobaraka"
    // console.log(this.userName);
    console.log(this);
}
// chai2()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2) 
console.log(addTwo(6,7)); 

const name = () => ({username: "Mubaraka"})
// const name = () => {username: "Mubaraka"}

console.log(name());
