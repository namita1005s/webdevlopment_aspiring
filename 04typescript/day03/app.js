"use strict";
const num = 10;
const obj = {
    name: 'zhangsan',
    age: 18,
    gender: "male",
    aadhar: 123456 //ab chaho toh do varna nahi
};
const customer1 = {
    name: 'zhangsan',
    age: 18
};
const customer2 = {
    name: 'zhangsan',
    age: 18,
    balance: 1000
};
const customer3 = {
    name: 'zhangsan',
    age: 18,
    balance: 1000
};
;
const arr = [{ name: "Namita", age: 20 }, { name: "Shivam", age: 21 }];
//function in js
// function greet(a){ this  will give error because of ANY
//     console.log(a);
//     return a+5;
// }
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(5));
// if we want to paas two arguments
function meet(msg, val) {
    console.log(msg, val);
}
meet("Namita Singh", 20);
//default parameter
function neet(msg = "Jit") {
    console.log(msg);
}
neet();
neet("Namita");
// optional parameter
function gate(person) {
    console.log(person || "Mohan");
}
gate("Namita");
gate();
//Arrow Function: Multiply
const sum = (a, b) => {
    return a + b;
};
console.log(sum(5, 6));
//Rest parameter
function greet1(...names) {
    console.log(names);
}
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => ans = ans + val);
    console.log(ans);
}
// Callback function
function placeorder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
placeorder(10, (amount) => {
    console.log(amount);
});
;
const obj5 = {
    name: 'Namita',
    age: 20,
    subject: 'Maths',
    id: 123
};
