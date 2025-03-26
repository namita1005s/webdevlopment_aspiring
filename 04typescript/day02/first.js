// to run - tsc filename.ts
// it will create a filename.js file
// it shows the error because we have not defined the version of the javascript
// tsc app.ts --target es2016
// now install configration file by tsc --init
// now run tsc
// Type Inference
//Type inference means TypeScript automatically detects the type of a variable based on its value, without needing an explicit type annotation.
var age1 = 25; // TypeScript infers 'number'
var city = "Lucknow"; // TypeScript infers 'string'
var isStudent = true; // TypeScript infers 'boolean'
//Limitation of type inference
var a = 10;
a = 20; // ✅ No error
// a = 'hello'; // error
// a = true; // error
// a = 10.5; // error
var data; // TypeScript infers 'any'
data = "Hello";
data = 100; // ✅ No error (but unsafe)
// Explicit Type Annotation
//when we assigned type by our own
var age = 25; // ✅ Explicitly defining the type as number
var naam = "John"; // ✅ Explicitly defining the type as string
function add(x, y) {
    return x + y; // Function returns a number
}
var result = add(10, 5);
var numberss = [1, 2, 3, 4]; // Array of numbers
var namess = ["Alice", "Bob"]; // Array of strings
// any: if we dont initilize the value
// any type
var money; // TypeScript infers 'any'
money = 100;
money = '100'; // no error
// we avoid using any type because it is not type safe
//A function parameter or return type can be any:
function logMessage(msg) {
    console.log(msg);
}
logMessage("Hello"); // ✅ Works
logMessage(100); // ✅ Works
logMessage(true); // ✅ Works
var dataa = "namita";
console.log(dataa.toUpperCase()); // ✅ Works: "HELLO"
dataa = 100;
console.log(dataa.toUpperCase());
//unknown type
//the any and unknown type in typescript are both used to represent values of any type. 
//the unknown type is a type-safe counterpart of any. because you cannot perform any operations on values of type unknown, without first narrowing its type through checks.
var value;
value = "Hello";
// value.toUpperCase(); ❌ Error (We must check the type first)
if (typeof value === "string") {
    console.log(value.toUpperCase()); // ✅ Works after type check
}
value = 10;
// value.toFixed(2); ❌ Error (Needs type check)
if (typeof value === "number") {
    console.log(value.toFixed(2)); // ✅ Works after type check
}
// Non-Primitive Data Types
// Array
var arr = [1, 2, 3, 4, 5]; // Array of numbers
var arr2 = [1, 2, 3, 4, 5]; // TypeScript infers 'number[]'
var names = ["John", "Doe", "Jane"]; // Array of strings
var naaam = ["John", "Doe", "Jane"]; // TypeScript infers 'string[]'
var arr3 = [1, "John", 2, "Doe"]; // Array of strings and numbers
var arr4 = [1, "John", 2, "Doe"]; // TypeScript infers '(string | number)[]'
// arr3.push(true); // ❌ Error (Type 'boolean' is not assignable to type 'string | number')
arr3.push(3); // ✅ Works
var arr5 = [1, "John", 2, "Doe"]; // Array of strings and numbers
// Tuple
var tuple = ["John", 25]; // Tuple with fixed number of elements
var tuple2 = ["John", 25, "Doe"]; // Tuple with fixed number of elements
//Objects
var obj1 = {
    name: "John",
    age: 25,
    isStudent: true,
    gender: "female"
}; // TypeScript infers { name: string, age: number, isStudent: boolean }
var obj2 = {
    name: "John",
    age: 25,
    isStudent: true
}; // Explicitly defining the object structure
//Inline Annotation
var obj3;
obj3 = {
    name: "John",
    age: 25,
    isStudent: true
}; // Explicitly defining the object structure
var n1 = 10; // kuch bhi likh sakte hai
var c1 = {
    name: "Alice",
    age: 25,
    isStudent: true
}; // Explicitly defining the object structure
var p1 = {
    name: "John",
    age: 25,
    isStudent: true,
    id: 1
}; // Explicitly defining the object structure
// interface is better then type because it can merge multiple interface
// but in type we can not merge it will give error
//extend with interface
// function
//class
