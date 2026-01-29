
// Let's see about the Reverse 
const Arr=[1,2,3,4,5];
// console.log("Rev: ",Arr.reverse());
// ANs 
// Rev:  [ 5, 4, 3, 2, 1 ]


// With the loop 
const Arr2=[1,2,34,4,5,6,7,8];
const AnsArr=[]
for(let i=Arr2.length-1;i>0;i--){
  // console.log(" ",Arr2[i]);
  AnsArr.push(Arr2[i])
}
// console.log("Ans: ",AnsArr)
// Ans 
  // 8
  // 7
  // 6
  // 5
  // 4
  // 34
  // 2

  // with Anothere Array
//   Ans:  [
//   8,  7, 6, 5,
//   4, 34, 2
// ]


// with unshift 
const Arr3=[1,2,3,4,54,67,89,0];
const NewArr=[];
for(let i=0;i<Arr3.length;i++){
  NewArr.unshift(Arr3[i])
}
console.log("Arr: ",NewArr)
// Ans
// Arr:  [
//   0, 89, 67, 54,
//   4,  3,  2,  1
// ]


// Let's see with reduce
const ArrR=[2,323,23,1,54,676,879];
const RAns=ArrR.reduce((Ans,CVal)=>[CVal,...Ans],[])
console.log("Reduce ANs: ",RAns)




// Let's see how we can get the Max out of the Array 
const Arr4=[1,546,12,34,3222,33,23,22]
console.log("Arr Max: ",Math.max(...Arr4))
// Arr Max:  3222

// by comparing 
let MAX=Number.MIN_VALUE;
for(let i=0;i<Arr4.length;i++){
  if(Arr4[i]>MAX)
    MAX=Arr4[i];
}
console.log("MAX: ",MAX)
// MAX:  3222


// With Reduce 
const RANs2=Arr4.reduce((Ans,CVal)=>Ans>CVal?Ans:CVal,Number.MIN_VALUE)
console.log("Max ANs: ",RANs2)
// Max ANs:  3222



// Let's find the Min now then 
const MArr=[176,546,12,34,3222,33,23,22];
console.log("Min: ",Math.min(...MArr))
// Min:  12


// With comparing 
let MIN=Number.MAX_VALUE;
for(i=0;i<MArr.length;i++){
  if(MArr[i]<MIN)
    MIN=MArr[i];
}
console.log("MIN: ",MIN)
// Min:  12


// with reduce 
const RAns3=MArr.reduce((Ans,CVal)=>Ans>CVal?CVal:Ans,Number.MAX_VALUE);
console.log("MIN 3: ",RAns3)
// MIN 3:  12


// Let's see how we use the reduce to get the sum of array
const RAns4=MArr.reduce((Ans,CVal)=>Ans+CVal,0)
console.log("Sum: ",RAns4);
// Sum:  4068



// Let's see how we find the duplicate from the Array
const Narr=[1,2,34,2,3,4,56];
console.log("Non Duplicate ValiesL ",[new Set(Narr)]);
const NDup=new Set();
const Dup=new Set()
for(let val of Narr){
  if (NDup.has(val)) Dup.add(val)
    else NDup.add(val)
}
  console.log("Dup: ",Dup," Non Dup: ",NDup);
// Ans 
// Non Duplicate ValiesL  [ Set(6) { 1, 2, 34, 3, 4, 56 } ]
// Dup:  Set(1) { 2 }  Non Dup:  Set(6) { 1, 2, 34, 3, 4, 56 }



// let's see how we count the frequency of occurance in the Array 
const FArr=[1,2,3,2,1,3,4,5,3];
const AnsF=FArr.reduce((Ans,CVal)=>{Ans[CVal]=(Ans[CVal]||0)+1;
  return Ans;
},{});
console.log("Ans: ",AnsF)



// Let's about the String opertaions 
// ?rev
const Str1="Hello There";
console.log("Rev: ",Str1.split(""))
console.log("Rev: ",Str1.split("").reverse().join())
// Ans
// Rev:  [
//   'H', 'e', 'l', 'l',
//   'o', ' ', 'T', 'h',
//   'e', 'r', 'e'
// ]
// Rev:  e,r,e,h,T, ,o,l,l,e,H

// rev with the reduce
const Str2="Hello There";
const AnsRed=Str2.split("").reduce((Ans,CVal)=>[CVal,...Ans],[]).join("")
console.log("Ans: ",AnsRed)
// Ans 
// Ans:  erehT olleH


// let's if the String is palindrome or not 
const Str3="123321";
const Revstr=Str3.split("").reverse().join("");
console.log("Rev: ",Revstr)
if(Str3===Revstr){
  console.log("Palindrome")
}
else{
  console.log("Not palindrome ")
}
// Ans
// Palindrome


// Let's take very 1st chAR from teh string 
const Str4="Mahesh Mane"
const ANsChar=Str4.split(" ").map((Dtaa)=>Dtaa[0])
console.log("Ans: ",ANsChar)

// Last one 
const ANsChar2=Str4.split(" ").map((Dtaa)=>Dtaa)
console.log("Ans: ",ANsChar2)


// Let's see prime or not 
const No1=12;
const isPrime=(No)=>{
  for(i=2;i<No/2;i++){
    if(No%i===0)
    {
      console.log("Not Prime");
      return;
    }
  }
  console.log(" prime")

    
}
isPrime(No1);


// let's see about if the String contain voewls or not 
const Str5="maheshmane";
let Ansc=""
for(let char of Str5){
  if(("aeiou").includes(char)) {
    Ansc+=char
    Ansc.
    console.log("char: ",char)}
}
console.log("Ansc: ",Ansc);