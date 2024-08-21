// console.log("h");
// console.log("e");
// console.log("l");
// console.log("l");
// console.log("o");

// function definition
function sayHello(){
    console.log("h");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}

// sayHello(); //function called
// number1 & number2 are parameters
// function addTwoNumbers(number1 , number2){ 
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1 , number2){ 
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result = addTwoNumbers(3, 5); //arguments //here function is called
// console.log("Result: ", result);

function loginUserMessage(username = 'sam'){
    if (username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("aniket"));
// console.log(loginUserMessage('suraj'));

// below is rest operator.
// function calculateCartPrice(...num1){
//     return num1;
// }

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(2,34, 45, 67, 56, 78));

const user = {
    username : 'ani',
    ages:  29
};

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} ,age is ${anyobject.age}`);
}
// handleObject(user);

// handleObject({
//     username: 'sam',
//     age:30
// });

const myNewArray = [200, 300, 400, 500];

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 300, 100, 400]));