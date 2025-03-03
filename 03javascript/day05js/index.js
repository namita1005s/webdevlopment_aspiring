let a = 10;
let b = a;
b = 20;
console.log(b); // 20
console.log(a); // 10
// Primitive data vs non-primitive data (reference data)
// Primitive data: Number, String, Boolean, Null, Undefined, Symbol IMMUTABLE (not changeable)
// they stored in stack memory because they are immutable call by value
// Non-primitive data: Object, Array, Function MUTABLE (changeable)
// they stored in heap memory because they are mutable call by reference

// OBJECT EXAMPLE
let obj1 = { 
    id:20,
    naming: 'John',

}
let obj2 = obj1;
console.log(obj2); // { id: 20, naming: 'John' }
console.log(obj1); // { id: 20, naming: 'John' }
obj2.id = 30;

console.log(obj2); // { id: 30, naming: 'John' }
console.log(obj1); // { id: 30, naming: 'John' }

// Thus we can see that the object is mutable and the value of obj1 is changed when we change the value of obj2 and mutable
// and in first example the value of a is not changed when we change the value of b because a is primitive data type amd immutable

// Our memory is divided into two parts 1)stack 2)heap
// Stack: Stack memory is used to store primitive data types and it is immutable
// Heap: Heap memory is used to store non-primitive data types and it is mutable
//  BUT WHY?
// Because in stack memory the data is stored in a fixed memory location and it is immutable
// and in heap memory the data is stored in a dynamic memory location and it is mutable
