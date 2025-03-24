"use strict";
class Person {
    constructor(n1, n2) {
        this.name = n1;
        this.age = n2;
    }
}
const obj1 = new Person('zhangsan', 18);
const obj2 = new Person('lisi', 20);
console.log(obj1);
console.log(obj2);
// public ,private, protected
// public - accessible outside the class
class customer {
    constructor(n1, n2, n3) {
        this.name = n1;
        this.age = n2;
        this.balance = n3;
    }
}
const p1 = new customer('zhangsan', 18, 1000);
console.log(p1); //customer { name: 'zhangsan', age: 18, balance: 1000 }
console.log(p1.name); //zhangsan
console.log(p1.age); //18
console.log(p1.balance); //1000
// private - not accessible outside the class and also not accessible in the subclass
class customer5 {
    constructor(n1, n2, n3) {
        this.name = n1;
        this.age = n2;
        this.balance = n3;
    }
    meeting() {
        console.log(this.name);
    }
}
// console.log(p1.name); //error
// protected - accessible within the class and its subclasses
class customer6 {
    constructor(n1, n2, n3) {
        this.naame = n1;
        this.age = n2;
        this.balance = n3;
    }
    meeting() {
        this.age = this.age + 5;
        return this.age;
    }
}
const p6 = new customer6('suraj', 20, 2000);
console.log(p6.naame); //suraj
console.log(p6.meeting()); //25
// ek example aur dekhte hain
class Employee extends customer6 {
    constructor(salary, name, age, balance) {
        super('suraj', 20, 2000); //super keyword is used to call the constructor of the parent class
        this.salary = salary;
    }
    greets() {
        console.log(this.balance);
    }
}
const emp1 = new Employee(50000, 'suraj', 20, 2000);
console.log(emp1); //Employee { naame: 'suraj', age: 20, balance: 2000, salary: 50000 }
console.log(emp1.greets()); //2000
// console.log(emp1.balance); //error
console.log(emp1.naame); //suraj it is public
// console.log(emp1.age); // error because age is private
