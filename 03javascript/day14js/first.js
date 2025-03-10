let obj = {};
console.log(obj); // here we have empty object
// so how to add property to object

obj.name = "Neha";
//key value writable enumerable configurable
console.log(obj); // { name: 'Neha' }
console.log(Object.getOwnPropertyDescriptor(obj, "name")); // { value: 'Neha', writable: true, enumerable: true, configurable: true }
// Jab object banaya to writable, enumerable, configurable apne aap add ho jata h
// writable : true  // we can change the value of property
// wrtitable : false // we can't change the value of property
obj.name = "Rohit";
console.log(obj); // { name: 'Rohit' }
// configurable : true // we can change value of writable, enumerable, configurable
// configurable : false // we can't change value of writable, enumerable, configurable
let obj2 = {};
Object.defineProperty(obj, "name", {
    value: "Neha",
    writable: true,
    enumerable: true,
    configurable: true,
});
console.log(obj2); // { name: 'Neha' }
console.log(Object.getOwnPropertyDescriptor(obj2, "name")); // { value: 'Neha', writable: true, enumerable: true, configurable: true }

// let see good use of configurable
let obj1 ={
    name: "Nancy",
    age: 20,
    account_number: 123456
};
Object.defineProperty(obj1, "account_number", {
    writable: false,
    enumerable: true,
    configurable: false,
});
// Trying to modify account_number (should not work)
obj1.account_number = 654321;
console.log(obj1.account_number); // 123456
// we can't change the value of account_number because it is not writable

// enumerable :  jis bhi key ka enumerable true hoga, un sabko access hoga ya print hoga
// Inherit ho k bhi property or key ati h , uska  enumerable true hua  tho vo bhi print hoga
const customer = {
    naam: "bekar",
    age: 20,
    acc_no: 1234567,
    balanc: 1000,
};

let customer1 = Object.create(customer);
customer1.city = "New York";
customer1.money = 2000;

// Making `naam` non-enumerable
Object.defineProperty(customer, "naam", {
    enumerable: false,
})
// Looping through keys
console.log("Keys in customer:");
for (let key in customer) {
    console.log(key); // Outputs: age acc_no balanc
}

console.log("Keys in customer1:");
for (let key in customer1) {
    console.log(key); // Outputs: city money age acc_no balanc
}

// THUS object.prototype key  enumerable false hote h
for(let key in customer)

    console.log(key); // age acc_no balanc
console.log(Object.getOwnPropertyDescriptor(customer, "naam")); // { value: 'bekar', writable: true, enumerable: false, configurable: true }
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString")); // { value: [Function: toString], writable: true, enumerable: false, configurable: true }
// enumerable : false // we can't access the 

//chalo isko enumerable true kar dete hai
Object.defineProperty(Object.prototype, "toString", {
    enumerable: true,
});
for (let key in customer) {
    console.log(key); // age acc_no balanc toString
}

//