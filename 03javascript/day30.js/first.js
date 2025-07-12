// Promises

//callback hell
// async task 
// weather:

// const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=f204c9ff6f4b46b29bd155857252806&q=London&aqi=no`)
// weather api 
// console.log(obj); // promise {<pending>}
// as it is an asynchronous operation, so it needs time to execute 

const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=f204c9ff6f4b46b29bd155857252806&q=London&aqi=no`)
// setTimeout(() => {
//     console.log(obj); // promise {<fulfilled>: Response}
// }, 5000); // it will give all london weather data after 5 seconds

// obj.then((data)=> { // resolve
//     console.log(data); // Response {type: "cors", url: "http://api.weatherapi.com/v1/current.json?key=f204c9ff6f4b46b29bd155857252806&q=London&aqi=no", redirected: false, status: 200, ok: true, …}
// }).catch((error) => { // reject
//     console.error( error);
// })
// obj is promise object
// data is the response object
// then is a method of the promise object that takes a callback function as an argument
// the callback function is executed when the promise is fulfilled
// The fetch function returns a promise that resolves to the response of the request.
// The promise object represents the eventual completion (or failur) of an asynchronus operation and its resulting value.
// pending, resolve, reject

// how to represent properly?
// obj.then((data)=> {
//     console.log(data.json()) ;
// }) // promise {<pending>}

// how to resolve this ?
// obj.then((data)=> {
//     const obj2 = data.json();

//     obj2.then((data2)=>{
//         console.log(data2); // {location: {…}, current: {…}}
//     })
// })

// in better way
// const obj2 = obj.then((data) => {
//     return data.json();
// })
// obj2.then((data2) => {
//     console.log(data2); // {location: {…}, current: {…}}
// })

// in more better way
// obj.then((data) => {
//     return data.json();
// }).then((data2) => {
//     console.log(data2); // {location: {…}, current: {…}}
// }) // promise chaining

// in more more better way
// obj
// .then(data=>data.json())
// .then(data2=>console.log(data2))

// in even more better way
fetch(`http://api.weatherapi.com/v1/current.json?key=f204c9ff6f4b46b29bd155857252806&q=London&aqi=no`)
.then(data=>data.json())
// .then(data2=>console.log(data2))
// if u want to print temperature
.then(data2=>console.log(data2.current.temp_c)) 
//now we can use catch to handle errors
.catch(error => console.error(error)) ;



