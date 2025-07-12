const element = React.createElement("h1",{},"Hello World");
// ReactDOM.render(element,document.getElementById("root"));

// warning:  ReactDOM. render is no longer supported in React 18 and above.
// Instead, use ReactDOM.createRoot(document.getElementById('root')).render(element);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

// in react 17 jab tak page load hota tha tab tak humara element render hota tha matlab hum ek bar download k bina dusre page par nahi ja sakte the
// user ko wait karna padta tha
// createRoot container - ye root element ko control karta hai (react root element k paas ab ek control hai ki wo kab render hoga)
// 50 process roko or jo button click hoga uska process karo 

//what is CDN ?
// CONTENT DELIVERY NETWORK
// mirror small server paas request to main server and store the data that is frequently requested
// dynamic content - data that changes frequently USKO MAIN SERVER SE LETE H
// static content - data that does not change frequently USKO CDN SE LETE H
// CDN is a network of servers that are distributed across the globe to deliver content to users based on their geographic location.
const heading = React.createElement("h1", { style: { color: "red" } }, "This is a heading");

const li1 = React.createElement("li", {}, "Item 1");
const li2 = React.createElement("li", {}, "Item 2");
const li3 = React.createElement("li", {}, "Item 3");

const list = React.createElement("ul", { className: "my-list" }, [li1, li2, li3]);

const wrapper = React.createElement("div", {
  className: "container",
  style: {
    padding: "20px",
    backgroundColor: "#f0f0f0"
  }
}, [heading, list]);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(wrapper);

// if want to add more elements 
const headings = React.createElement("h1", {
  className: "main-heading",
  id: "hero",
  title: "Hover text example",
  style: {
    color: "white",
    backgroundColor: "teal",
    padding: "10px",
    borderRadius: "8px"
  }
}, "Hello, Coder Army!");

const image = React.createElement("img", {
  src: "https://via.placeholder.com/150",
  alt: "Placeholder image",
  style: {
    display: "block",
    margin: "20px 0",
    borderRadius: "10px"
  }
});

const link = React.createElement("a", {
  href: "https://www.google.com",
  target: "_blank",
  title: "Go to Google",
  className: "google-link",
  style: {
    textDecoration: "none",
    color: "blue",
    fontSize: "18px"
  }
}, "Visit Google");

const wrappers = React.createElement("div", {
  id: "main-wrapper",
  className: "container",
  style: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ccc"
  }
}, [headings, image, link]);

const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(wrappers); 
