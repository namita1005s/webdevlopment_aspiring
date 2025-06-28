console.log('Hello, JavaScript!'); // Hello, JavaScript!
// ctrl + ` // for terminal
// cd 03javascript/day01js // to go to the directory
// node first.js // to run the file

let num =10;
console.log(num); // 10

// let const var
// let: Block-scoped, can be reassigned
let names = "John"; 
names = "Doe"; 
console.log(names); // Doe

// const: Block-scoped, cannot be reassigned (but object/array contents can be modified)
const ids = [1, 2, 3, 4, 5]; 
console.log(ids); // [1, 2, 3, 4, 5]
// ids = [10, 20, 30, 40, 50]; // TypeError: Assignment to constant variable.
// values cannot be changed in const

var age = 20; // old tareeka dont use it
age = 30;
console.log(age); // 30

// declare the variable 
let nums = 10;
console.log(nums); // 10


// primitive data types
//  string, number, boolean, null, undefined, bigint

let account_balance = 1000;
console.log( typeof account_balance); // 1000

let str = 'Hello, JavaScript!';
console.log(typeof str); // string

let comment =" namita's comment";
console.log(comment); // namita's comment

let isTrue = true;
console.log(typeof isTrue); // boolean

// undefined
let namass; // abhi define nahi kiya hai
console.log(namass); // undefined


// null
let user = null; // jaanbujh ke null rakha hai
console.log(user); // null
console.log(typeof user); // object
// ye khud ko object bata raha hai
// iska matlab ye hai ki null is a object datatype

// bigint
let a = 1234567890123456789012345678901234567890n;
console.log(typeof a); // bigint
// bigint is used for large numbers more then 64 bit

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -1.7976931348623157e+308


