// to run - tsc filename.ts
// it will create a filename.js file
// it shows the error because we have not defined the version of the javascript
// tsc app.ts --target es2016
// now install configration file by tsc --init
// now run tsc

// Type Inference
let age1 = 25;  // TypeScript infers 'number'
let city = "Lucknow";  // TypeScript infers 'string'
let isStudent = true;  // TypeScript infers 'boolean'
//Limitation of type inference
let a = 10;
a = 20; // ✅ No error
// a = 'hello'; // error
// a = true; // error
// a = 10.5; // error
let data;  // TypeScript infers 'any'
data = "Hello"; 
data = 100; // ✅ No error (but unsafe)

// Explicit Type Annotation
//when we assigned type by our own
let age: number = 25;  // ✅ Explicitly defining the type as number
let naam: string = "John";  // ✅ Explicitly defining the type as string

// any: if we dont initilize the value

// any type
let money;
money = 100; // type is any
money = '100'; // no error
// we avoid using any type because it is not type safe

//unknown type
//the any and unknown type in typescript are both used to represent values of any type. 
//the unknown type is a type-safe counterpart of any. because you cannot perform any operations on values of type unknown, without first narrowing its type through checks.
let value: unknown;

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
let arr: number[] = [1, 2, 3, 4, 5];  // Array of numbers
let arr2 = [1, 2, 3, 4, 5];  // TypeScript infers 'number[]'

let names: string[] = ["John", "Doe", "Jane"];  // Array of strings
let naaam = ["John", "Doe", "Jane"];  // TypeScript infers 'string[]'

let arr3:(string | number)[] = [1, "John", 2, "Doe"];  // Array of strings and numbers
let arr4 = [1, "John", 2, "Doe"];  // TypeScript infers '(string | number)[]'
// arr3.push(true); // ❌ Error (Type 'boolean' is not assignable to type 'string | number')
arr3.push(3); // ✅ Works
let arr5:(string | number | boolean )[] = [1, "John", 2, "Doe"];  // Array of strings and numbers

// Tuple
let tuple:[string, number] = ["John", 25];  // Tuple with fixed number of elements
let tuple2:[string, number, string] = ["John", 25, "Doe"];  // Tuple with fixed number of elements

//Objects
let obj1 = {
    name: "John",
    age: 25,
    isStudent: true,
    gender: "female"
  };  // TypeScript infers { name: string, age: number, isStudent: boolean }
  
  let obj2: { name: string, age: number, isStudent: boolean } = {
    name: "John",
    age: 25,
    isStudent: true
  };  // Explicitly defining the object structure

//Inline Annotation
let obj3: { name: string, age: number, isStudent: boolean }
obj3 = {
    name: "John",
    age: 25,
    isStudent: true
  };  // Explicitly defining the object structure
let n1: number = 10; // kuch bhi likh sakte hai

//type
type alice = {
    name: string,
    age: number,
    isStudent: boolean
  } 
let c1: alice = {
    name: "Alice",
    age: 25,
    isStudent: true
  };  // Explicitly defining the object structure

//interface
interface Person {
    name: string,
    age: number,
    isStudent: boolean
  }
  interface Person{
    id: number
}
  
  let p1: Person = {
    name: "John",
    age: 25,
    isStudent: true,
    id: 1
  };  // Explicitly defining the object structure
// interface is better then type because it can merge multiple interface
// but in type we can not merge it will give error

//extend with interface
// function
//class


