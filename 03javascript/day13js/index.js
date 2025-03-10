// Conditional Statements
// In JavaScript we have the following conditional statements:
// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

// Different Kinds of Loops
// JavaScript supports different kinds of loops:
// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

//if-else //for two conditions
let age = 18;
if (age >= 18) 
{
  console.log("You are eligible for voting");
} 
else 
{
  console.log("You are not eligible for voting");
}

//if-else if-else  //for multiple conditions
let time = 21;
if (time < 10) 
{
  console.log("Good morning");
}
else if (time > 20)
{
  console.log("Good day");
}   
else
{
  console.log("Good evening"); 
}

//switch case 
//for multiple conditions but when we have to check the value of a variable

switch (new Date().getDay()) 
//getDay() method returns the weekday as a number (0-6)
{
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}
//Switch cases use strict comparison (===). 

//for loop //for a specific number of times
for(let i=0;i<20;i++)
{
    console.log("Hello World");
}
//sum of first n number:10
let sum=0;
for(let i=1;i<=10;i++)
{
    sum=sum+i;
}
console.log(sum);

//Nested for loop //for loop inside another for loop
//12345
//12345
//12345
//12345
//12345
//12345
for (let i = 0; i < 6; i++) {
    let row = ""; // Initialize empty string for each row
    for (let j = 1; j <= 5; j++) {
        row += j; // Append numbers to row
    }
    console.log(row); // Print row after inner loop
}


//while loop //for an unknown number of times
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
//do-while loop //for an unknown number of times
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

//array elements ko kase access karte hai
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// lets see use of for in array
const obj = {
    name: "John",
    age: 30,
    city: "New York"  
};
const a = Object.values(obj);
console.log(a); // [ 'John', 30, 'New York' ]
const b = Object.keys(obj);
console.log(b); // [ 'name', 'age', 'city' ]
for(let i=0;i<b.length;i++)
{
    console.log(obj[b[i]]);
} // John 30 New York
//shrtcut to achive the same
// for in loop but we will study tommorow
