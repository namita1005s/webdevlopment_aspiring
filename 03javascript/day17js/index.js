// Js ia a synchronuus single threaded language.
//Hosting in javascript is the behaviour where variable and function declarations are moved to the top of their containing scope during the compile phase, before the code is executed.
// this means that javascript "hoists" or lifts the declarations (but not the assignments) to the top, so you can refer to them before they are written in the code. However only the declarations are hoisted, not the assignments or initializations.
// In other words; a variable can be used before it has been declared.


// as we know that if we declare a variable and then initialize it, it will give us undefined.
// console.log(x); // undefined
// var x = 5;

//but if we change it from var to let, it will give us an error.
// console.log(y);
// let y = 5; // error that we cannot access y before initialization.

// and if we will not define the variable and try to access it, it will give us an error.
// console.log(z); 
// let a = 5; // z is not defined.
// thus question is how javascript works?

var x1 = 10;
let y1 = 20;
console.log(x1); // 10
console.log(y1); // 20

// Hoisting in javascript
// jo bhi variable ya function declare hota hai, or apne aap top pe chala jata hai, usko hoisting kehte hain.
//chalo fuctions pe dekhte hain.
greet(); 
function greet(){
    console.log("Hello");
} // Hello
// memory allocation
// greet : function code 
// code execution phase
// greet() // Hello


meet(); // error 
var meet = function(){ // function variable m assign kiya hai
    console.log("Hi");
} 
// GEC - global execution context 
//memory allocation
// meet :  [Var undefined]
// {let or const m kuck nahi hota h} isme bhi error aayega
// code execution phase
// meet() // error meet is not a function

// inspect>source>snippet > new snippet > write code > run and ure strl + shift + r to refresh the page.
