// singleton - when made by constructor it is singleton

// Object.create
//object literals

// interview Q for symbol
const mySym = Symbol("key1");

const jsUser = {
    name: 'aniket',
    age: 29,
    "fullName": "Aniket Patel",
    city: 'mumbai',
    email: "temp@gmail.com",
    isLoggedIn: false,
    country: 'India',
    [mySym]: "myKey1",
};

// console.log(jsUser);
// console.log(jsUser.email);
// console.log(jsUser["city"]);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// jsUser.email = "tempmail@gmail.com";
// Object.freeze(jsUser);
// jsUser.email = "aniket@gmail.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


