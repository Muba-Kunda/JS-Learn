let name = "Mubaraka"
let myRepo = 7

// console.log(name + myRepo +" repos");

console.log(`Hello, My name is ${name} and i have ${myRepo} repositories in my github`);

let gameName = new String('mario-2.0');

console.log(name[1]);
console.log(gameName[1]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));
console.log(gameName.replace('-'," "));
console.log(gameName.substring(1,4));
console.log(gameName.slice(-3,9));

let newString = "                  mubaraka                   \n"
console.log(newString);
console.log(newString.trim());

let NewGameName = "Mario-pro-2-2-0"
let NewGameNameArray = NewGameName.split('-')
console.log(NewGameNameArray);
console.log(NewGameNameArray[1]);

console.log(typeof gameName);
console.log(typeof NewGameName);
console.log(typeof NewGameNameArray);

console.log(NewGameName.includes('pro'));
console.log(NewGameName.includes('yup'));


