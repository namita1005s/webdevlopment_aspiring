// map
//In JavScript, a Map is a collection of key-value pairs where both the keys and values can be dat type (primitive or object ).Unlike regular JavScript objects, Maps maintain the order of the elements based on insertion and allows key of any type (even objects, functions , and any primitive types)whereas objects only allow strings or symbols as keys.
//1. set(key,value)
//2. get(key)
//3. has(key)
//4. delete(key)
//5. size
//6. clear
//7. for(let[key,value] of map) {console.log(key,value);}
//8. map.forEach((value,key)=>{console.log(key,value);})

// keys value pair : key should be unique
const map1 = new Map();
map1.set(3,90);
map1.set("Rohit",45);
map1.set(20,"Mohan");
// map1.set("Rohit",40); //dublicate m update ho jayega
console.log(map1); //Map { 3 => 90, 'Rohit' => 45, 20 => 'Mohan' }
//delete
map1.delete("Rohit");
console.log(map1); //Map { 3 => 90, 20 => 'Mohan' }
//has
console.log(map1.has(3)); //true
//size
console.log(map1.size); //2
// visit console  type map.prototype to see all the methods
//clear
map1.clear();
console.log(map1); //Map {}
// dusra tarika map bnane ka
const map2 = new Map([
    [10,"Namita"],
    [20,"Rohit"],
    [30,"Mohan"],
    ["Shivam","Namita"],
    [30,9]

])
console.log(map2); //Map { 10 => 'Namita', 20 => 'Rohit', 30 => 9, 'Shivam' => 'Namita' }
// 2d array 1D array m key value pair h
// for of loop for iteration
for(let value of map2){
    console.log(value);
}//[ 10, 'Namita' ] [ 20, 'Rohit' ] [ 30, 9 ] [ 'Shivam', 'Namita' ]
// or agar key value alag alag chahiye to
for(let [key,value] of map2){
    console.log(key,value);
}//10 Namita 20 Rohit 30 9 Shivam Namita

// difference between map and object
//1. In an object, the keys are strings or symbols, but in a Map, they can be of any type.

//for each
map2.forEach((value,key)=>{
    console.log(key,value);
})//10 Namita 20 Rohit 30 9 Shivam Namita
