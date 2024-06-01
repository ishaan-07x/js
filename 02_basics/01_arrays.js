const myArr = [0,1,2,4, 'ishaan', 
    true
]////collection of multiple items in a single variable
console.log(myArr[4])

const myHeroes = ["shaktiman", "nagraj", ]

const myArr2 = new Array(true, false, 0, 1, 2)


///Array Methoods...
// myArr2.push(6)
// myArr2.pop()

// myArr2.unshift(9)
// myArr2.shift()
// console.log(myArr2.includes(0))

// const myNewArr2 = myArr2.join()
// console.log(myArr2);
// console.log(typeof myNewArr2);

//// slice , spice
console.log("A", myArr2)
const myn1 = myArr2.slice(1,3)
console.log(myn1)
console.log("B", myArr2);

const myn2 = myArr2.splice(1,3);//spice manuplates original Array
console.log("B", myArr2)
console.log(myn2)