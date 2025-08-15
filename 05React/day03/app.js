// import React from "react";
// import ReactDOM from "react-dom/client";
// // npx parcel index.html
// // remove main if error
// const element = React.createElement("h1", {}, "Hello World");
// const element2 = React.createElement("h1", {}, "Hello World2");

// const div = React.createElement("div", {}, [element, element2]); // array of children
// const Reactroot= ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(div);

// delete dist folder 
// npx parcel build index.html
// in new dist folder there will be index.html and a js file and a map file
// this will create a dist folder with an index.html file and a js file
// it is a production build optimized for performance
// it is bundle of all the files and dependencies
// also delete the mapping file .map.js because it can generate orignal code from the bundle
// DEPLOY your website dist folder to a server (netlify, vercel, etc.)


// JSX: Javascript XML: HTML CODE DIRECT JS k andar sakte ho 
// import React from "react";
// import ReactDOM from "react-dom/client";

// const newElement = <h1>Hello World</h1>; // JSX syntax, transpiled to React.createElement
// // babel will convert this JSX to React.createElement() => react element(JSObject) => html element

// const Reactroot= ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(newElement);

// what are its advantages?
// if we want to give  multiple child 
// import React from "react";
// import ReactDOM from "react-dom/client";
// we can use JSX: JS k expressions
// const names = "Namita";
// const obj = {
//     age: 25,
//     salary: 1000
// }
// const obj2 = {
//   backgroundColor:"black",
//   color:"white",
//   fontSize:"20px",
//   padding:"10px",
//   borderRadius:"5px"
// }
// // react element is a JS object
// const newElement = ( //without bracet it will also work but it will not be readable so we should use bracet
//   // we have to create a empty div and then put all the elements inside it
//   <div> 
//     <h1 id="first" className="second">Hello World  {names}</h1>
//     <h2 money="23" sunny={23} style={obj2} >Hello World2 {obj.age} {obj.salary}</h2>
//     <h3 style={{backgroundColor:"blue", color:"white", fontSize:"18px", padding:"8px", borderRadius:"4px"}}> Hello World3 </h3>
//   </div>
  // {} is used to write JS expressions inside JSX 
  // thus we use double curly braces {{}} to write JS expressions inside JSX
  // another way
//   <>
//     <h1>Hello World</h1>
//     <h2>Hello World2</h2>
//   </>
// ); 

// const Reactroot= ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(newElement);
// difference between HTML and JSX 
// 1. className instead of class
// 2. WE CAN USE JS EXPRESSIONS INSIDE JSX
// 3. style is an object in JSX thus we 
 

//React component
// 2 types of components
// 1. Functional component
// 2. Class component ( it is old way )

import React from "react";
import ReactDOM from "react-dom/client";

function greet() {
  return <h1>Hello World from function</h1>;
};

const meet = () => {
  return <h1>Hello World from arrow function</h1>;
}

const newElement2 = greet();
const newElement3 = meet();

const newElement = <>{newElement2} {newElement3}</>
// for multiple elements

const Reactroot2 = ReactDOM.createRoot(document.getElementById('root'));
Reactroot2.render(newElement); 

