// const userEmail = []//[],
// if (userEmail){
//     console.log(`Password reset link has been sent to ${userEmail}`);
// }else {
//     console.log("Don't have user email");
// }
// falsy value
//false, 0, -0, 0n, "", null, undefined, NaN

// ++++++Truthy Values ++++++++++///
//"0"---> truthy value
//[], 'false', " ", {}, function(){}--->empty function

// if(userEmail.length=== 0){
//     console.log("Arry is empty");
// }
// // const emptyObj = {}
// // if(Object.keys(emptyObj).length=== 0){
// // console.log("Object is Empty");
// // }


// //Logical Opreators...----> and(&&) or(||)

// //Nullish Coalescing Opreator(??):null defined
// let val1;
// // val1 = 5 ?? 10;
// // val1 = null ?? 10;
// // val1 = undefined ?? 15;
// // console.log(val1);
// val1 = null ?? 10??20;
// console.log(val1)


// Terinary Opreator
// conditon? true: false

const iceTeaPrice = 100;
iceTeaPrice<=80 ? console.log('less than 80'): console.log('more than 80');