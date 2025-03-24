class Person {
    name: string;
    age: number;

    constructor(n1:string,n2:number){
        this.name = n1;
        this.age = n2;
    }
}
const obj1 = new Person('zhangsan',18);
const obj2 =  new Person('lisi',20);
console.log(obj1);
console.log(obj2);

// public ,private, protected
// public - accessible outside the class
class customer{
    public name: string;
    age: number;
    balance: number;
    constructor(n1:string,n2:number,n3:number){
        this.name = n1;
        this.age = n2;
        this.balance = n3;
    }

}
const p1 = new customer('zhangsan',18,1000);
console.log(p1); //customer { name: 'zhangsan', age: 18, balance: 1000 }
console.log(p1.name); //zhangsan
console.log(p1.age); //18
console.log(p1.balance); //1000

// private - not accessible outside the class and also not accessible in the subclass
class customer5{
    private name: string;
    age: number;
    balance: number;
    constructor(n1:string,n2:number,n3:number){
        this.name = n1;
        this.age = n2;
        this.balance = n3;
    }
    meeting():void{
        console.log(this.name);
    }

}
// console.log(p1.name); //error

// protected - accessible within the class and its subclasses
class customer6{
    public naame: string;
    private age: number;
    protected balance: number;
    constructor(n1:string,n2:number,n3:number){
        this.naame = n1;
        this.age = n2;
        this.balance = n3;
    }
    meeting():number{
        this.age = this.age + 5;
       return this.age;
    }

}
const p6 = new customer6 ('suraj',20,2000);
console.log(p6.naame); //suraj
console.log(p6.meeting ());  //25

// ek example aur dekhte hain
class Employee extends customer6{
   salary: number;
   constructor(salary:number,name:string,age:number,balance:number){ 
         super('suraj',20,2000); //super keyword is used to call the constructor of the parent class
         this.salary = salary;
   }
   greets():void{
         console.log(this.balance); 
   }

}
const  emp1 = new Employee(50000,'suraj',20,2000);
console.log(emp1); //Employee { naame: 'suraj', age: 20, balance: 2000, salary: 50000 }
console.log(emp1.greets()); //2000 it is protected but we can access it in the subclass
// console.log(emp1.balance); //error because balance is protected
console.log(emp1.naame); //suraj it is public
// console.log(emp1.age); // error because age is private

//Generics
//Generics are used to create reusable components (templates) that accept multiple types.
function value(a:(number|string|number[]|boolean)):(number|string|number[]|boolean){
    // is problem ko solve karne ke liye generics ka use karte hain
    return a;
}
console.log(value(10)); //10
console.log(value("hello")); //hello
console.log(value([1,2,3])); //[ 1, 2, 3 ]
console.log(value(true)); //true

// ab generics ka use karke dekhte hain
function value1<T>(b:T):T{ //T is generic type we can use  A,B,C,D etc
    return b;
}
console.log(value(10)); //10
console.log(value("hello")); //hello 
console.log(value([1,2,3]));//[ 1, 2, 3 ]
console.log(value(true)); //true
console.log(["Mohan","Sohan","Rohan"]); //[ 'Mohan', 'Sohan', 'Rohan' ]
console.log(value1<number>(10)); //10 or chaho to is tarah se bhi likh sakte ho otherwise no need
// any bhi use kar sakte hain par fir voh error nahi dega not a good practice
