let obj ={
    name: "John",
    age: 30,
    gender: "alfamale",
    city: "New York"
    
};
// for in loop
//object k upper loop
// we can iterate over keys in an object
for(let key in obj)
{
    // console.log(obj[key]); // John 30  alfamale New York
    console.log(key, obj[key]);  // name John age 30 gender alfamale city New York
    
}

//Object.key(obj) // we can get all keys of an object
console.log(Object.keys(obj)); // [ 'name', 'age', 'gender', 'city' ]
// thus we have two ways to find keys of an object
// 1. using for in loop
// 2. using Object.keys(obj)

// lets create prototype to know difference between for in and Object.keys
let obj2 = Object.create(obj);
obj2.money = 420; // add some property to obj2
obj2.id = "Roh";
console.log(obj2.name); // only object 2 property will be access inherited property will not be access
console.log(Object.keys(obj2)); // [ 'money', 'id' ] // it will access only obj2 property not inherited property
for(let key in obj2) // it will access all property of obj2 and inherited property
{
    console.log(key); // money id  name  age  gender  city
}

