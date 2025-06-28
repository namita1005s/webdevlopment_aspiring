// array
// length:Number of elements in an array
// Push():Adds an element to the end of an array
// Pop():Removes the last element from an array
// unshift():Adds an element to the beginning of an array
// shift():Removes the first element from an array
// indexOf():Returns the first index at which a given element can be found in the array, or -1 if it is not present
// includes():Determines whether an array includes a certain element, returning true or false as appropriate
// slice(): Extracts a portionof the array without modifying it.
// splice():Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// ES2022: INTRODUCE ARRAY METHODS at() and structuredClone()
// at(): Returns the element at the specified index in an array
// structuredClone(): Returns a deep copy of an array
// toString(): Converts an array to a string
// join(): Joins all elements of an array into a string
// concat(): Merges two or more arrays
// flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth

//Create new array()
// 1. Array.isArray()




const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,"hello","world"] ;
console.log(arr[2]);// 3
console.log(arr.at(2));// 3
console.log(arr.at(-2));//  hello
console.log(arr.at(-12)); // 1
// at is latest , negative index le leta hai

console.log(arr.length);// 12
const newarr = arr;
console.log(newarr);// [1,2,3,4,5,6,7,8,9,10,'hello','world']
console.log(newarr==arr);// true
// newarr and arr are pointing to same memory location so they are equal
// const newarr = structuredClone(arr); 
// console.log(newarr==arr);// false
// structuredClone array ko copy karke naya array banata hai .jo ki alag memory me store hota hai
// so newarr and arr are not equal
// console.log(arr.push(11));// 13
// console.log(arr);// [1,2,3,4,5,6,7,8,9,10,'hello', 'world',11]
// console.log(arr.pop());// 11
// console.log(arr);// [1,2,3,4,5,6,7,8,9,10,'hello', 'world']
// console.log(arr.unshift(0));// 13
// console.log(arr);// [0,1,2,3,4,5,6,7,8,9,10,'hello', 'world']
// console.log(arr.shift());// 0
// console.log(arr);// [1,2,3,4,5,6,7,8,9,10,'hello', 'world']

// //delete operation to delete particular element using index
// delete arr[5];
// console.log(arr);// [ 1, 2, 3, 4, 5, <1 empty item>, 7, 8, 9, 10, 'hello', 'world' ]
// // it creates hole in the array and does not change the length of the array
// console.log(arr[5]);// undefined
// console.log(arr[6]);// 7
console.log(arr);// [1,2,3,4,5,6,7,8,9,10,'hello','world']
console.log(arr.push(5));// 13
console.log(arr);// [1,2,3,4,5,6,7,8,9,10,'hello','world',5]
console.log(arr.indexOf(5));// 4
console.log(arr.lastIndexOf(5));// 12
console.log(arr.includes(5));// true
console.log(arr.includes(11));// false

// slice
console.log(arr);// [1,2,3,4,5,6,7,8,9,10,'hello','world',5]
console.log(arr.slice(2));// [3,4,5,6,7,8,9,10,'hello','world',5]
console.log(arr.slice( 5));// [6,7,8,9,10,'hello','world',5]
console.log(arr.slice(6,8)); // [7,8]
console.log(arr.slice(2,5));// [3,4,5]

// splice IMPORTANT
console.log(arr.splice(2,5));// [3,4,5,6,7]
// 2 s shuru karo or 5 element do splice(starting_index,total_element_delete,add value)
console.log(arr);// [1,2,8,9,10,'hello','world',5]
// ye original array me changes karta hai or sach m delete kar deta hai
console.log(arr.splice(2,0,3,4,5,6,7));// [] delete nahi karna hai or add karna hai 0 laga do
console.log(arr);// [1,2,3,4,5,6,7,8,9,10,'hello','world',5]

console.log(arr.toString());// 1,2,3,4,5,6,7,8,9,10,hello,world,5
console.log(typeof arr.toString());// string
console.log(arr.join("* "));// 1* 2* 3* 4* 5* 6* 7* 8* 9* 10* hello* world* 5
console.log(arr.join(" "));// 1 2 3 4 5 6 7 8 9 10 hello world 5
console.log(arr.join(""));// 12345678910helloworld5

// concat
let arr5 = [11,12,13,14,15];
let arr6 = [16,17,18,19,20];
let arr8 = ["Namita","Shivam","Ankush"];
let arr9 = ["Rahul","Kamal","Ravi"];
// let arr7 = arr5.concat(arr6);
// console.log(arr7);//[ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let arr7 = arr5.concat(arr6,arr8,arr9);
console.log(arr7);//[ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 'Namita', 'Shivam', 'Ankush', 'Rahul', 'Kamal', 'Ravi' ]
//array is in 1D form dont think it is 2D array

//2D array
let arr10 = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr10);//[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// to acess enter row and column
console.log(arr10[0][1]);// 2
console.log(arr10[1][2]);// 6
console.log(arr10[0]);// [ 1, 2, 3 ]
console.log(arr10[1]);// [ 4, 5, 6 ]
console.log(arr10[2]);// [ 7, 8, 9 ]
console.log(arr10[0][0]);// 1

//3D array
let arr11 = [[[1,2,3],[4,5,6]],[[7,8,9],[10,11,12]]];
console.log(arr11);//[ [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], [ [ 7, 8, 9 ], [ 10, 11, 12 ] ] ]
console.log(arr11[0][0][0]);// 1
console.log(arr11[0]);// [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
console.log(arr11[0][0]);// [ 1, 2, 3 ]

//convert 2D array to 1D array
let arr36_2D = [[1,2,3],[4,5,6],[7,8,9]];
let newarr3 = arr36_2D.flat();
//flat method is used to convert 2D array to 1D array
console.log(newarr3);//[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//if we put 3d array
let arr36_3D = [[[1,2,3],[4,5,6]],[[7,8,9],[10,11,12]]];
let newarr4 = arr36_3D.flat(Infinity);
//Infinity is used to convert 3D array to 1D array
console.log(newarr4);//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
// flat(Infinity) for 3D array, flat(2) for 2D array, flat(1) for 1D array BY default it is 1

//if you want to confirm backend s array hi aya h ye kase confirm kare
console.log(Array.isArray(newarr3));// true
console.log(Array.isArray(newarr4));// true
//one more method we have but not recommendable
let ac = new Array(2,326,3243,3434); //is tarah s bhi array bana sakte h
console.log(ac);//[ 2, 326, 3243, 3434 ]
// but agar single value dete h usko tho sirf size ayga
let ac2 = new Array(4);
console.log(ac2);//[ <4 empty items> ]
console.log(ac2.length);// 4
console.log(Array.isArray(ac2));// true

// In Js array is object and it is not stored in contiguous memory location
// because type pahle decide nahi hota or size bhi pahle decide nahi hota isse data loss ho sakta h
// array is stored in heap memory




 
