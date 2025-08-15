
// npm init
// npm install react-dom
// npm install react

// npm install -D parcel

import React from "react";
import ReactDOM from "react-dom/client";

// const element1 = <h1>Welcome to Myntra</h1>

// in jsx - we can write any valid javascript expression (which gives output) inside curly braces like (string , number , array it will give output)
// but statements  (let x = 2) we cannot write inside curly braces
// objects bhi nahi daal sakte
// if - else , loops, functions, etc. cannot be written inside curly braces

// let obj = {
//     name: "Namita ji",
//     age: 25
// }

// const arr = [1, 2, "Shivam", 4, 5]; // but in it should not be an object, it should be an array or string
// function greet(name){
//     return <h2>Welcome to  {arr} Myntra2, {obj.name}</h2> // this is acceptable
// }

// const Root = ReactDOM.createRoot(document.getElementById("root"));
// Root.render(greet(obj));


// to run  RUN THE COMMAND npx parcel index.html

// Question is we can write this function anyother way?
// function App() {
//     return <h2> Ram Ram bhaiya ji </h2>
// };
// // first letter of function should be capitalized, otherwise it will not work { JSX RULE} to create a user defined component
// const element3 = <App  />;

// const Root = ReactDOM.createRoot(document.getElementById("root"));
// Root.render(element3);

// how to paas arguments to a component?

// props = {
//     name:"Shivam"  
//     age:"23"

// }
function Spps(props) {
    return <h2> Ram Ram bhaiya ji {props.name} {props.age}</h2>
};
// first letter of function should be capitalized, otherwise it will not work { JSX RULE} to create a user defined component
const element3 = <Spps name="Shivam"  age="23"/>;
const element4 = <h1 id="heading" className="headings">Welcome to Myntra</h1>;

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(element3);
// props are the object which is passed to the component

