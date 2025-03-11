//call back function
function names(fun){ // fun is a call back function
    console.log("Hello I am Namita");
    fun();
}
function greet(){
    console.log("Hello I am Call Back Function"); }//greet or fun ek ho chuke h or ab iska reference jayga names function m
// names(); // Hello I am Namita
// greet(); // Hello I am Call Back Function

// callbak function usko kahte h jo ek function k argument m pass hota h or jab wo function call hota h to us function m ek function ko call karte h
// or us function ko call back function kahte h
// refernce of function pass karte h call back function m
names(greet);
// what is use case?
// 1. you can also write a function inside a function
names(function greet(){
    console.log("Hello I am Call Back Function");
});
// 2. you can store it in a variable
const greet = function(){
    console.log("Hello I am Call Back Function");
}
names(greet);
// 3. arrow function s bhi bhj sakte h
names(() => {
    console.log("Hello I am Call Back Function");
});
function fetchData(){
    // fetch data from server
    // backend s data uthaya fronted m dikhane k liye or maan lo har 5 sec m data change ho raha h
    console.log("Data fetched successfully");}
setInterval(fetchData, 5000); // 5 sec m ek baar fetchData function call hoga
// setInterval ek function h jo ek function or ek time interval leta h or us function ko us time interval k baad call karta h
// milisecond m time interval leta h
// har 5 sec m ayga (Data fetched successfully)