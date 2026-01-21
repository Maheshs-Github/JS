// console.log("Heloo There");
// new Promise((resolve,reject)=>{

//       setTimeout(()=>{
//     const success=true;
//     if(success) resolve("Done finally");
//     else reject("Some Error, well there will not for now ");
//   },1000)
// })
// .then(Ans=>(Ans))
// .then(Ans=>console.log(Ans+"10"))
// .catch(err=>console.log(err))


// console.log("Hello There again ");



// new Promise((resolve)=> resolve(10))
// .then((res)=>res+10)
// .then((res)=>res+10)
// .then((res)=>res+10)
// .then((res)=>console.log("Res: ",res))
// .catch((err)=>console.log("Some Error"))


// // Data Fetching 
// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(res=>res.json())
// .then(res=>console.log("res: ",res))
// .catch("Some Error")



// setTimeout(()=>console.log("timeer Done"),1000)



// Let's see the promise based task to handle the call back hell 
function f1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("F1 has been Resolved"),1000)
  })
}
function f2(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("F2 has been Resolved"),1000)
  })
}
function f3(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("F3 has been Resolved"),1000)
  })
}

f1()
.then(ans=>{console.log("Ans: ",ans);
  return f2();
})
.then(ans=>{console.log("Ans 2: ",ans);
  return f3();
})
.then(ans=>{console.log("Ans 3: ",ans)
})

// with aync and await 
async function fun() {
  const fa1=await f1()
  console.log("fa1: ",fa1)
  const fa2=await f2()
  console.log("fa2: ",fa2)
  const fa3=await f3()
  console.log("fa3: ",fa3)
}
fun();