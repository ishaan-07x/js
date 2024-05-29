//Primmitve DataTypes

// 7 types: String, Number, Boolean, null, undefined
// Symbol, BigInt

// const score  = 100;
// const scoreValue = 100.3;
// const isLoggedIn = false;
// const outsideTemp = null
// let userEmail;
// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id=== anotherId)

// // RefrenceType or NonPrimmitvie


// //Array, Objects, Functions

// const heros = ["shakitman", "naagraj", "doga"];
// let myObj = {
//     name:"Ishaan",
//     age:2
// };

// const myFunction = function(){
//     console.log("Hello World")

// }
// // Function ka return type objFunction hota hai
// //NonPrimmitve ka Object he aata hai 
// console.log(typeof heros)



//Stack(primmitve) and Heap(NonPrimmitve)

//Stack ---> gives copy of original value

// let myNumber = 3;
// let myNumberTwo = myNumber;
// myNumberTwo = 5;
// console.log(myNumber);
// console.log(myNumberTwo);


//Heap --> gives refrence of Original vale


// let userOne={
//     email:"user@google.com",
//     upi:"user@paytm"
// }
// let userTwo = userOne;
// userTwo.email = "ishaan@gmail.com"

// console.log(userOne.email, userTwo.email);



// let y = 3;
// let x = y++;
// console.log(`value of x is :${x}, value of y is:${y}`);