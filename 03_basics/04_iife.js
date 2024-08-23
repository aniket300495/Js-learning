// Immediately Invoked Function Expression (IIFE)

// function one(){
//     console.log(`DB CONNECTED`);
// }
// one();

// iife functions
(function one(){
    // named iife
    console.log(`DB CONNECTED`);
})();

// un-named iifi
( (name) => {
    console.log(`DB CONNECTED two ${name}`);
} )('aadi');