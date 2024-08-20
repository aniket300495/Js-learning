// # Primitive data type
// 7 types : String, Number, Boolean, null, undefined, BigInt, Symbol

// dynamic or statically typed language?
// ans: dynamic typed language, variable type does not need to be defined
// const score = 100; // here datatype of number is not defined when declared, here score is a number.

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId);

const bigNumber = 3435356553543534344n;

// console.log(typeof bigNumber, typeof id);


//  Non-primitive (reference types)
//  types of : objects, arrays, functions
// arrays

const heros = ['Shaktiman', 'Kalia Naag'];

const personObject = {
    name: 'ani',
    age: 29
};

const myFunction = function(){
    console.log("Welcome Back");
}
// myFunction();
// console.log(typeof myFunction);