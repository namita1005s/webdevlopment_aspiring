// const form = document.querySelector('form');
// form.addEventListener('click', (event)=>{
//     console.log(event.target.value);   //value print hoga
//     console.log(event.target.id);     //id print hoga
//     console.log(event.target); //poora element print hoga
// })
// const form2 = document.querySelector('form');
// form.addEventListener('change', (event)=>{ 
//     // input karte hi jase hi cursor bahar jayega tabhi console m answer print ho jayega
//     console.log(event.target.value); 
// })
// const form3 = document.querySelector('form');
// form.addEventListener('input', (event)=>{ 
//     // input hote hi console m answer print ho jayega
//     console.log(event.target.value); 
// })
// const form3 = document.querySelector('form');
// form.addEventListener('focusin', (event)=>{ 
//     // jab kisi par focus karenge tabhi console m answer print ho jayega
//     console.log(event.target.value); 
// })
// const form3 = document.querySelector('form');
// form.addEventListener('focusout', (event)=>{ 
// // jab kisi element s nikal k kisi aur element p jayenge tabhi console m answer print ho jayega
//     console.log(event.target.value); 
// })
// form.addEventListener('dblclick', (event)=>{
//     // double click karne par console m answer print ho jayega
//     console.log("double click")
// })
// form.addEventListener('reset', (event)=>{
//     // console.log(event.target.value);
//     console.log("form Reset");
// })
const form = document.querySelector('form');
form.addEventListener('submit',(event)=>{

    event.preventDefault();
   
    const first = document.getElementById("first");
    console.log(first.value);

    const second = document.getElementById("second");
    console.log(second.value);

    const third = document.getElementById("third");
    console.log(third.value);

    const result = document.getElementById("result");
    result.innerText = `${first.value} ${second.value} is a good Boy`;
    document.body.append(result);

})
//or 
// const form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevents form from refreshing the page

//     const data = new FormData(form);
    
//     for (let [key, value] of data.entries()) {
//         console.log(key, value);
//     }

//     console.log("Keys:", Array.from(data.keys()));
//     console.log("Values:", Array.from(data.values()));
// });
// 49:14
