let user1 = {
    naam: "Namita",
    age: 25,
}
let user2 = {
    balance: 500,
    aadhar: "fhjfddjk",
}
console.log(user1.naam); // Namita
console.log(user2.balance); // 500
// prototype chaining
user2.__proto__ = user1;
console.log(user2.naam); // Namita
// property are inherited from user1
// object k sath prototype apne aap attach  ho jata hai
let arr = [3,2,1,5,10];
console.log(arr.__proto__===Array.prototype); // true
console.log(arr.__proto__.__proto__===Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__); // null