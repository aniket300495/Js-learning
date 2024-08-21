// const tinderUser = new Object(); // singleton

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstname: 'aniket',
            lastname: 'patel'
        },
    },
}
// console.log(regularUser.fullName?.userfullname.firstname);

// combining obj

const obj1 = {
    1: 'a', 
    2: 'b',
}
const obj2 = {
    3: 'c', 
    4: 'd',
}
const obj3 = {
    5: 'e', 
    6: 'f',
}

// const obj3 = {obj1, obj2};
// const obj4 = Object.assign({}, obj1, obj2, obj3); //here empty curly braces are for new object which is target where it should be stored.

const obj4 = {...obj1, ...obj2, ...obj3};

// console.log(obj4);


const users = [
    {
        id: 1,
        email: '12@gmail.com'
    },
    {
        id: 2,
        email: '134@gmail.com'
    }
]

// console.log(users[1].id);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //gives output as array of all key present in tinderUser object.
// console.log(Object.values(tinderUser)); //returns an array of all values present in object
// console.log(Object.entries(tinderUser)); // returns an array of key, value pair as array for each entries in the object like nested array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));







