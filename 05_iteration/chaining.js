const myNums = [1,2,3,4,5,6,7,8,9,10];

// using forEach
// myNums.forEach( (n) => {
//     n = n + 10;
//     console.log(n);
// });
// console.log(newArr);
// using map
// const newNums = myNums.map( (num) => num + 10 );

// console.log(newNums);

// chaining : where we can use 2-3 methods together by dot(.) access
const newNums = myNums
.map( (num) => num * 10)
.map( (num) => num + 1 )
.filter( (num) => num >= 40);

console.log(newNums);