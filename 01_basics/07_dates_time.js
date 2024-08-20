let myDate = new Date();
// console.log(myDate.toDateString()); //Tue Aug 20 2024
// console.log(myDate.toISOString()); //2024-08-20T17:32:34.699Z
// console.log(myDate.toJSON()); //2024-08-20T17:33:15.059Z
// console.log(myDate.toLocaleString()); // 8/20/2024, 5:33:57 PM
// console.log(typeof myDate);

// let myCreateDate = new Date(2024, 7, 19);
// let myCreateDate = new Date(2024, 7, 19, 6, 4);
let myCreatedDate = new Date("08-20-2024");

// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
// console.log(newDate.getHours());
// console.log(newDate.getSeconds());
// console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long",
    dateStyle: "medium"
});

