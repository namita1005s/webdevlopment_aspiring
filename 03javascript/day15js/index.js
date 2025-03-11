//for  of loop
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let value of arr){
    console.log(value);
} // 1 2 3 4 5 6 7 8 9 10

let str = "Hello World";
for(let value of str){
    console.log(value);
} // H e l l o   W o r l d

//for of loop is for arrays and strings
// for of iterate  karta h array and string k elements pe
//for in loop is for objects 
//for of loop is not for objects

const obj = {
    name: "Chavvi",
    age: 21,
    genders: "female"
};
// for(let value of obj){
//     console.log(value);
// } // error because for of loop is not for objects

//but if you want to use for of loop for objects then you can use Object.keys() method
for(let value of Object.keys(obj)){
    console.log(value);
} 
// there is one more method that is forEach method and callback function
let arr2 = [1, 2, 3, 4, 5];
arr2.forEach(function(num){ // num is a call back function
    console.log(num);
});
// arrow function ka use karke h chalo 
arr2.forEach(num => console.log(num));
// arrow function n ekdum short kar diya h
// index bhi print karna h to
arr2.forEach((num, index) => console.log(num, index));
// or changes bhi kar sakte h array m
let arr3 = [1, 2, 3, 4, 5];
arr3.forEach((num,index,a) => {
    a[index] = num * 2;
});
console.log(arr3); // [2, 4, 6, 8, 10]
// single argument: number 
// double argument: number, index (optional)
// triple argument: number, index, array (optional)


// filter 
// ye same array.for each ki tarah h but isme filter kar sakta h
// isme bhi 3 argument de sakte h num, index, array
//1.isko pahle to call back function chahiye
//2. return statement chahiye or vo true or false return karega
//3. true return hua to vo element array m add hoga varna nahi
//4. or uss answer ko temprary result m store karega
let arr4 = [10,22,33,41,50];
const result = arr4.filter((num) => {
    return num%2===0;
})
console.log(result); // [10, 22, 50]
// or simple m likh sakte h
const result2 = arr4.filter(num => num%2===0);
console.log(result2); // [10, 22, 50]
// Let see good use of filter with below example
const students = [
    {name: "Chavvi", age: 21, marks : 80},
    {name: "Namita", age: 22, marks : 70},
    {name: "Riya", age: 20, marks : 90},
    {name: "Anjali", age: 23, marks : 60},
    {name: "Komal", age: 24, marks : 85},
    {name: "Rahul", age: 25, marks : 75},
    
]
const result4 = students.filter((value) => {
    return value.marks>70;
});
console.log(result4); 
// [ { name: 'Chavvi', age: 21, marks: 80 }, { name: 'Riya', age: 20, marks: 90 }, { name: 'Komal', age: 24, marks: 85 } ]
// or simple m likh sakte h
const result5 = students.filter(value => value.marks>70);
//or
const result6 = students.filter(marks => marks.age>20);

// map
// isme hum modify kar sakte h 
//1. isme bhi call back function chahiye
//2. isme bhi 3 argument de sakte h num, index, array
//3. isme bhi return statement chahiye
//4. isme bhi ek temprary result m store karega

const arr5 = [1, 2, 4, 5, ];
const result7 = arr5.map((num) => {
    return num*num
});
console.log(result7); // [1, 4, 16, 25]
// or simple m likh sakte h
const result8 = arr5.map(num => num*num);
console.log(result8); // [1, 4, 16, 25]
// Let see good use of map with below example
const result9 = students.map((value) => {
    return value.name;
});
console.log(result9); // [ 'Chavvi', 'Namita', 'Riya', 'Anjali', 'Komal', 'Rahul' ]

// chalo filter or map dono ek sath use karte h
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result10 = arr6.filter(num => num%2===0).map(num => num*num);
console.log(result10); // [ 4, 16, 36, 64, 100 ]
// . use karke ek s sath likh sakte h
// for each m kuch bhi return nahi hota h