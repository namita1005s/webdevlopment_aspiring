// // create element through JS
// <!-- How to create your own library -->
// <!-- What is CDN -->
// <!-- How to bring React and React DOM -->
// <!-- const element  = React.createElement("h1",{id:"money", class:"Rohit" , style:{fontSize:"20px",backgroundColor:"blue",color:"red"}},"Hello Coder Army");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element); -->

// create element through JS
// const header1 = document.createElement('h1');
// header1.innerText = 'Hello World';
// header1.style.backgroundColor = 'red';
// header1.style.color = 'white';
// header1.style.fontSize = '30px';

// const header2 = document.createElement('h2');
// header2.innerText = 'or sab bakwas'; 
// header2.style.backgroundColor = 'blue';
// header2.style.color = 'white';
// header2.style.fontSize = '30px';


// const root = document.getElementById('root');
// root.appendChild(header1);
// root.appendChild(header2);

//hum dekh sakte h hume kitna jada liekhna pad rha h
// chalo function bana lete h
const React = {
    createElement: function(tag,styles,children){
          const element = document.createElement(tag);

          if(typeof children === 'object'){
            for(let val of children)
                element.append(val);

          }
          else 
          element.innerText = children;
          for(let key in styles){
              element.style[key] = styles[key];
          }
          return element;
    }
}

// Rendering 
const ReactDOM = {
    render: function(element,root){
        
                root.append(element);
            }
        }
    

const header1 = React.createElement('h1',{backgroundColor:'red',color:'white',fontSize:'30px'},'Hello World');
const header2 = React.createElement('h2',{backgroundColor:'blue',color:'white',fontSize:'30px'},'or sab bakwas');

// const root = document.getElementById('root');
// root.appendChild(header1);
// root.appendChild(header2);

// ReactDOM.render(header1,document.getElementById('root'));
// ReactDOM.render(header2,document.getElementById('root'));

// what if we want to create unorderd list?
const li1 = React.createElement('li',{},'Item 1');
const li2 = React.createElement('li',{},'Item 2');
const li3 = React.createElement('li',{},'Item 3');

const list = React.createElement('ul',{backgroundColor:'blue',color:'white',fontSize:'30px'},[li1, li2, li3] );
   

ReactDOM.render(header1,document.getElementById('root'));
ReactDOM.render(header2,document.getElementById('root')); 
ReactDOM.render(list,document.getElementById('root'));   
