//globalobject -  it is a kind of  library
//obj.name
// // globalobject: object
// // Chrome Browser: window
// // Nodejs: global
// // globalThis

// console.log("Hello World");
// console.log(Math.random());
// // setInterval();
// // new Object();
// //  new String("Rohit");

// // let obj = {
// //     name:"Rohit",
// //     age:12
// // };
// // obj.name

// console.log(global);  ye puri list sega global object ki
// console.log(window.Math.random()); ye browser me chalega isliye error dega
// console.log(globalThis.Math.random()); node js me globalThis use hota hai
// global this ka use karte hai jab hume pata nahi hota ki browser me konsa object use hoga
"use strict"
 


// a = 10;
// console.log(a);

let obj = {
    name:10
}

Object.freeze(obj);
obj.name = 30;
console.log(obj);