const num:number = 10;
//interface 
interface Person {
    name: string,
    age: number,
    gender: string,
    aadhar?: number //optional

}
const obj: Person = {
    name: 'zhangsan',   
    age: 18,
    gender:"male",
    aadhar: 123456 //ab chaho toh do varna nahi
}
// utility types for objects
// 1. Partial<person> sari properties optional ho jati hai
// 2. Readonly<person> properties ko change nahi kar sakte
// 3. Required<person>  sari properties required ho jati hai

interface customer {
    name: string,
    age: number,
    balance: number
}
const customer1: Partial<customer> = {
    name: 'zhangsan',
    age: 18
   
}
const customer2: Required<customer> = {
    name: 'zhangsan',
    age: 18,
    balance: 1000
}
const customer3: Readonly<customer> = {
    name: 'zhangsan',
    age: 18,
    balance: 1000
}

//Array of objects
interface people {name: string, age: number};
const arr: people [] = [{name:"Namita", age: 20},{name:"Shivam", age: 21}]

//function in js

// function greet(a){ this  will give error because of ANY
//     console.log(a);
//     return a+5;
// }
function greet(a:number):number{
    console.log(a);
    return a+5;
}
console.log(greet(5));

// if we want to paas two arguments
function meet(msg:string,val:number){ //agar define nahi kiya toh by default any hota hai
    console.log(msg,val);
}
meet("Namita Singh", 20);
//default parameter
function neet(msg:string = "Jit"){
    console.log(msg);
}
neet();
neet("Namita");

// optional parameter
function gate(person?:string){
    console.log(person || "Mohan");
}
gate("Namita");
gate();


//Arrow Function: Multiply
const sum = (a:number,b:number):number=>{
    return a+b;
}
console.log(sum(5,6));

//Rest parameter
function greet1(...names: string[]){
    console.log(names);
}
function total(...arr:number[]){
    let ans = 0;
    arr.forEach((val)=>ans = ans+val);
    console.log(ans);
}


// Callback function
function placeorder(order: number, callback: (amount:number) => void){
    const amount: number = order+10;
    callback(amount);
}
placeorder(10, (amount) => {
    console.log(amount);
})

// extend keyword
interface Person1 {
    name: string,
    age: number
};
interface Teacher extends Person1 {
    subject: string
    id: number

}
const obj5: Teacher = {
    name: 'Namita',
    age: 20,
    subject: 'Maths',
    id: 123 
}
