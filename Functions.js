// const A=function(){
// for(var i=0;i<=5;i++)
//   console.log("i: ",i);
// console.log("Outside i: ",i)
// for(let i=0;i<=5;i++)
//   console.log("i: ",i);
// console.log("Outside i: ",i)
// }
// A()
// Ans
// i:  0
// i:  1
// i:  2
// i:  3
// i:  4
// i:  5
// Outside i:  6

// Next One 
// i:  0
// i:  1
// i:  2
// i:  3
// i:  4
// i:  5
// D:\Learning\JS\Functions.js:7
// console.log("Outside i: ",i)
//                           ^

// ReferenceError: i is not defined


// Let's see about the Lexiocal scope by that Inner fun can access the values of the Outter variable 
function Outter(){
  let count=0;
  function Inner(){
    return count+1;
  }
  console.log(Inner());
}
console.log("Outter: ",Outter())
console.log("Outter: ",Outter())
console.log("Outter: ",Outter())

