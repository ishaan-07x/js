// // if
// const isUserLoggedIn = true;
// if(isUserLoggedIn){

// }

//comparison opreators
// <, >, <=, >=
//== --> equal
// != --> not equal
//=== ----> also check the DataType 

// const tempreature = 55;
// // if (tempreature <50){
// //     console.log('less than 50');
// // }else {
// //     console.log('tempreature is greater than 50');
// // };
// // console.log('Tempreature of Srinagar is 20degcentrigade')


// const score = 200;

// if (score >100){
//     const power = 'fly'
//     console.log(`user power ${power}`)
// }
//console.log(`user power ${power}`)   power is not defined here as scope of variable power has terminated with in the {}


/// short hand notation
// const balance = 1000
// if (balance>500)console.log('test'),//IMplicit scope
// console.log("test2");

//nesting

// const balance = 1000
// if(balance<500){
//     console.log('less than 500');
// }else if (balance<750){
//     console.log('less than 750');
// }else if (balance<900){
//     console.log('less than 900');
// }else{
//     console.log('less than 1200');
// }

///++++++++++Real LIfe Examples +++++++++++///
const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(isUserLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}
if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged in");
}