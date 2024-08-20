const accountId = 14459;
let accountEmail = "tempmail@gmail.com";
var accountPassword = "123456";
accountCity = "Mumbai"; // works fine

let accountState ;

// accountId = 2; // not allowed 
accountEmail = "temp@gmail.com";
accountPassword = "nahi milega";
accountCity = "navsari";

/* 
Prefer not to use var
because of issue in blaock scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
