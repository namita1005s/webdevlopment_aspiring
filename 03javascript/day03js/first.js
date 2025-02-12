// Non Primitive Data Types
// Array, Object, Function

// Array
// Array is a collection of elements
let arr = [1, 2, 3, 4, 5, "John", "Doe", true, false, undefined, 1234567890123456789012345678901234567890n];
console.log(arr); // [1, 2, 3, 4, 5, 'John', 'Doe', true, false, undefined, 1234567890123456789012345678901234567890n]
console.log(typeof arr); // object

// Object
// Object is a collection of key value pairs
// key value pair is called as property
// ek type k data ko store karne k liye object use hota hai
let obj = {
    name: 'John',
    age: 30,
    isMarried: false,
    address: {
        city: 'Delhi',
        state: 'DL'
    }
};
console.log(obj); // { name: 'John', age: 30, isMarried: false, address: { city: 'Delhi', state: 'DL' } }
console.log(typeof obj); // object

// Function
let fun = function() {
    console.log('Hello World');
}
fun(); // Hello World
console.log(typeof fun); // function
// function is a block of code which is used to perform a specific task
// function is a reusable code block

// type conversion

let account_balance = "1000";
let num = Number(account_balance);
console.log(typeof account_balance); // string
console.log(num); // 1000
console.log(typeof num); // number

//boolean convert to number
let isMarried = true;
console.log(Number(isMarried)); // 1

let account = "100xs";
console.log(Number(account)); // NaN (Not a Number)

// null                      remind
let n = null;
console.log(Number(n)); // 0

// undefined                  remind
let x2;
console.log(Number(x2)); // NaN

// string k andar covert
let str = "123";
console.log(String(str));// "123" 
console.log(typeof str); // string

let ax = true;
console.log(String(ax)); // "true"
// string matlab double quotes me convert ho jayega

// boolean
let b = "str";
console.log(Boolean(b)); // true

let c = "    ";
console.log(Boolean(c)); // true

let d;
console.log(Boolean(d)); // false

let e = 0;
console.log(Boolean(e)); // false

// operators
// Arithmetic operators, Assignment operators, Comparison operators, Logical operators, Bitwise operators, Ternary operators
console.log(10*3+18/2-5); // 30+9-5 = 34

// Arithmetic operators (+, -, *, /, %, **)
//periority
// ()
// **
// * / %
// + -
// divide multiply left to right 
// add subtract left to right

console.log(20%3); // 2
console.log(2**3); // 8
console.log(10/2); // 5
console.log(10*2); // 20
console.log(10+2); // 12
console.log(10-2); // 8

// ++ -- (postincrement post decrement) operators sum++ sum--
let sum = 20;
sum++;
console.log(sum); // 21
sum--;
console.log(sum); // 20

// ++ -- (preincrement pre decrement) operators ++sum --sum
let sum1 = 20;
++sum1;
console.log(sum1); // 21
--sum1;
console.log(sum1); // 20

let sum2 = 20;
let total = sum2++;
console.log(total); // 20 // purani value do pehle fir increment
console.log(sum2); // 21

// Assignment operators (=, +=, -=, *=, /=, %=, **=)
let a1 = 10;
a1 = a1 + 5;
console.log(a1); // 15
a1 += 5;
console.log(a1); // 20

let a2 = 10;
a2 += 5;
console.log(a2); // 15
a2 -= 5;
console.log(a2); // 10
a2 *= 5;
console.log(a2); // 50
a2 /= 5;
console.log(a2); // 10
a2 %= 3;
console.log(a2); // 1
a2 **= 2;
console.log(a2); // 1

