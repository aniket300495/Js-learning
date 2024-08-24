// for of loop

let myArray = ['luffy', 'tanjiro', 'gojo', 'zoro', 'shanks'];
// let arr = [1,2,3,4,5];

// for (const element of arr) {
//     console.log(element);
// }

// const greetings = "hello world";
// for (const greet of greetings) {
//     if(greet === " ")
//         continue;
//     console.log(`Each char is ${greet}`);
// }

// Maps 
const map = new Map();
map.set('IN', "India");
map.set('JP', "Japan");
map.set('RS', "Russia");
// map.set('IN', "India"); // does not take duplicate values(unique value)
// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':', value);
// }

// const car = {
//     "type":"Fiat",
//     "model":"500", 
//     "color":"white"
// }

// for (const [key, value] of car) {
//     console.log(key, " : ", value); // error :car(object) is not iterable
// }

for (const key in map) {
    console.log(key);
}