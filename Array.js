// let Data=[
//   {Name:"Mahesh"},
//   {Name1:"Mahesh"},

//   {Name2:"Mahesh"},
//   {Name3:"Mahesh"},

// ]

// for (Key in Data)
// {
//   console.log("Key :",Key ,"User Key: ",Data[Key]);
// }

// for (Val of Data)
// {
//   console.log("Val :",Val ,"User Key: ",Data[Val]);
// }


// let user = { name: "Mahesh", age: 22 };
// for (let key in user) console.log(key, user[key]);



// let B=[1,2,3,4,5,6,7];
// // [1,2,3,4,5,6,7].forEach((Data)=>{

// // B.forEach((Data)=>{
// //   let Ans=Data%2===0
// //   console.log(Ans);
// // })

// B.forEach((Data,index)=>{
//   if( Data%2===0)
//   console.log(index, Data);
// });
// B.map((Data,index)=>{
// if(Data %2 === 0)
//   console.log(index, Data)
// })

// const Sq=B.forEach((Data)=>Data*Data);
// const Sq1=B.map((Data)=>Data*Data)
// console.log( Sq);
// console.log( Sq1);
// // let A=[1,2,3,4];
// // A.forEach((Data,index)=>console.log(index, Data));

// // ;[1,23,4].forEach((Data,index)=>console.log(index, Data));
// // ([1,23,4]).forEach((Data,index)=>console.log(index, Data));



// // Array Destructuring 
// // let [x,y]=B;


// // let's try to find the min with reduce
// let C=[10,50,40,100,5,26,20, 4,30,200,2,33];
// const Ans=C.reduce((Res,Val)=>Val>Res?Res:Val,C[0]);
// console.log("Ans", Ans);





// Let's check the for of and for in 
// let Data={
//   Name:"Mahesh",
//   Age:22,
//   Learning:"JS",
// }

// for(let D1 in Data)
// {
//   console.log(D1)
// }

// let IData=[1,2,3,4,5,6,"fd",()=>{}]
// for(let D1 of IData)
// {
//   console.log(D1)
// }


// // Checking if it Array or not 
// const A=[1,2,3,4,5,()=>{},"yuwjl"];
// console.log(Array.isArray(A));












// Array Pratical 