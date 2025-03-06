//Objects 
//1. Objects Literal Syntax
//2. Using the new Object() Syntax
//3. class Syntax to make object creation more structured

// Accessing object properties
// 1. Dot notation
// 2. square bracket notation
// 3. special case for numbers, null and undefined
// 4.[computed property name], const key1 = "name"

// Common Methods for Objects
// 1. Object.keys()
// 2. Object.values()
// 3. Object.entries()
// 4. Object.assign() copies properties from one or more source objects to a target object


//how to create an object
const obj = {
    name: "Namita",
    account_balance: 1000,
    gender: "Female",
    age: 30,
    "account balance": 2000,
    0: "zero",
    1: "one",
    
}
console.log(obj);
 //{ name: 'Namita', account_balance: 1000, gender: 'Female', age: 30 }
// object is a collection of key value pairs
// key is a string and value can be any data type
console.log(typeof obj); //object
console.log(obj.name); //Namita
console.log(obj.account_balance); //1000
console.log(obj["gender"]); // Female   //accessing object properties using bracket notation
console.log(obj["account balance"]); //2000
//console.log(obj.account balance); //SyntaxError: Unexpected identifier
console.log(obj[0]); //zero
console.log(obj[1]); //one
console.log(obj);
// {
//     '0': 'zero',
//     '1': 'one',
//     name: 'Namita',
//     account_balance: 1000,
//     gender: 'Female',
//     age: 30,
//     'account balance': 2000
//   }


//  Key rules 
// 1. key should be a string
// 2. key should be unique
// 3. key is case sensitive
// 4. account balance this is not a valid key but  it can be store in [] bracket
// 5. account_balance is a valid key
// 6. it can be written in single or double quotes
// 7. it can be a number but store in string format
// 8. undefinef, null, NaN, Infinity can be a key

// array is also an object because it has key value pairs


// 2. Using the new Object() Syntax
const person = new Object();

// property add
person.name = "Namita";
person.age = 30;
person.gender = "Female";
console.log(person); // { name: 'Namita', age: 30, gender: 'Female' }
// delete
delete person.age;
console.log(person); // { name: 'Namita', gender: 'Female' }
// modify
person.name = "Namita Kumari";
console.log(person); // { name: 'Namita Kumari', gender: 'Female' }

// 3. class Syntax to make object creation more structured
class Person {
    constructor( name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;

    }
}
// this is a keyword which refers to the current object
let per1 = new Person("Shivam", 30, "Male");
// console.log(per1);  //Person { name: 'Shivam', age: 30, gender: 'Male' }
// constructor  ka matlab create karna or memory allocate karna
// advantage of constructor ki hum ek hi baar constructor ko call karke multiple object create kar sakte hain
let per2 = new Person("Namita", 30, "Female");
console.log(per1 , per2); 
//Person { name: 'Shivam', age: 30, gender: 'Male' } Person { name: 'Namita', age: 30, gender: 'Female' }

// common methods for objects