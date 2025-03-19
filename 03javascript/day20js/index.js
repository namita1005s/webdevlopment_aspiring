// c: Accessing by CSS Selectors:
//    i: Single Element:
//       Method: document.querySelector(selector)
//       Description: Returns the first element matching the specified CSS 
//       selector.
// (ye kisi ko bhi select kar sakta h jase id, class, tag, attribute, etc)
// symbol use for id: # , for class: . , for tag: tag name, for attribute: [attribute name]
const id = document.querySelector('#first');
id.innerHTML = 'Hello World';
id.style.color = 'red';

const id2 = document.querySelector('.header');
id2.innerHTML = 'Hello World';
id2.style.backgroundColor = 'pink';

    
//     ii: Multiple Elements:
//         Method: document.querySelectorAll(selector)
//         Description: Returns a static NodeList of all elements matching the 
//         specified CSS selector.

// how to iterate over multiple elements
const id3 = document.querySelectorAll('.header');
// forEach loop
id3.forEach((element) => {
    element.style.backgroundColor = 'pink';
});
// for loop bhi use kar sakte h
for (let i = 0; i < id3.length; i++) {
    id3[i].style.backgroundColor = 'blue';
}
// for of loop bhi use kar sakte h
for (const element of id3) {
    element.style.backgroundColor = 'green';
}

// d: Accessing by Tag Name
//    Method: document.getElementsByTagName(tagName)
//    Description: Returns a live HTMLCollection of all elements with the 
//    specified tag name (e.g., div, p, a).

const obj = document.getElementsByTagName('h1');
let team = document.getElementsByTagName('li');
team = Array.from(team);
// how to iterate over it
// for loop
for (let i = 0; i < team.length; i++) {
    team[i].style.color = 'red';
}
// for of
for (const element of team) {
    element.style.color = 'blue';
}
// forEach
team.forEach((element) => {
    element.style.color = 'white';
});



// conveerting nodelist to array
// Array.from(obj)

// e: Accessing Using Relationships
//    i: Parent Node:
//    Method: element.parentNode or element.parentElement
//    Description: Access the immediate parent of an element.

const list = document.querySelector('li');
console.log(list.parentElement);  // parent node i.e ul
console.log(list.parentNode); 

//    ii: Child Nodes:
//    Method: element.childNodes (includes text nodes) or element.children 
//    (only element nodes)
//    Description: Access all child nodes of an element.
const par = document.querySelector('ul');
console.log(par);
console.log(par.childNodes); // text nodes bhi show honge
console.log(par.children); // only element nodes show honge
console.log(par.children[0]); 
console.log(par.firstChild); 
console.log(par.firstElementChild); //li


//    iii: First and Last Child:
//    Methods: element.firstChild, element.lastChild, 
//    element.firstElementChild, element.lastElementChild

//    iV: Sibling Nodes:
//    Methods: element.nextSibling, element.previousSibling
//    Element Siblings: element.nextElementSibling, 
//    element.previousElementSibling

// 1.innerHTML 
// 2.textContent
// 3.innerText 
