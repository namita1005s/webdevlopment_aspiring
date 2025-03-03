//primitive data type

// const num = 10;
// console.log(num); // 10

// const num = 10;
// num = 20;
// console.log(num);// TypeError: Assignment to constant variable.

//non-primitive data type
const obj = {
    id: 20,
    balance: 1000
}
obj.id = 30;
console.log(obj); // { id: 30, balance: 1000 }

// thus we can see that the object is mutable even if it is declared as a constant variable.
 
// const obj2 = {
//     id: 20,
//     balance: 1000
// }
// obj = obj2;
// // console.log(obj); // TypeError: Assignment to constant variable.
// in this case error is thrown because we are trying to change the reference of the object which is not allowed in constant variable. and the object in the heap memory is mutable but the reference of the object is immutable.

//string in js

let str1 = 'Hello';
let str2 = "hello";
let str3 = `hello`;
let str4 = "or sab kuch \"theek\" hai";
let str5 = 'or sab kuch "theek" hai';   
let str6 = `or sab kuch "theek" hai`;
// ek quote ko dusre quote ke andar use karne ke liye \ use karte hai ya fir dusre quote use karenge
console.log(str1); // Hello     
console.log(str2); // hello
console.log(str3); // hello
console.log(str4); // or sab kuch "theek" hai
console.log(str5); // or sab kuch "theek" hai
console.log(str6); // or sab kuch "theek" hai
let str7 = 'Hello\nWorld';
console.log(str7); // Hello
                    // World
// \n ko bhi prrint karne k liye \ use karte h
let str8 = 'Hello\\nWorld';
console.log(str8); // Hello\nWorld

let special = "Namita Singh";
console.log(special[0]); // N
console.log(special[4]); // a
console.log(special.charAt(0)); // N

let price = 100;
console.log(`The price of the product is ${price}`); // The price of the product is 100 
console.log(`The price of the product is `,price,); // The price of the product is 100  BUT IT IN NOT GOOD APPROACH TO USE
// we can use ${} to use the variable in the string IT IS MODERN WAY TO USE 

//String concatenation
let str77 = 'Hello';
let str88 = 'World';
let str9 = str7 + str8;
console.log(str9); // HelloWorld
//length of the string
console.log(str9.length); // 10
//string to uppercase
console.log(str9.toUpperCase()); // HELLOWORLD
//string to lowercase
console.log(str9.toLowerCase()); // helloworld
// search in string
console.log(str9.indexOf('World')); // 5 pehle check karega h ki nahi fir first ka index dega

let wrdfind = "Namita ki dunia";
console.log(wrdfind.lastIndexOf("dunia")); // 9 agar vo word nahi milta to -1 return karega
console.log(wrdfind.includes("Namita")); // true
console.log(wrdfind.includes("Singh")); // false

// Extracting string parts
let newstring = "Apple, Banana, Kiwi"; 
//-18 -17 -16 -15 -14 -13 -12 -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1
//  A   p   p   l   e   ,       B   a   n   a   n   a   ,   K   i   w   i
console.log(newstring.slice(7, 13)); // Banana
console.log(newstring.slice(-7, -5)); // Ba
console.log(newstring.slice(7)); // Banana, Kiwi
// slice is used to extract the part of the string
console.log(newstring.substring(7, 13)); // Banana 
// substring is similar to slice but it does not accept negative values
const str = "Mozilla";
console.log(str.substr(1, 2));// oz
console.log(str.substr(2));// zilla
// substr is similar to slice but second argument is the length of the string
// second argument is the length of the string means it will extract the string from the first argument to the length of the second argument
console.log(str.substr(-5, 2));// zil

// replace string
let str10 = "Please visit Microsoft! Microsoft is a great company.";
let n = str10.replace("Microsoft", "W3Schools");
console.log(n); // Please visit W3Schools! Microsoft is a great company.
let m = str10.replaceAll("Microsoft", "W3Schools");
console.log(m); // Please visit W3Schools! W3Schools is a great company.
// replaceAll is used to replace all the occurences of the string
// replace is used to replace the first occurence of the string

// splitting the string
let str11 = "How are you doing today?";
let arr = str11.split(" ");
console.log(arr); // [ 'How', 'are', 'you', 'doing', 'today?' ]
// split is used to split the string into array of strings
console.log(str11.split("o")); // [ 'H', 'w are y', 'u d', 'ing t', 'day?' ]

// removing whitespaces of the start and end of the string
let str12 = "       Hello World!        ";
console.log(str12.trim()); // Hello World!
console.log(str12.trimStart()); // Hello World!
console.log(str12.trimEnd()); //        Hello World!

// new way to create string
let lasteststring =  new String("Hello World");
console.log(lasteststring); // [String: 'Hello World']
console.log(typeof lasteststring); // object