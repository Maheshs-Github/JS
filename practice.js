// Aerray questions 

// Let's see how to get the Reverse of the Array

const A=[1,2,3,4,5];
console.log("rev array: ",A.reverse());


// 2nd Method with loop and print or push 
let Arr=[]
const B=[1,2,3,4,5];
for( let i=B.length-1;i>=0;i--)
  Arr.push(B[i]);
  // console.log("And Arr: ",Arr)  

  // console.log(B[i]," ")
console.log("And Arr: ",Arr)  


// with Unshift
let ArrPush=[];
const C=[1,2,3,4,5]
for(let i=0;i<C.length;i++)
  ArrPush.unshift(C[i]);

console.log("Unshift ans: ",ArrPush)




// 
// let's see how we find the Max of the Array 
const D=[1,25,3,32,3,5,65,2,8];
console.log("M<ax: ",Math.max(...D))

// 2nd my comparing withthe smallest valeu 
const E=[1,25,3,32,3,5,65,2,8];
let Largest=Number.MIN_VALUE;
for(let i=0;i<E.length;i++){
  if(Largest<E[i])Largest=E[i]
}
console.log("Max: ",Largest)



// Let's find the min like that then 

const F=[4,2,1,5,3,5,7]
console.log("Min: ",Math.min(...F))


// /by 2nd method
const G=[2,3,5,1,4,5];
let Snallest=Number.MAX_VALUE;
for(let i=0;i<G.length;i++){
  if(Snallest>G[i]) Snallest=G[i]
}
console.log("Min: ",Snallest);

// Sum of all elemnets in the Array
const Z=[1,2,3,4,5]
const Ansd=Z.reduce((Data,CVal)=>Data+=CVal,0)
console.log("Sum oF Attau: ",Ansd)

// Let's see how we can find the duplicate
const H=[1,2,3,4,5,3,5];
console.log("Non Duplicate: ",new Set(H))
let ArrPush2=[];
const NDup=new Set();
const Dup=new Set();
for(Num of H ){
  if(NDup.has(Num)) Dup.add(Num)
    else NDup.add(Num)
}
console.log("NDUP: ",NDup, "DUP: ",Dup);



const I=[1,2,3,4,5,3,5];
const AnsD=[]
const AnsND=[]
// const NDupAns=I.filter((Data,index)=>{ return(I.indexOf(Data)===index)})
const NDupAns=I.filter((Data,index)=>{ if(I.indexOf(Data)===index){
AnsND.push(Data)
}
else{
  AnsD.push(Data)
}})

// console.log("Ans: ",NDupAns)
console.log("Dup Ans: ",AnsD)
console.log("Non Dup Ans: ",AnsND)


// Let's see if the Array is same or not 
// const J=[1,2,3,4,5]
// const K=[1,2,3,,5,4,5]

// for(let i=0;i<J.length;i++){
//   if(J[i]!==K[i])
//   {
//     console.log("Not matched");
//     return
//   }
// }
// console.log("Matched");




// Let's se how can we cunt the frequency

const L=[1,2,3,4,5,6,7,1,4,3,5];
const AnsRed=L.reduce((Data,CVal)=>{ Data[CVal]=(Data[CVal] ||0)+1
  return Data;
},{})
console.log("Ans New: ",AnsRed);




// Let's see the String Questions 

// reverse
const Str1="Hello There";
console.log("Rev: ",Str1.split("").reverse().join(""))

// How we reduce with the 
const Str2="Hello Not Here";
const Ansredu2=Str2.split("").reduce((Data,CVal)=>[CVal,...Data],[])
console.log("Ans: ",Ansredu2)


// Check if the palindrome or not 
const Str3="abccbaa"
const Rev=Str3.split("").reverse().join("");
console.log("rev: ",Rev)
if(Str3===Rev)console.log("Palindrome")
  else console.log("not a Palindrome")


// Let's see how we can find the char occurence from the String 
const Str4="maheshmane";
const AnsCar=Str4.split("").reduce((Data,Char)=>{
  Data[Char]=(Data[Char]||0)+1 
  return Data},{})

  console.log("Ans New 2: ",AnsCar)


  // Let's see how we can captlize the very first chat of each word 
  const StrNew="hello there"
  // console.log(StrNew.to)
  const anstnew=StrNew.split(" ").map((Data)=>Data[0].toUpperCase() + Data.slice(1))
  console.log("And neww1: ",anstnew)






  // Some No realted questions 
  // Check Even or Odd
  const No=10;
  if(No%2===0) console.log("Even")
    else console.log("Odd")


  const meth=(No)=>{
      if(No%2===0) console.log("Even")
    else console.log("Odd")
  }
  meth(11)



  // prime or not 
  const No1=11;
  const methpri=(No1)=>{
  for(let i=2;i< No1/2;i++){ if(No1%i===0) {console.log(" Not Prime"); return}
}
 console.log("prime prime")
  }
  methpri(10)



  // Let's how we can print the vowels from the String 
  const vol1="maheshmane";
  const vow="aeiou";
  for(let vo of vol1){
    if (vow.includes(vo)) {console.log("Vowels: ",vo)}
  }