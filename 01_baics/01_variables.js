const accoundId = 144553
let accountEmail = "ishaan@gmail.com"
var accountPassword = "12345"
accountCity = "Srinagar"// should not be used
let accountState;//undefined

/*

prefer not use var 
because of issue in block scope and functional scope
*/
//accoundId = 2
accountEmail = "ishaansingh@gmail.com"
accountPassword = "212124"
accountCity = "Bengalaru"
console.log(accoundId);
console.table([accoundId,accountEmail,accountPassword,accountCity,accountState])