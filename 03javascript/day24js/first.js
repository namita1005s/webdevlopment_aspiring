// const form = document.querySelector('form');
// form.addEventListener('click', (event)=>{
//     console.log(event.target.value);   // Prints the value of the clicked element
//     console.log(event.target.id);     // Prints the id of the clicked element
//     console.log(event.target);   // Prints the entire element
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

// FOCUS DOSENT BUBBLE, SO IT WILL NOT WORK ON FORM
// const form3 = document.querySelector('form');
// form.addEventListener('focusin', (event)=>{ 
//     // jab kisi par focus karenge tabhi console m answer print ho jayega
//     console.log(event.target.value); 
// })

// BLUR is also same  Does not bubble , sirf child elements par hi kaam karega Bubble ho k parent tak nahi pahuchta h
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

// const form = document.querySelector('form');
// // document.querySelector('form') → Selects the first <form> element in the document.
// form.addEventListener('submit',(event)=>{
//     event.preventDefault(); // Prevents page reload AGAR YE NAHI THO PAGE RELOAD HO JAYEGA OR OUTPUT NAHI DIKHEGA
//     const first = document.getElementById("first");
//     console.log(first.value);
//     const second = document.getElementById("second");
//     console.log(second.value);
//     const third = document.getElementById("third");
//     console.log(third.value);
//     const result = document.getElementById("result");
//     result.innerText = `${first.value} ${second.value} is a good Boy`;
//     // result.innerText → Updates the text inside the result element.
//     document.body.append(result);

// })

//or  MORE 
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents form from refreshing the page

    const data = new FormData(form); // Creates a FormData object from the form it is API
    
    for (let [key, value] of data.entries()) { 
        console.log(key, value);
    }
    // .entries() returns an iterator for all key-value pairs in the form.
// ya ye use karo for loop ki jagha
    // console.log("Keys:", Array.from(data.keys()));
    // console.log("Values:", Array.from(data.values()));
});
 