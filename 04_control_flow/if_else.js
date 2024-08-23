// if

// if(condition){
    //statement to be executed
// }

// const isUserLoggedIn = true;
// const temperature = 55;

// if(temperature < 50){
//     console.log("condition true: therefore code executed");
// }else{
//     console.log("temperature greater then 50");
// }

// comparison
// < , > , <= , >=, ==, ===, !=, !==

// const score = 200
// if(score > 100){
//     const power = "fly";
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`); // error

// const balance = 1000;
// if(balance > 500) console.log("test"); //implicit scope

// if(balance < 500){
//     console.log("less then 500");
// }else if(balance < 750){
//     console.log("less then 750");
// }else if(balance < 950){
//     console.log("less then 950");
// }else{
//     console.log("less then 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard ){
    console.log("Can do shopping on the website");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}
