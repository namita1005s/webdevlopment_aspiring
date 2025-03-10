//scope
// Global scope -- matlab ki jo bhi variable bahar define hua hai usko global scope bolte hai
// Local scope(Function scope)
// Block scope
//var - var is not good to use because it is not block scoped

// Global scope // kahi bhi acsess kar sakte hai
let a1 = 10;
var b1 = 20;
const c1 = 30;

function test(){
    console.log(a1);
    console.log(b1);
    console.log(c1);
};
test();
console.log(a1);
console.log(b1);
console.log(c1);

// Local scope // sirf function ke andar access kar sakte hai
// function ke andar define kiya hua variable ko local scope bolte hai
function test1(){
    let a2 = 40;
    var b2 = 50;
    const c2 = 60;
    console.log(a2);
    console.log(b2);
    console.log(c2);
};
test1();
// console.log(a2); // error
// console.log(b2); // error
// console.log(c2); // error


// Block scope // sirf block ke andar access kar sakte hai
// block means if, else, for, while, do while, switch
if(true){
    let a3 = 70;
    var b3 = 80;
    const c3 = 90;
    console.log(a3);
    console.log(b3);
    console.log(c3);
};
console.log(b3);
// console.log(a3); // error
// console.log(c3); // error
// only var is accessable outside the block scope
// that's why we use let and const instead of var
// var s multiple time declare kar sakte h 
// var b3 = 100;
// console.log(b3);
// var b3 = 110;
// console.log(b3);

// in global scope
let amount = 100;
if(true){
    let amount = 200; 
    // let amount = 300; // error 
    console.log(amount); 
};
// let amount = 400; // error

// pahle declare karo fir use karo let and const m
greet();
function greet(){
    console.log("Hello");
};
// greet(); // Hello

// meet(); // error
const meet = function(){
    console.log("Hi");
};
meet();