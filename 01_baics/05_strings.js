const name='ishaan';
const age = 20;

// console.log(`name:${name.toUpperCase()} age:${age}`);//String contatenation.


const gameName = new String('ishaan-singh');
// // console.log(gameName[0]);
// // console.log(gameName.__proto__);

// // console.log(gameName.length);
// // console.log(gameName.charAt(2));
// // console.log(gameName.indexOf('a'));
// const newString = gameName.substring(0,4);
// // console.log(newString);
// const anotherString = gameName.slice(-8 ,4 );
// console.log(anotherString);

// const newStringOne = '      ishaan    '
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = 'https://ishaan.com/ishaan%20singh';
console.log(url.replace('%20', '-'))
console.log(url.includes('ishaan'));
console.log(gameName.split('-', 3));