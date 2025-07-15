const element = React.createElement("h1", {}, "Hello World");
const element2 = React.createElement("h1", {}, "Hello World2");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
root.render(element2);
// OUTPUT 
// Hello World2
// The second render replaces the first one, so only "Hello World2" is displayed.
// Because Render kahta h pichla sab choro jo abhi aya hai wahi dikhao(purana data saaf naya data dikhao)

// ab dekh rahe h ek baaar m ek hi element render ho raha hai to ab div ke andar render karte h 
// <div>
// <h1>Hello World</h1>
// <h1>Hello World2</h1>
// </div> 

const element3 = React.createElement("h1", {}, "Hello World");
const element4 = React.createElement("h1", {}, "Hello World2");
const div1 = React.createElement("div", {},[element3, element4]); // array of children
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(div1);

// how complex is this?
// what if i tell you u can write code like html in js 
// JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code within JavaScript, making it easier to create React elements. JSX is then transformed into JavaScript function calls by tools like Babel before being rendered by React.
// babbel is a JavaScript compiler that transforms modern JavaScript code (including JSX) into a version that can run in older browsers or environments. It allows developers to use the latest JavaScript features without worrying about compatibility issues.


//today we will learn Bundler
// Bundler is a tool that takes your JavaScript code and its dependencies, and bundles them into a single file (or a few files) for deployment. This helps optimize the loading of your application in the browser by reducing the number of HTTP requests and improving performance.
// webpack, vite, parcel these are some popular bundlers used in modern web development. They help manage dependencies, optimize code, and create production-ready builds of your application.
// bundler sab optimization k liye hota hai
// bundler kaam karke ek file bana deta hai jisme sab kuch hota hai

// we will use parcel 
// npm init
// give package name in small letters like- reactbasic and whatever you want decription, github repo etc
// npm install parcel
// npm install react 
// npm install react-dom
// npm = node package manager . It is a command-line tool that allows you to install and manage packages (libraries, frameworks, etc.) for your JavaScript projects. It is included with Node.js installations and is widely used in the JavaScript ecosystem.
// sari files ek dusre se dependent hoti h
