const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

//event bubbling and capturing
child.addEventListener('click', () => {
    console.log('child Clicked');
},false)
// addEventListener(first_event, Callback, capture);
parent.addEventListener('click', () => {
    console.log('parent Clicked');
},false)
grandparent.addEventListener('click', () => {
    console.log('grandparent Clicked');
},false)

// now if we click on child then child clicked , parent clicked and grandparent clicked will be printed

child.addEventListener('click', () => {
    console.log('child Clicked');
},true)
// addEventListener(first_event, Callback, capture);
parent.addEventListener('click', () => {
    console.log('parent Clicked');
},true)
grandparent.addEventListener('click', () => {
    console.log('grandparent Clicked');
},true)
// now if we click on child then grandparent clicked , parent clicked and child clicked will be printed

child.addEventListener('click', () => {
    console.log('child Clicked');
},true)
// addEventListener(first_event, Callback, capture);
parent.addEventListener('click', () => {
    console.log('parent Clicked');
},false)
grandparent.addEventListener('click', () => {
    console.log('grandparent Clicked');
},true)
// now if we click on child then grandparent clicked ,child clicked and parent clicked will be printed

child.addEventListener('click', (event) => {
    // console.log('child Clicked');
    console.log(event.target);
},false)
// addEventListener(first_event, Callback, capture);
parent.addEventListener('click', (event) => {
    // console.log('parent Clicked');
    console.log(event.target);
},false)
grandparent.addEventListener('click', (event) => {
    // console.log('grandparent Clicked');
    console.log(event.target)
},false)
//only child will be printed because of event.target

child.addEventListener('click', (event) => {
    // console.log('child Clicked');
    console.log(event.currentTarget);
},false)
// addEventListener(first_event, Callback, capture);
parent.addEventListener('click', (event) => {
    // console.log('parent Clicked');
    console.log(event.currentTarget);
},false)
grandparent.addEventListener('click', (event) => {
    // console.log('grandparent Clicked');
    console.log(event.currentTarget)
},false)
// child then parent will be printed because of event.currentTarget