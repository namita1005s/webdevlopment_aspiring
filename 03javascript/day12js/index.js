function greet(){ //function definition
    console.log('Hello world'); //function body
    console.log('Good Morning');
    console.log('Good Afternoon');
    console.log('Good Evening');
    console.log('Good Night');
    console.log('Bye');
}
greet(); //calling function
function add(a,b){  // function with parameters
    console.log(a+b)
};
add(10,20); //calling function with arguments //30
add(100,200);//300

function multiply(a,b){
    console.log(a*b); //200
    //or
    return a*b; //200
}
multiply(10,20); //200
//or
let result = multiply(10,20);
console.log(result); //200
//or
console.log(multiply(10,20)); //200

const fun1 = function(){ // function in variable
    console.log('Hello');
    return 'Hello';
}
fun1(); //Hello
console.log(fun1); // [Function: fun1]
console.log(fun1()); //Hello undefined  
//Hello Hello  agar retun  nahi ho to undefined aayega
// return k neeche kuch bhi likha hua h to vo undefined aayega print nahi hoga


// Arrow function very important
const fun2 = () => {
    console.log('Arrow function');
}
fun2(); //Arrow function

const sum = (number1,number2) => {
    return number1+number2;
}
console.log(sum(10,20)); //30

const sub = (number1,number2) => number1-number2;
console.log(sub(20,10)); //10

//1 method
const cube = function(number){
    return number*number*number;
}
console.log(cube(3)); //27
//2 method
const cube1 = (number) => number*number*number;
console.log(cube1(3)); //27
// number m single parameter h to () nahi likhna padega
//agar multiple parameter h to () likhna padega
//3 method
const cube2 = number => number*number*number;
console.log(cube2(3)); //27
//4 method
const cube3 = number => {
    return number*number*number;
}

// jab pata na ho ki kitne argument pass honge to rest operator use karte h
const sum1 = function(...number){
    console.log(number); // rest operator collect all the arguments in array

}
sum1(2,3,4); //[ 2, 3, 4 ]
sum1(2,3,4,5,6,7,8,9,10); // [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
sum1(2,3); //[ 2, 3 ]

// object ko bhi pass kar sakte h
let obj = {
    naaam : "KL Rahul",
    age : 32,
    amount : 1000000,
}
function funny(obj1){
    console.log(obj1.naaam , obj1.age , obj1.amount);
}
funny(obj); //KL Rahul 32 1000000
function funny1({naaam,age,amount}){ // object destructuring
    console.log(naaam , age , amount);
}