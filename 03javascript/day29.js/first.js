console.log("Hello, World!");

setTimeout(() => {
    const a = 2+4;
    console.log(a);
},5000);

setInterval(() => {
    console.log("This is an interval");
}, 2000);

let b = 20;
let arr = [20, 30,11];

for(let i of arr) {
    console.log(i*b);
}

// Hello, World!
// 400
// 600
// 220
// This is an interval
// This is an interval
// 6
// This is an interval
// This is an interval
// This is an interval

// this is because asynchronous code is executed after the synchronous code
// and the setTimeout and setInterval functions are asynchronous.


// ex2 of asynchronous code
console.log("This is the end of the code");
fetch("https://youtube.com  ")
.then(()=>console.log("This is the response") );
console.log("This is the end of the code 2");

// This is the end of the code
// This is the end of the code 2
// This is the response