const accountId = 14453
let accountEmail = "Dhruv@google.com"
var accountPassword = "12345"
accountCity = "Delhi" 
/*
Not reccomended to declare without let any variable name
*/
let accountState;


// accountId = 2    not allowed
accountEmail = "DS@Ds.com"
accountPassword = "98765"
accountCity = "Badli"

/*
Prefer not to use var
because issue in block scope and functional scope
*/


console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

//node 01_Basics/01_variables.js