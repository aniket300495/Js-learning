const user = {
    username: 'aniket',
    age: 29,
    
    welcomeMessage: function(){
        console.log(`${this.username} welcome to website `);
        console.log(this);
    }
}

// user.welcomeMessage(); 
// user.username = 'sam';
// user.age = 30;
// user.welcomeMessage();

// console.log(this);

// function one(){
//     let username = 'ani';
//     console.log(this);
//     console.log(this.username); // undefined. works only in objects
// }

// one();

// const two = () => {
//     let name = 'ani';
//     console.log(this);
// }
// two();

// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(5, 2));

//implicit return
/*
if using curly braces{} we have to write return keyword
if using paranthesis() we don't have to use return keyword
*/
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1 , num2) => (num1 + num2);

const addTwo = (num1 , num2) => ({username: 'aniket'});
/* if we need to return object we have to add paranthesis () */


// console.log(addTwo(5, 2));

const myArray = [2,3,4,5,6];
// myArray.forEach(function (){});
// myArray.forEach( () => {});
