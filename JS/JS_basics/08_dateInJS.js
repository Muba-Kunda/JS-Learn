let today = new Date()

// console.log(today);
// console.log(Date);
// console.log(today.toString());
// console.log(today.toDateString());
// console.log(today.toTimeString());
// console.log(today.toLocaleString());
// console.log(today.getMonth());
// console.log(today.getDate());
// console.log(today.getDay());
// console.log(today.getFullYear());
// console.log(today.getTime());

let newDate = new Date(2024,6,16,18,12)
// console.log(newDate.toLocaleDateString());
// console.log(newDate.toLocaleTimeString());
// console.log(newDate.toLocaleString());

// let newCreatedDate = new Date("2024-7-16")
let newCreatedDate = new Date("7-16-2024")
// console.log(newCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);  // giving milli seconds from 1970 till now 
// console.log(today.getTime()); // giving milli seconds from 1970 till now

// console.log(myTimeStamp/1000);  // giving seconds from 1970 till now
// console.log(today.getSeconds()); // giving seconds for now current minutes

// console.log( newCreatedDate.toLocaleString('default', {   
//     dateStyle : 'full',
// }));