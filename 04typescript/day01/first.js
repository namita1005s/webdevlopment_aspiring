// tyescript is a superset of javascript

//problems with javascript
//1.
let age = 10;
age = 'ten'; // yaha string daal diya
console.log(age); // ten jab ki hum age ko no m  chah rahe hain
console.log(age*10); // NaN par yaha error nahi aana chahiye
//2.
let obj = {
    name: 'John',
    age: 10
}
console.log(obj.len); // undefined jab ki error hona chahiye

// typescript in sab problems ko solve karta hai isme hume type define karne hote hain
// humara browser typescript ko nahi samajhta isliye hume typescript ko javascript m convert karna hota hai
// typescript -> javascript -> browser
// we use compiler to convert typescript to javascript 
// i.e  on cmd type (npm install -g typescript) to install typescript globally
// then type (tsc filename.ts) to convert typescript to javascript