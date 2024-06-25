var c = 50
var c = 100
let a = 500
{
    let a = 1
    // console.log("Inner a : ",a);
    // let a = 11
    const b = 2
    // const b = 3
    // b = 4
    var c = 3
    c = 4
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    username = "Muba"
    function two(){
        let website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "Mubaraka"
    if(username == "Mubaraka"){
        let website = " Youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(website);
// console.log(username);

console.log(addOne(5));
function addOne(num){
    return num + 1
}

// console.log(addTwo(5));
const addTwo = function(num2){
    return num2 + 2
}
 


