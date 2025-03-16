// The this keyword  in JavaScript is a special keyword that refers to 
// the context in which the current code is being executed.
// Its value depends on how the function where this is used is called.


// 1: Global Context (Outside Any Function)
// In browsers: window 
// In Node.js: Module's exports object  (homework)


// console.log(this);
// this kahta h mera meaning change hota rahta h context ke hisab se
// console.log(this===window); //true 
// let a = 10; // all are part of global scope
// const b = 20; 
// var c = 30;  // global object me store hote hai
// console.log(this.c);
// function name(){
//          console.log("Hello");
// }  global object me store hote hai

console.log(this); //{} it points to empty object


// 2:Inside a Function 
// i: (Non-Strict Mode)
// When this is used inside a regular function, it refers to the global object.
// ii: Strict Mode
// this will be undefined inside a function.



// function greet(){
//     console.log(this);
// }

// greet(); it points to global object
// window.greet();
// strict mode me this undefined hota h

// what is strict mode?
a = 10;
console.log(a); // 10
"use strict"
a1 = 10;
console.log(a1); // error a1 is not defined
// strict mode rules follow karta h bahut strictly



// 3: Inside a Method (Object Context)
// When this is used inside an object’s method, it refers to the object that owns the method.

// const obj ={
//     name:"Rohit",
//     age:20,
//     meet: function(){
//         console.log(this.name); //Rohit
//     }
// }

// obj.meet();


// Arrow functions don’t have their own this. 
// Instead, they inherit this from the surrounding (lexical) scope.

// let obj = {
//     name:"rohit",
//     age:11,
//     greet: ()=>{
//         console.log(this);
//     }
// }

// obj.greet(); this points to global object that is window


// let obj = {
//     name:"rohit",
//     age:11,
//     greet: function(){
        
//         let ab = ()=>{
//             console.log(this);
//         };
//         ab();
//    }
// }

// obj.greet();   this points to object {name: "rohit", age: 11, greet: ƒ}


// Inside a Constructor or Class
// In constructors and classes, this refers to the instance of the object being created.

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }
// let a = new Person("Rohit", 20);
// console.log(a);
// let greet = ()=>{ khud ka this nahi hota h tho global object ko point karega that is window
//     console.log(this);
// }

// greet(); window
"use strict"
let meet = function(){
    console.log(this);
}
meet(); 
// let window ka part nahi hota h
//window.meet(); // error




