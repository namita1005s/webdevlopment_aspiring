// // create element through JS
// <!-- How to create your own library -->
// <!-- What is CDN -->
// <!-- How to bring React and React DOM -->
// <!-- const element  = React.createElement("h1",{id:"money", class:"Rohit" , style:{fontSize:"20px",backgroundColor:"blue",color:"red"}},"Hello Coder Army");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element); -->


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
          element.innerText = children;
          for(let key in styles){
              element.style[key] = styles[key];
          }
          return element;
    }
}
const header1 = React.createElement('h1',{backgroundColor:'red',color:'white',fontSize:'30px'},'Hello World');
const header2 = React.createElement('h2',{backgroundColor:'blue',color:'white',fontSize:'30px'},'or sab bakwas');
const root = document.getElementById('root');
root.appendChild(header1);
root.appendChild(header2);