// const red = document.getElementById('red');
// const green = document.getElementById('green');
// const blue = document.getElementById('blue');
// const purple = document.getElementById('purple');
// const yellow = document.getElementById('yellow');

// // const body = document.querySelector('body'); OR
// const body = document.body;

// red.addEventListener('click', () => {
//   body.style.backgroundColor = 'red';
// })
// green.addEventListener('click', () => {
//     body.style.backgroundColor = 'green';
// })
// blue.addEventListener('click', () => {
//     body.style.backgroundColor = 'blue';
// })
// purple.addEventListener('click', () => {
//     body.style.backgroundColor = 'purple';
// })
// yellow.addEventListener('click', () => {
//     body.style.backgroundColor = 'yellow';
// })

// isko thoda aur short kar sakte hain (optimized code)
const buttons = document.querySelectorAll('button');
// console.log(buttons); sara buttons mil jayenge
const body = document.body;
buttons.forEach((button) => {
  button.addEventListener('click', () => {
   body.style.backgroundColor = button.id;
  })
})

//isko or optimize karenge q ki jada event listener matlab system slow ho jayga
//event bubbling  //child pe click karte h to parent bhi trigger hota h par pahle child phir parent fir grand parent
// event capturing  //child pe click karenge to parent pahle trgger hoga or pahle grand parent fir parent fir child

 




                    





   