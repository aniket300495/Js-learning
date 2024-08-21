// let a = 10;
// const b = 20;
// var c = 30;
// var c = 300;// global scope
// let a = 300;

// if(true){
//     // block scope
//     let a = 10;
//     const b = 20;
//     var c = 30; // global scope
//     console.log("inner:" , a);
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "ani";

    function two(){
        const website = 'youtube';
        console.log(username);
    }
    // console.log(website); // not accesible outside scope

    two();
}

// one();

if(true){
    const username = "ani";
    if(username === 'ani'){
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ----------- interesting --------

// basic function
addone(5); //accesible due to hoisting
function addone(num){
    return num + 1;
}

//function expression
// addtwo(5); //cannot access before intialization
const addtwo = function(num){
    return num + 2;
}
addtwo(5); 