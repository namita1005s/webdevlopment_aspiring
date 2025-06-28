// call back Hell


// callback function: why it is used?
function fetchuser(callback){
    console.log("fetching user data...")
    setTimeout(() => {
    console.log("Data Fetched successfully");
    
    }, 2000); // 2 sec m data fetch hoga
}
fetchuser(); // fetching user data...
// Data fetched successfully

// callback function: why it is used?
function fetchuser(callback){
    console.log("fetching user data...")
    setTimeout(() => {
    console.log("Data Fetched successfully");
    const name = "Rohit"; // maan lo ye information laya h backend s 
    // Data fetched from backend
    greet("Rohit");
    }, 2000); 
}

function greet(name){
    console.log(`Hello ${name}`);
}

fetchuser(); // fetching user data...
// Data fetched successfully
// Hello Rohit


function fetchuser(callback){
    console.log("fetching user data...")
    setTimeout(() => {
    console.log("Data Fetched successfully");
    const name = "Rohit"; // maan lo ye information laya h backend s 
    // Data fetched from backend
    meet("Rohit");
    }, 2000); 
}

function greet(name){
    console.log(`Hello ${name}`);
}
function meet(name){
    console.log(`Hello ${name}, I will meet you in Delhi`);
}

fetchuser(); // fetching user data...
// Data fetched successfully
// Hello Rohit, I will meet you in Delhi



// Now lets see advantage of callback function
function fetchuser(callback){
    console.log("fetching user data...")
    setTimeout(() => {
    console.log("Data Fetched successfully");
    const name = "Rohit";
    callback(name);
    }, 2000); // 2 sec m data fetch hoga
}

function greet(name){
    console.log(`Hello ${name}`);
}

function meet(name){
    console.log(`Hello ${name}, I will meet you in Delhi`);
}

fetchuser(greet); //  Hello Rohit
fetchuser(meet); //  Hello Rohit, I will meet you in Delhi

//best use case is in object 
// ex
function greetUser(user, callback) {
  console.log("Fetching user info...");
  setTimeout(() => {
    console.log("User data fetched!");
    callback(user); // Pass the object to the callback
  }, 1000);
}

// Callback function that uses the object
function sayHello(userObj) {
  console.log(`Hello ${userObj.name}, your age is ${userObj.age}`);
}

// Create a user object
const user = {
  name: "Namita",
  age: 23
};

greetUser(user, sayHello);
// Output:
// Fetching user info...    
// User data fetched!
// Hello Namita, your age is 23

