// to run - tsc filename.ts
// it will create a filename.js file
// it shows the error because we have not defined the version of the javascript
// tsc app.ts --target es2016
// now install configration file by tsc --init
// now run tsc

// Type Inference
//Type inference means TypeScript automatically detects the type of a variable based on its value, without needing an explicit type annotation.
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

function add(x: number, y: number): number {
  return x + y;  // Function returns a number
}

let result: number = add(10, 5);

let numberss: number[] = [1, 2, 3, 4];  // Array of numbers
let namess: string[] = ["Alice", "Bob"]; // Array of strings



// any: if we dont initilize the value

// any type
let money; // TypeScript infers 'any'
money = 100; 
money = '100'; // no error
// we avoid using any type because it is not type safe
//A function parameter or return type can be any:
function logMessage(msg: any) { // 'msg' can be of any type
  console.log(msg);
}
logMessage("Hello");  // ✅ Works
logMessage(100);      // ✅ Works
logMessage(true);     // ✅ Works

let dataa: any = "namita";
console.log(dataa.toUpperCase()); // ✅ Works: "HELLO"

// dataa = 100;
// console.log(dataa.toUpperCase()); // ❌ Error: Property 'toUpperCase' does not exist on type 'number'

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
// If you need to reuse an object type, you can define it using type.
// Type Aliases allow defining types with a custom name (an Alias).
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


// Using type with Arrays
type NumbersArray = number[];

let arr1: NumbersArray = [1, 2, 3, 4, 5];

//Using type for Function Signatures
type AddFn = (a: number, b: number) => number;

const add1: AddFn = (x, y) => x + y;

console.log(add(5, 10)); // 15



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

// Difference Between type and interface in TypeScript
//Example 1: Defining Objects
// interface
interface User {
  name: string;
  age: number;
}

const user1: User = {
  name: "Alice",
  age: 25
};

// type
type User2 = {
  name: string;
  age: number;
};

const user2: User = {
  name: "Bob",
  age: 30
};
// Both work the same way for objects.
//Example 2: Extending vs Combining
//Extending interface
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

interface Employee extends Person {
  jobTitle: string;
  id: number;
}

const emp: Employee = {
  name: "Charlie",
  age: 30,
  isStudent: false,
  jobTitle: "Developer",
  id: 101
};

console.log(emp);

//Combining type using &
type Person2 = {
  name: string;
};

type Employee2 = Person2 & {
  jobTitle: string;
};

const emp2: Employee2 = {
  name: "David",
  jobTitle: "Designer",
};

console.log(emp2);

// Example 3: Function Types
// interface
interface AddFnc {
  (a: number, b: number): number;
}

const add5: AddFnc = (x, y) => x + y;
console.log(add(3, 5)); // ✅ Output: 8
// type
type AddFnction = (a: number, b: number) => number;

const add6: AddFnction = (x, y) => x + y;
console.log(add(4, 6)); // ✅ Output: 10

//Example 4: Using with Classes
//interface works with classes
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
  id: number;
  greet(): string;
}

class Studentssss implements Person {
  name: string;
  age: number;
  isStudent: boolean;
  id: number;

  constructor(name: string, age: number, isStudent: boolean, id: number) {
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;
    this.id = id;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

let student1 = new Studentssss("Emma", 22, true, 101);
console.log(student1.greet()); // ✅ Output: Hello, my name is Emma

//type cannot be used with implements in a class.

// 🚀 When to Use What?
// ✔ Use interface when:
// ✅ Defining object shapes or class structures.
// ✅ You need to extend properties using extends.

// ✔ Use type when:
// ✅ Working with primitive types, unions, and intersections.
// ✅ Defining function types or tuples




