function test1(){

    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("First Promise resolved");
        },8000)
    })

    return p1;

}
// p1.then((response)=>console.log(response))

// async function test1Async() {
//     const data = await p1;
//     console.log(data);
// }
// test1Async();

// p1.then((response)=>console.log(response))
// async function test1Async() {
//     const data1 = await p1;
//     console.log(data1);

//     const data2 = await p1;
//     console.log(data2);
// }
// test1Async();
//output 
//First Promise resolved
// First Promise resolved 
// beacause Promise resolved


 

function test2(){
    
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Second Promise resolved");
        },5000)
    })

    return p2;

}





async function greet() {
    
    
    console.log("Hello I greet You"); 

    const [data1,data2] = await Promise.all([test1(),test2()]);
    console.log(data1);
    console.log(data2);
}

greet();
// console.log("Hello Coder Army");
// console.log("Kaise ho aap sab log");


        
