// // singleton
// const appUser = new Object()

const appUser = {}
appUser.name = "Mubaraka"
appUser["age"] = 20
appUser["email"] = "mubz@google.com"

// console.log(appUser);

const obj1 = {a: 3, b:2}
const obj2 = {a: 0, c:2}
const obj3 = {d: 1, e:2}

const obj4 = {obj1 ,obj2 , obj3}
// console.log(obj4);

// const obj5 = Object.assign(obj1, obj2, obj3)
const obj5 = Object.assign({},obj1, obj2, obj3)
// console.log(obj5);
// console.log(obj1);

const obj6 = {...obj1, ...obj2, ...obj3}
// console.log(obj6);


const users = [
    {
        id : 1,
        email : 'a@gmail.com'
    },
    {
        id : 2,
        email : 'b@gmail.com'
    },
    {
        id : 3,
        email : 'c@gmail.com'
    }
]

// console.log(users[1]["email"]);
// console.log(users[1].email);

// console.log(appUser);

// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
// console.log(Object.entries(appUser));

// console.log(appUser.hasOwnProperty('isLoggedIn'));
// console.log(appUser.hasOwnProperty('email'));

const course ={
    courseName : "JS",
    price : 499,
    courseInstructor : "Mubaraka"
}

console.log(course.courseInstructor);

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor : instructor} = course
console.log(instructor);

/* Json formats

{
    "courseName" : "JS",
    "price" : 499,
    "courseInstructor" : "Mubaraka"
}

[
    {},
    {},
    {}
]

*/