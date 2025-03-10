// Object.keys()
// Object.values()
// Object.entries()
// Object.assign() copies properties from one or more source objects to a target object
// Object.freeze() prevents modification to the object
// Object.seal() prevents adding or removing properties but allows modification of existing properties
// nexted objects

// Destructuring

// difference between cell copy and shallow copy
// shallow copy because it is only copying the reference of the object
let obj1 = {
    a:1,
    b:2
}
let obj2 = obj1;
console.log(obj2); // {a:1, b:2}
// if i cahange ib obj2 then obj1 will also change
obj2.a = 10;
console.log(obj1); // {a:10, b:2}
console.log(obj2); // {a:10, b:2}
// deep copy  creates an entirely independent object, with no shared reference
let obj3 = structuredClone(obj1);
obj3.a = 100;
console.log(obj1); // {a:10, b:2}
console.log(obj3); // {a:100, b:2}

//Nested objects 
const user = {
    name: 'John',
    balance: 100,
    address: {
        street: '123 Main St',
        city: 'New York'
    }
   
}
console.log(user.address.city); // New York

// assign 
const user2 = Object.assign({}, user);
console.log(user2); // {name: "John", balance: 100, address: { street: '123 Main St', city: 'New York' }
user2.address.city = 'LA';
console.log(user.address.city); // LA   // it is changing the original object as well because it is a shallow copy and being a nested object
user2.name = 'Jane';
console.log(user.name); // John // it is not changing the original object because it is deep copy and not a nested object
// use structuredClone for shallow copy and nested objects

// Destructuring of objects
let obj = {
    names: "Namita",
    money: 1000,
    age: 25,
    balance: 500,
    aadhar: "fhjfddjk"
};
// const { names: full_name, balance, age } = obj;
// // console.log(names); // undefined
// console.log(full_name); // Namita 
// console.log(balance); // 500
// console.log (age); // 25
// console.log(obj); // {names: "Namita", money: 1000, age: 25, balance: 500}
const {names, age,...obj4} = obj;
console.log(names); // Namita
console.log(age); // 25
console.log(obj4); // {money: 1000, balance: 500, aadhar: "fhjfddjk"}
//...obj4 is rest operator which is used to get the remaining properties of the object
// rest operator is used to get the remaining properties of the object

// now array destructuring
const arr = [3,2,1,5,10];
const [first,second, ,third ] = arr;
console.log(first, second, third); // 3 2 5
// we can also use spread operator in array destructuring
const [first1, ...rest] = arr;
console.log(first1); // 3
console.log(rest); // [2,1,5,10]

// combination of object and array destructuring
const obj5 = {
    naam: "Namita",
    age: 25,
    balance: 500,
    aadhar: "fhjfddjk",
    arr: [3,2,1,5,10],
    address: {
        street: '123 Main St',
        city: 'New York'
    }
};
const{naam} = obj5;
console.log(naam); // Namita
const {address:adds} = obj5;
console.log(adds); // {street: '123 Main St', city: 'New York'}
const {address: {street}} = obj5;
console.log(street); // 123 Main St

const {arr: arr2} = obj5;
console.log(arr2); // [3,2,1,5,10]
const {arr: [firsts]} = obj5;
console.log(firsts); // 3

// also we add function in object
let user3 = {
    nam: "Namita",
    age: 25,
    amount: 500,
    greet:function(){
        return "Hello";
    },
    meet: function(){
        return 20;
    }
}
user3.greet(); 
console.log(user3.greet()); // Hello
user3.meet(); 
console.log(user3.meet()); // 20

//prototype chaining IT IS IMPORTANT
let obj6 = {
    naaam : "Namita",
    amount: 500,
    greet:function(){
        return "Hello";
    }
}
console.log(obj6.naaam); // Namita
console.log(obj6.amount); // 500
console.log(obj6.greet()); // Hello
console.log(obj6.toString()); // [object Object]
// toString tho banaya nahi tha phir bhi chala kaise?? aya kaise???
