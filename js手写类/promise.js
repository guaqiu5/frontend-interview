async function async1(){
    console.log("async1 start");
    await async2();
    await async3();
    console.log("async1 end");
}
async function async2(){
    console.log("async2");
}
async function async3(){
    console.log("async3");
}
console.log("script start");
async1();
new Promise((resolve)=>{
    console.log(1);
    resolve();
})
.then(()=>{
    console.log(2);
})
.then(()=>{
    console.log(3);
})
.then(()=>{
    console.log(4);
})
setTimeout(()=>{
    console.log("setTimeout");
},0);
console.log("scipt end");
//输出