let num1 = 102228;
let num2 = new Number(102228);
let num3 = new Number(102228);
console.log(num1==num2);//true
// == first converts the object into primitive value and then compare
//true because both have same value
console.log(num2==num3);//false
// == will directly compare the objects as because different refrence in the heap memory
//false because both are different objects
console.log(num2);//[Number: 102228]
console.log(typeof num2); // object

let num4 = 102.228;
console.log(num4.toFixed(2)); // 102.23 
console.log(num4.toPrecision(5)); // 102.23 
console.log(num4.toExponential(2)); // 1.02e+2
let strNum = num4.toString(); // "102.228"
console.log(typeof strNum); // "string"

// Math
console.log(Math.E); // 2.718281828459045
console.log(Math.LN10); // 2.302585092994046  log e 10   e ki power
console.log(Math.PI); // 3.141592653589793
// and many more

console.log(Math.random()); // 0.12345678910111213 (0<=value<1)
console.log(Math.random()*10); // 0.12345678910111213 (0<=value<10)
console.log(Math.floor(Math.random()*10)); //  ab 0<=value<10 random no generate hoga 0 se 9 tak

// floor and ceil
let num12 = 10.5;
console.log(Math.floor(num12)); // 10
console.log(Math.ceil(num12)); // 11
console.log(Math.round(num12)); // 11

// generate random number between 1 to 10
let randomNum = Math.floor(Math.random()*10)+1;
console.log(randomNum);
// generate random number between 11 to 20
let randomNum2 = Math.floor(Math.random()*10)+11;
console.log(randomNum2);

// min =40 and max = 50 TODAY WE WILL LEARN FORMULA TO GENERATE RANDOM NUMBER FROM ANY RANGE
// console.log(Math.floor(Math.random()*(max-min+1)+min)); // this formula is used to generate random number between min and max
console.log(Math.floor(Math.random()*(50-40+1)+40)); // 40 to 50


//0-9
console.log(Math.floor(Math.random()*10));
//0-10
console.log(Math.floor(Math.random()*11));
//0-11
console.log(Math.floor(Math.random()*12));
//0-12
console.log(Math.floor(Math.random()*13));
//1-10
console.log(Math.floor(Math.random()*10)+1);
//1-11
console.log(Math.floor(Math.random()*11)+1);
//2-10
console.log(Math.floor(Math.random()*9)+2);
//40-50
console.log(Math.floor(Math.random()*11)+40);
//40-60
console.log(Math.floor(Math.random()*21)+40);
//60-80
console.log(Math.floor(Math.random()*21)+60);

//Ludo game
// 1-6
console.log(Math.floor(Math.random()*6)+1);