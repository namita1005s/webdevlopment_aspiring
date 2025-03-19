// how to create a element in javascript
//<li>Type Script</li>
//created a element

// function attach(content){
//     const element = document.createElement('li');
//     // element.innerHTML = 'Type Script';
//     element.innerHTML = content;
//     const element2 = document.createElement('li');
//     element2.innerHTML = content+"V2.0";
//     // parent ka access lenge 
//     const parent  = document.getElementById('root');
//     // parent.appendChild(element); // last me add karega
//     // parent.append(element,"hello bhaiyo or bheno"); // multiple element add karega
//     parent.append(element,element2); // multiple element add karega
    
//     };
//     attach("Type Script"); 
//     attach("Java Script"); 
//     attach("React");
//     attach("Node");

//2: Create a Text Node
// or agar text node add karna ho to (text node vo hota h jisme koi bhi tag attach nhi hota)

// const element = document.createTextNode('hello bhaiyo or bheno');
// const parent = document.getElementById('root');
// parent.appendChild(element); 


// 3: Create a Attribute Node

// 1️⃣ Create an Attribute Node (id="first")
const element = document.createAttribute('id');
element.value = 'first';

// 2️⃣ Select the first <li> element
const curr_list = document.querySelector('li'); 
curr_list.setAttributeNode(element); // Assign the attribute

// 3️⃣ Select the second <li> element and assign a different id
const parent = document.getElementById('root'); 
// secondElement.setAttributeNode(element);
const secondElement = parent.children[1]; 

// 4️⃣ Create a NEW attribute for the second element (avoid duplicate IDs)
const secondAttr = document.createAttribute('id');
secondAttr.value = 'second'; 
secondElement.setAttributeNode(secondAttr); // Assign a unique id

// <!-- Accessing Attributes -->
// 1: getAttribute
// 2: setAttribute
// 3: removeAttribute

const element1 = document.getElementById('root')
// console.log(element1.getAttribute('id')); // root
element1.setAttribute('custom','value'); // create a new attribute
element1.setAttribute('id','root2'); // update the id
console.log(element1.getAttribute('id')); // root2
element1.removeAttribute('custom'); // remove the attribute
console.log(element1.getAttribute('custom')); // null

element1.setAttribute('id','root'); // update the id
console.log(element1.getAttribute('id')); // root

// <!-- Add Nodes to the DOM -->

// 1: appendChild(node)
//    Adds a node as the last child of a parent.
// 2: append(node1,node2,...)
//    Adds Multiple Node as the last child of a parent.
// 3: insertBefore(newNode, referenceNode)
// 4: prepend
// 5: replaceChild()
// 6: Using innerHTML
//    Directly sets the HTML content of an element.
// 7: Using insertAdjacentHTML() or insertAdjacentElement():
   
// beforebegin: Before the element itself.
// afterbegin: Inside the element, before its first child.
// beforeend: Inside the element, after its last child.
// afterend: After the element itself.

// 8: removeChild(node) Homework
// 9: The .remove() method in JavaScript is used to remove an element from the 
//    DOM (Document Object Model).


const parent2 = document.getElementById('root'); 
// const element2 = document.createElement("div");
// element2.innerHTML = 'Apna Time Aayega';
// parent2.insertAdjacentElement('afterend',element2);
// parent2.insertAdjacentHTML('beforeend',element2.innerHTML);
// parent2.insertAdjacentElement('afterbegin',element2);
//parent2.insertAdjacentElement('beforebegin',element2);
// parent2.innerHTML += "TS"; // add the data
// parent2.innerHTML += "<li>Type Script</li>"; // add the element
// const element2 = document.createElement('li'); // data
// element2.innerHTML = 'Type Script'; // data
// const child2 = parent2.children[2]; // array
// parent.replaceChild(element2,child2); // array
// const child2 = parent2.children[1]; // array
// parent2.insertBefore(element2,child2); // array
// parent2.prepend(element2);
// parent2.append(element2);



// delete node or element
document.querySelector('li').remove(); // remove the first element
element2.remove(); // remove the second element
















