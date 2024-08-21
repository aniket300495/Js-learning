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
