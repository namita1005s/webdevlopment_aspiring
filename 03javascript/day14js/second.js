// for in loop : isko array k liye use nahi karte hai
// array is also an object
const arr = [10, 20, 30, 40, 50];
for(let key in arr){
    console.log(key); // 0 1 2 3 4 // it will print index of array
    console.log(key, arr[key]); // 0 10 1 20 2 30 3 40 4 50
}
// par ye tho chal raha h ?
// fir tho ye change bhi hona cahiye  
const arr1 = [10, 20, 30, 40, 50];
arr1.name = "John";
for(let key in arr){

    console.log(key); // 0 1 2 3 4 name // it will print index of array
}
// asa isliye hua q ki for in loop enumerable true h tho vo print hoga or vo array k index ko print karega

//sirf basic loop kaam karega array k liye
const arr2 = [10, 20, 30, 40, 50];
arr2.name = "John";
for(let index=0;index<arr2.length;index++)
{
    console.log(arr2[index]); // 10 20 30 40 50
}