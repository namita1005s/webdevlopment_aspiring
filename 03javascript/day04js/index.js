// comparison operators
// ==, ===, !=, !==, >, <, >=, <=
// number to number

let a1 = 10;
let a2 = 10;
console.log(a1 == a2); // true
console.log(a1 === a2); // true
// === is use to check type and value both

let a3 = 10;
let a4 = 20;
console.log(a3 == a4); // false
console.log(a3 === a4); // false

let a5 = 10;
let a6 = 10;
console.log(a5 < a6); // false
console.log(a5 > a6); // false
console.log(a5 <= a6); // true
console.log(a5 >= a6); // true

let num = 10;
let str = "10";
console.log(num == str); // true
// true because of type conversion is allowed

let num1 = 10;
let str1 = "20";
console.log(num1 === str1); // false
// false because of type conversion is not allowed
// === is strict comparison operator which does not allow type conversion. afetr check it compare

let num2 = 10;
let str2 = "30";
console.log(num2 < str2); // true
console.log(num2 > str2); // false
console.log(num2 === str2); // false
//for comparison there should be same type of data

// nul == undefined
// null === undefined false

console.log(null == undefined); // true
console.log(null === undefined); // false
// null and undefined are not same but they are equal
// null type is object and undefined type is undefined

console.log(null == undefined); // true
//null can only be equal to undefined
console.log(null == 0); // false
// there is no type conversion in null so it is false 
console.log(null === 0); // false
console.log(null == "0"); // false
console.log(null === "0"); // false 
console.log(null < 0); // false
console.log(null > 0); // false
console.log(null <= 0); // true
// there is type conversion in null
console.log(null >= 0); // true

console.log(undefined == 0); // false
console.log(undefined === 0); // false
console.log(undefined == "0"); // false
console.log(undefined === "0"); // false
console.log(undefined < 0); // false
// type conversion is not allowed in undefined
// NaN is not a number so it is false
console.log(undefined > 0); // false
console.log(undefined <= 0); // false
console.log(undefined >= 0); // false

console.log(NaN == NaN); // false
// NaN is not a number so it is false
let str3 = "Hello";
let str4 = "Mohit";
console.log(str3 == str4); // false
console.log(Number(str3) == Number(str4)); // false

let abc1 = 123;
let abc2 = "123";
let abc3 = 123;
console.log(abc1 == abc2 == abc3); // false
// jab compare hota h answer true false hota h
// 123 == "123" is true and true == 123 is false

let abc4 = 123;
let abc5 = "123";
let abc6 = true;
console.log(abc4 == abc5 == abc6); // true
// 123 == "123" is true and true == true is true

console.log(undefined != null); // false
console.log(undefined !== null); // true 
console.log(undefined == null); // true 


console.log(undefined != 0); // true
console.log(undefined !== 0); // true
console.log(undefined != "0"); // true
console.log(undefined !== "0"); // true
console.log(undefined != NaN); // true
console.log(undefined !== NaN); // true
console.log(undefined != "NaN"); // true

console.log(null != 0); // true
console.log(null !== 0); // true
console.log(null != "0"); // true
console.log(null !== "0"); // true

// logical operators
// &&, ||, ! , ^, ~, <<, >>

let age = 18;
let money = 1000;
console.log(age>=18 && money>500); // true
// true && true is true

console.log(age>10 || money>500); // true
// ek bhi true h to true

console.log(!(age>10)); // false
// not of true is false

// bitwise operators
// &, |, ^, ~, <<, >>, 

console.log(5 & 1); // 1
// in &  5 will be converted into binary 101 and 1 will be converted into binary 001
// 101 & 001 = 001 = 1

console.log(6&3); // 2
// 6 = 110 and 3 = 011
// 110 & 011 = 010 = 2

console.log(5 | 1); // 5
// 101 | 001 = 101 = 5

console.log(10 | 10); // 10
// 10 = 1010 and 10 = 1010
// 1010 | 1010 = 1010 = 10

console.log(5 ^ 1); // 4
// 101 ^ 001 = 100 = 4
// ^ is xor operator 
// which gives 1 if both bits are different and 0 if both bits are same

console.log(~5); // -6
// ~ is bitwise not operator
// it gives 1's complement of the number
// 5 = 101 so 1's complement is 010 = 2 and -2 = -6

console.log(5 << 3); // 40
// 5 multiplied by 2^3 = 5*8 = 40
// 5 = 101.0000 = 101000.0 = 40 (left shift by 3)
// 101.0000 = 101000.0 = 40

console.log(10 >> 2); // 2
// 10 divided by 2^2 = 10/4 = 2
// 10 = 1010.00 = 10.10 = 2 (right shift by 2)  

console.log(10 << 2); // 40
// 10 multiplied by 2^2 = 10*4 = 40
// 10 = 1010.00 = 101000.0 = 40 (left shift by 2)

console.log(20 >> 2); // 5
// 20 divided by 2^2 = 20/4 = 5
// 20 = 10100.00 = 101.00 = 5 (right shift by 2)

// ascii and unicode hw
// ascii is 7 bit encoding and unicode is 16 bit encoding
// ascii is american standard code for information interchange
// unicode is universal code for information interchange
// js is Just in time compiled language

console.log(0.1 + 0.2); // 0.30000000000000004
// because of floating point precision error
// converting decimal to binary is not accurate

let money1 = -1227348359845946476904794n;
console.log(money1); // -1227348359845946476904794n
// n is bigint data type


