// sigleton object 
// object.create

const mySym = Symbol("myKey")
console.log(mySym);

// literal object
const userObj = {
    name: "Mubaraka",
    "full name": {
        userFullName:{
            firstName : "Mubaraka",
            lastName : "Kundawala"
        }
    },
    [mySym] : "key1",
    age : 20,
    location: "Dahod",
    email : "muba@gmail.com",
    loggedIn : false,
    lastLoggedIn : ["Friday", "Saturday", "Monday"]
}

// console.log(userObj.name);
// //  console.log(userObj[name]); // error - wrong syntax
// console.log(userObj["name"]);

// console.log(userObj["full name"]);
// console.log(userObj["full name"]['userFullName']);
// console.log(userObj["full name"].userFullName["lastName"]);

console.log(userObj.mySym);
console.log(userObj[mySym]);

userObj.email = "mubaraka@chatgpt.com"
// Object.freeze(userObj)
userObj["email"] = "mubz@microsoft.com"

console.log(userObj);

userObj.greetings = function(){
    console.log("hello, greetings of the day!");
}

userObj.greetingTwo = function(){
    console.log(`hi ${this.name}, how are you?`);
}

// console.log(userObj.greetings);
// console.log(userObj.greetings());
// console.log(userObj.greetingTwo);
// console.log(userObj.greetingTwo());
