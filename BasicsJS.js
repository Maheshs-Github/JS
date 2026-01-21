// let A = 10;
// A = 20;
// console.log("A: ", A);


// console.log(typeof function () {}); //function

// console.log(typeof NaN); // Number
// console.log(typeof null); //object , null is a primitive but it is give it's type as the object

// function F1() {
//   {
//     var c = 76;
//     let d = 34;
//     var e;
//     let f;
//   }
//   // console.log("D: ",d) // Reference Error
//   console.log("e: ", e); //undefined
//   console.log("C: ", c); //76
//   // console.log("f: ",f); //RefernceError

//   // Let's see about the hoisting
//   // var a;
//   // console.log("a: ",a); //undefined
//   // a=10;
//   // console.log("a: ",a); //10

//   let a;
//   console.log("a: ", a); //undefined
//   a = 10;
//   console.log("a: ", a); //10
// }
// F1();


// Let's see how one can fetch the data from backend
// const getData=async()=>
// {
//   const Res= await fetch("https://jsonplaceholder.typicode.com/posts")
//   const Data= await Res.json();
//   console.log("Data: ",Data);
// }
// getData();

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((Data)=>Data.json())
// .then((FData)=>console.log("F Data: ", FData))
// .catch((err)=>console.log("There is been some error"));


// let Data=[1,2,3,4,5];
// for(let D1 of Data)
// {
//   if(D1 ===3)
//     console.log("Val Found ");
// }
// Data.forEach((D1,index)=>
// {
//   if(D1===3)
//   {
//     console.log("Value is found at: ",index)
//   }
// })


// F1=()=>
// {
//   setTimeout(()=>console.log("Hello There, This Content will be displayed after 2s "),2000);
// }
// let F1;



// let's check about the JS behaviour about being the interpreted
// try
// {
// const Mahesh=10;
// Mahesh=20;
// }
// catch(err)
// {
//   console.log("there is ben error");
// }

// // console.log("Mahesh: ",Mahesh);

// console.log("Hello");

// prompt.hello("ljqehf",wjeioye),Hello, Kj  iqe

// console.log("Start5");
// setTimeout(()=>console.log("Time Domne"),2000);
// console.log("Ends JHere ");



// Let's see about the closure 
function No(a){
  return function Sum(b){
    return a+b;
  }
}
const f1=No(10);
console.log("Ans: ",f1(20));


// Let's see the counter example 
function counter(){
let Count=0;
  return function C1(){
    // Count++;
    // return Count;
    // return Count++;
    return ++Count;
  }
}
const Cont=counter();
console.log("Count: ",Cont())
console.log("Count: ",Cont())
console.log("Count: ",Cont())
console.log("Count: ",Cont())

function C1(){
  let cout=0;
  return{
    inc:()=>{ return ++cout},
    get:()=> cout,
  }
}

const C2=C1();
console.log(C2.inc())
console.log(C2.get())
console.log(C2.inc())
console.log(C2.get())
console.log(C2.inc())
console.log(C2.get())


function outer(){
  const A=10;
  function Inner(){
    console.log("Clousre Fun is called with the Value from Outter fun: ",A);
  }
  Inner();
}
outer();