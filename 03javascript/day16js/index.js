//reduce
//reduce is a method that is used to reduce the array to a single value
//1. it takes a callback function as an argument
//2. it takes an initial value as an argument
// const result = arr.reduce(callback function, initialization) ye format h
// acc is the accumulator and curr is the current value
//initial value is optional
const arr =[10,20,30,40,50];
const result = arr.reduce((acc,curr)=>{
    // console.log(acc,curr); // to know the working of reduce
    acc=acc+curr;
    return acc;

},0) //initialization  for acc
console.log(result); //150
// single line m likhna h to given below
const result2 = arr.reduce((acc,curr)=>acc+curr,0);
console.log(result2); //150
// real world use of reduce
let arr2 = ["orange","apple","banana","orange","apple","banana","orange","apple","banana","graphes"];
const result3 = arr2.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr)) // to check if the property is present in the object or not
        acc[curr]++; // if present then increment the value
    else
        acc[curr]=1; // if not present then add the property and set the value to 1
    return acc;
},{});
console.log(result3);
//output: { orange: 3, apple: 3, banana: 3, graphes: 1 }

// Set 
// A set is a collection of unique values. It allows you to store values without duplicates, which makes it different from an array.
//The values in a Set can be of any type, such as primitives (numbers, strings, etc.) or objects.
//1.Add
//2.Delete
//3.has
//4.size
//5.clear

// let arr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
// set : {1,2,3,4,5,6,7,8,9} //unique values
const set = new Set([10,20,30,40]); // kitni baar bhi same value do lega ek hi baar
console.log(set); //Set { 10, 20, 30, 40 }
console.log(typeof set); //object
// ek or tarika h set bnane ka
const set2 = new Set();
set2.add(10);
set2.add(20);
set2.add(30);
set2.add("hello");
console.log(set2); //Set { 10, 20, 30, 'hello' }
//delete
set2.delete(20);
console.log(set2); //Set { 10, 30, 'hello' }
console.log(set2.size); //3
//has - to check if the value is present in the set or not
// lets take an example of insta id
const user_id = new set["rogin","justnamsss", "mohi_91", "ravi_123" ];
let new_user = "justnamsss"; //new user aya bola ye id use kar lu
console.log(user_id.has(new_user)); //true 
// has n bata diya pahle s h nahi use kar sakte
//clear
user_id.clear();
console.log(user_id); //Set {}
// sab clear ho gaya

//Array to Set and Set to Array
// let arr3 = [10,30,20,10,40,50,30];
// const set1 = new Set(arr3);
// console.log(set1); //Set { 10, 30, 20, 40, 50 }  // array ko badi asani s set bana diya 
let arr3 = [10,30,20,10,40,50,30];
const set1 = new Set(arr3);
arr = [...set1]; // spread operator ek ek kar k value ko bahar nikal dega
console.log(set1); // set ko array m convert kar diya

// Agar Union Operation karna ho to
let setA = new Set([1,2,3,4,5]);
let setB = new Set([4,5,6,7,8]);
let setC = new Set([...setA,...setB]); // spread operator use karke union operation kiya
console.log(setC); //Set { 1, 2, 3, 4, 5, 6, 7, 8 }

//Intersection Operation matlab common values ko nikalna
let setA1 = new Set([1,2,3,4,5]);
let setB1 = new Set([4,5,6,7,8]);
let setC1 = new Set([...setA1].filter(x=>setB1.has(x)));
console.log(setC1); //Set { 4, 5 }
// filter array ko filter karne k liye use hota h
// ... spread operator h isse  set ko array m convert kar diya
// has check karta h ki value set m h ya nahi
//  or agar result array ki form m chate ho tho follow below code
let setC2 = [...setA1].filter(x=>setB1.has(x));
console.log(setC2); //[ 4, 5 ]

//Iterate over set
//for of loop
for(let value of setA1){
    console.log(value); //1 2 3 4 5
}
//forEach
setA1.forEach((value)=>{
    console.log(value); //1 2 3 4 5
}) 






