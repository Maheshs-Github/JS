
// 1. Let's see how we reverse the String (6)



// 1. Let's see how we reverse the String 
const Str11="Hello There";
const RevStr=Str11.split("").reverse().join("");
console.log("Rev with split only : ",RevStr);
// Rev with split only :  [
  // 'H', 'e', 'l', 'l',
  // 'o', ' ', 'T', 'h',
  // 'e', 'r', 'e'
// ]
console.log("Rev with split + Revesre only : ",RevStr);
// Rev with split + Revesre only :  [
  // 'e', 'r', 'e', 'h',
  // 'T', ' ', 'o', 'l',
  // 'l', 'e', 'H'
// ]
console.log("Rev with split + Revesre + join only : ",RevStr);
// F Ans  Rev with split + Revesre + join only :  erehT olleH
// So basically here basically as u can see the split -> it splits the string into the Array , so array method revser we can recvse it then gain with the join we join it back to the String 



// 2. Let's see it with the loop then , how can we reverse it 
const Str12="Hello Felllas, It's be here to the Laptop and Mobile, well Digmabar bhai is here too, well people who went to teh sihgad also came, well let's see teh question too"
let RAns="";
for(let i=Str12.length-1;i>=0;i--)
{
  // RAns.concat(Str12[i]);
  RAns+=Str12[i];
}
console.log("RAns With the LoopL: ",RAns);
// Ans -> RAns With the LoopL:  oot noitseuq het ees s'tel llew ,emac osla daghis het ot tnew ohw elpoep llew ,oot ereh si iahb rabamgiD llew ,eliboM dna potpaL eht ot ereh eb s'tI ,sallleF olleH

// let's see how can we conct 2 strings 
const Con1="Mahesh"
const Con2="Mane"
console.log("1. ",Con1+Con2)
console.log("2. ",Con1.concat(Con2))
// 1.  MaheshMane
// 2.  MaheshMane


// 3. Well Let's try to reverse the String wioth the reduce
const Str13="JHeolle Motoo, ig not to that one ";
const StoA=Str13.split("");
// const RRAns=StoA.reduce((Ans,CVal)=>{[CVal, ...Ans] } ,[])
const RRAns=StoA.reduce((Ans,CVal)=>[CVal, ...Ans]  ,[])
// const RRAns=StoA.reduce((Ans,CVal)=>{ return [CVal, ...Ans]}  ,[])


  console.log("Let's see And in a String 1st: ",RRAns)
  // Here we got the error that Ans is not the Iterable but the let's return then
  // yup had to return , explicir or implicit , well reduce has to return something 
  // so basically we have to return bcoz it is a method, implicit or exlicit 
  // Let's see And in a String 1st:  [
  // ' ', 'e', 'n', 'o', ' ', 't', 'a',
  // 'h', 't', ' ', 'o', 't', ' ', 't',
  // 'o', 'n', ' ', 'g', 'i', ' ', ',',
  // 'o', 'o', 't', 'o', 'M', ' ', 'e',
  // 'l', 'l', 'o', 'e', 'H', 'J'
// ]

console.log("Rev With the Reduce with Array Techinque",RRAns.join())
// Rev With the Reduce with Array Techinque  ,e,n,o, ,t,a,h,t, ,o,t, ,t,o,n, ,g,i, ,,,o,o,t,o,M, ,e,l,l,o,e,H,J
console.log("Rev With the Reduce with Array Techinque",RRAns.join(""))
// Anms -> Rev With the Reduce with Array Techinque  eno taht ot ton gi ,ootoM elloeHJ

// * `join()` converts an **array → string**.
// * Default is `arr.join(",")` (adds commas).
// * If you pass `""` → `arr.join("")`, it joins without commas, making it a continuous string.

// So `[ "H", "i" ].join("") → "Hi"`.


// const SRAns=(RRAns.join(""));
// console.log(SRAns.replace(",",""))


// 4. Let's see with the Spared Opearator
const Str14="Hello There, Man Let's get back to it, So many things ";
const RAns2=[...Str14].reverse();
console.log("First Let's see this oner Ans: ",RAns2);
// First Let's see this oner Ans:  [
  // ' ', 's', 'g', 'n', 'i', 'h', 't', ' ',
  // 'y', 'n', 'a', 'm', ' ', 'o', 'S', ' ',
  // ',', 't', 'i', ' ', 'o', 't', ' ', 'k',
  // 'c', 'a', 'b', ' ', 't', 'e', 'g', ' ',
  // 's', "'", 't', 'e', 'L', ' ', 'n', 'a',
  // 'M', ' ', ',', 'e', 'r', 'e', 'h', 'T',
  // ' ', 'o', 'l', 'l', 'e', 'H'
// ]
const Ans2=RAns2.join(",");
console.log("Let's see the Ans with the Sepeartor of , : ",Ans2);
// Let's see the Ans with the Sepeartor of , :   ,s,g,n,i,h,t, ,y,n,a,m, ,o,S, ,,,t,i, ,o,t, ,k,c,a,b, ,t,e,g, ,s,',t,e,L, ,n,a,M, ,,,e,r,e,h,T, ,o,l,l,e,H
const Ans13=RAns2.join();
console.log("Let's see the Ans without using the Sepeartor  : ",Ans13);
// Let's see the Ans without using the Sepeartor  :   ,s,g,n,i,h,t, ,y,n,a,m, ,o,S, ,,,t,i, ,o,t, ,k,c,a,b, ,t,e,g, ,s,',t,e,L, ,n,a,M, ,,,e,r,e,h,T, ,o,l,l,e,H
// (Same?)
const Ans14=RAns2.join("");
console.log("Let's see the Ans without using the Sepeartor '' : ",Ans14);
// Let's see the Ans without using the Sepeartor '' :   sgniht ynam oS ,ti ot kcab teg s'teL naM ,erehT olleH

const Ans15=RAns2.join(" ");
console.log("Let's see the Ans without using the Sepeartor ' ' : ",Ans15);
// Let's see the Ans without using the Sepeartor ' ' :    s g n i h t   y n a m   o S   , t i   o t   k c a b   t e g   s ' t e L   n a M   , e r e h T   o l l e H

// So join basicaly creates the new String and what argument we give is used in the String as Sepeator in Ans , that is why it is showing comma (bcoz by default it use the sepeartor as , ) so that is why when we use "" it is giving the proper ans String                                                                                                                                    
// Also with the ... Spread operator we are taking the values as array which we did with the split last time
// well let's see the what is the ans of the ... then 
console.log("Ans: ",[...Str14])
// Ans:  [
  // 'H', 'e', 'l', 'l', 'o', ' ', 'T', 'h',
  // 'e', 'r', 'e', ',', ' ', 'M', 'a', 'n',
  // ' ', 'L', 'e', 't', "'", 's', ' ', 'g',
  // 'e', 't', ' ', 'b', 'a', 'c', 'k', ' ',
  // 't', 'o', ' ', 'i', 't', ',', ' ', 'S',
  // 'o', ' ', 'm', 'a', 'n', 'y', ' ', 't',
  // 'h', 'i', 'n', 'g', 's', ' '
// ]




// 
// 
// 
// 2. Let's see check if the String is a palindrome
const Str21="Hello Fellas , This is a Mahesh, Let's check about how we can check if the String is a Palindrom or not "
const isPal1=(str)=>{
return str.split("").reverse().join("");
}
// const PAns=isPal1(Str21);
const PAns3=isPal1(Str21)
if(PAns3===Str21) console.log("The String is a Palindrome");
else console.log("The String is NOT a Palindrome");
// Ans -> The String is NOT a Palindrome

// 2. Let's see with the directly calling the method and it's result 
if((isPal1(Str21))===Str21) console.log("The String is a Palindrome");
else console.log("The String is NOT a Palindrome");
// Ans -> The String is NOT a Palindrome

// 
// 2. Let's try to return the comparision 
const Str22="Hello m, just hearing songs, man tarag houn panayvar firte"
const isPal2=(str)=>{
  const PAns2=str.split("").reverse().join("");
  console.log("PAns: ",PAns2, " Str: ",str)
  // return PAns2===str;
  return str===PAns2;
}
if(isPal2(Str22)) console.log("The String is a Palindrome");
else console.log("The String is NOT a Palindrome");
// Ans -> The String is NOT a Palindrome
console.log((isPal2(Str22)));


// Let's see about the split and join 
const Str23="So Fellas oldie Guru Randhwa Songs are back";
console.log("S1: ",Str23.split());
console.log("S2: ",Str23.split(""));
// S1:  [ 'So Fellas oldie Guru Randhwa Songs are back' ]
// S2:  [
  // 'S', 'o', ' ', 'F', 'e', 'l', 'l',
  // 'a', 's', ' ', 'o', 'l', 'd', 'i',
  // 'e', ' ', 'G', 'u', 'r', 'u', ' ',
  // 'R', 'a', 'n', 'd', 'h', 'w', 'a',
  // ' ', 'S', 'o', 'n', 'g', 's', ' ',
  // 'a', 'r', 'e', ' ', 'b', 'a', 'c',
  // 'k'
// ]
// If we did not provide the any seperator at split as well it will not know from what we have split, that is why it is getting the same String in Array, 



// 
// Let's check about the actual palindrome for case sensitive sentensce
// const Str24="Heelo, Chamak Challo";
const Str24="Mam";
const PAns4=(str)=>{
  return (str.toLowerCase().split("").reverse().join("") === str.toLowerCase() )
  // const Ans= ((str.toLowerCase().split("").reverse().join("")) === str.toLowerCase() )
  // console.log("Ans: ",Ans);

}
console.log("Ans of Plain with the Case tolower case: ",PAns4(Str24));
// Ans-> Ans of Plain with the Case tolower case:  true
// Axctually i was just checking the lower case value of the palindeome value but not the actual, it was in the original i g 

console.log("Case: ",Str24.toLowerCase().split().reverse().join(""))


// let's see with the loop to find the palindrome
const Str25="well  llew";
const PAns5=(str)=>{
  let Ans="";
  for(let i=str.length-1;i>=0;i--)
    Ans+=str[i];
  return Ans===str;
}
console.log("Ans of the Pal with loop: ",PAns5(Str25));
// Ans -> Ans of the Pal with loop:  true





// Let's see about finding the occurences of char from the String 
const Str31="Hello There, Let's see about something ";
const OAns=(str,char)=>{
  // return str.split(char).length;
  // const Ans=str.split(char).length;
  const Ans=str.split(char).length-1;
  console.log("Ans of split only: ",str.split(char))
  return Ans;
}
console.log("Ans of finding teh Occurences with the split: ",OAns(Str31,'e'))
// Ans of split only:  [ 'H', 'llo Th', 'r', ', L', "t's s", '', ' about som', 'thing ' ]
// Ans of finding teh Occurences with the split:  8
// Well guess why are we taking the len-1, it is bcoz we are making the different parts based on the split but actually, thay are cpunt of split not the actual occurences, but split is based on the occcurences, that is why it is should be -1 




// Let's see with the simple looop to check the occurence of nay letter
const Str32="hello There, Ma Queen in a Saari,Keep the Desi";
const OAns2=(str,char)=>
{
  let Count=0;
  for(let i=0;i<str.length;i++)
  {
    if(str[i]===char) Count++;
  }
  return Count
}
// console.log("Ans about finding the Occurences with simple loop: ",OAns2(Str32,'i'));
console.log("Ans about finding the Occurences with simple loop (Checking the case there): ",OAns2(Str32.toLowerCase(),'S'.toLowerCase()));
// Ans -> Ans about finding the Occurences with simple loop:  3
// Ans about finding the Occurences with simple loop (Checking the case there):  2

// Let's see can we take tehe input from the user 
// const UserInput=prompt;
// guess NodeJs don't have the prompt we have reuire something like this readline


// 3. Let's see with the filter 
const Str33="Hello Let's see about it , that's all";
const OAns3=(str,char)=>
{
  return str.split("").filter((Val)=>Val === char).length;
}
console.log("Finding the Occurences with the filter: ",OAns3(Str33,"l"));
// Ans -> Finding the Occurences with the filter:  4


// // 3. Let's see with the reduce
const Str34="Hello Let's see about it , that's all";
const OAns4=(str,char)=>
{
  return str.split("").reduce((Ans,CVal)=>CVal===char?Ans+1:Ans,0)
}
console.log("Finding the Occurences with the Reduce: ",OAns3(Str33,"l"));
// Ans -> Finding the Occurences with the Reduce:  4



// 
// 
// Let's check teh new question about finding the first non repeating chars in the String 

// 1. With the for of loop and indexOf, lastindexOf
const Str41="Hello there, Let's check about the React 19 after this , Let's see man ";
const Str42="maheshma"
const NRep=(str)=>{
  for(let char of str){ if(str.indexOf(char)===str.lastIndexOf(char)) return char};
  return null;
}
console.log("Ans of Non repeating Ones: ",NRep(Str42));
// Ans -> Ans of Non repeating Ones:  e
console.log("Ans of Non repeating Ones big String One: ",NRep(Str41));
// Ans -> Ans of Non repeating Ones big String One:  H
// 
// 
// Explaition -> 
/* function firstUnique(str) {
  for (let ch of str) {
    if (str.indexOf(ch) === str.lastIndexOf(ch)) return ch;
  }
  return null;
}
console.log(firstUnique("swiss")); // w
Walkthrough with "swiss"
👉 String = "swiss"

We loop through each character:

ch = "s"

str.indexOf("s") → 0 (first occurrence at index 0)

str.lastIndexOf("s") → 4 (last occurrence at index 4)

Not equal → "s" is repeated, so skip.

ch = "w"

str.indexOf("w") → 1

str.lastIndexOf("w") → 1

Equal → "w" appears only once.
✅ So we return "w" immediately.

(We never reach "i" and "s" again, because function already returned.)

Output:
nginx
Copy code
w
⚡ Simple meaning:

indexOf(ch) → "where it first shows up"

lastIndexOf(ch) → "where it last shows up"

If both are the same → that character appears only once → it’s unique. */


// Let's see how we can get all non repeating char not only first 
const Str43="mahesh";
const ANRep=(str)=>
{
  let StrAbns=""
  for(let char of str){ if(str.indexOf(char)===str.lastIndexOf(char) )StrAbns+=char}
  return StrAbns;
}
console.log("All Non Repating Char: ",ANRep(Str43))
// Ans -> All Non Repating Char:  maes

// Let's see can we write loop withous using the {}, i think we sure can , also let's handle withthe mix case 
const Str44="ANime";
const ANRep2=(str)=>
{
  let ncasestr=str.toLowerCase();
  let StrAbns=""
  for(let char of ncasestr) if(ncasestr.indexOf(char)===ncasestr.lastIndexOf(char) )StrAbns+=char
  return StrAbns;
}
console.log("All Non Repating Char: ",ANRep2(Str44))
//Ans -> All Non Repating Char:  anime
// Can we do it with in any diff way  


// Well let's see with the checking the freq of each element 
const Str45="Hello There, Damn thing is that ";
const NRep2=(str)=>
{
  let freq={};
  for(let char of str) freq[char]=(freq[char] ||0) +1;
  for(let char of str) if(freq[char]===1) return char;
  return null;
}
console.log("Ans with the By Checking the freq: ",NRep2(Str45));
// Ans -> Ans with the By Checking the freq:  H

// Let's print all the non repating then 
const Str46="hello there, this is a i duno";
const NRep3=(str)=>{
  let freq={};
  let StrAns="";
  for(let char of str) freq[char]=(freq[char] || 0)+1;
  for(let char of str) if(freq[char]===1) StrAns+=char;
  return StrAns;
}
console.log("Ans for all Non Reapating ones with for of :", NRep3(Str46));
// Ans -> Ans for all Non Reapating ones with for of : r,adun

// 
// Let's try to find the Non Reapeating char with map
const Str47="hello there";
const NRep4=(str)=>{
  // str.split("").map((Ans,index)=>str.indexOf(Ans)) ===index return Ans;
  const map=new Map();
  let Anststr="";
  for(let char of str) map.set(char, (map.get(char) || 0) +1);
  for(let [char,count] of map) if(count===1) Anststr+=char;
  return Anststr;
}
console.log(" Non Reapeating Ans with the Map: ",NRep4(Str47));
// Ans ->  Non Reapeating Ans with the Map:  o tr


// Let's print all the non repating then 
// const Str48="hello there, this is a i duno";
const Str48="hello ";
const NRep5=(str)=>{
  let AnsChar="";
  // str.split("").find((Data)=>{
  //   str.indexOf(Data) === str.lastIndexOf(Data) 
  // AnsChar+=Data})
   AnsChar= str.split("").find((Data)=>str.indexOf(Data) === str.lastIndexOf(Data))
  return AnsChar; 
}
console.log("Ans for all Non Reapating ones with split + indexOf + lastIndexOf:", NRep5(Str48));
// Ans -> Ans for all Non Reapating ones with split + indexOf + lastIndexOf: h


// let's try with the filter 
const Str49="hello ";
const NRep6=(str)=>{
  let AnsChar="";
  // str.split("").find((Data)=>{
  //   str.indexOf(Data) === str.lastIndexOf(Data) 
  // AnsChar+=Data})
   AnsChar= str.split("").filter((Data)=>str.indexOf(Data) === str.lastIndexOf(Data)).join("")
  return AnsChar; 
}
console.log("Ans for all Non Reapating ones with filetr and remaining the same :", NRep6(Str49));
// Ans -> Ans for all Non Reapating ones with filetr and remaining the same : heo

// So the differnce is that find will give only single elemnt but the filter will give all the matched values 
// split -> String to ARray 
//  filter -> returns the array of result that matches the condition 
// join convert the result of array into single values , also we have discussed it use the seperator for taht , that is why we use ""
// str.indexOf(Data) -> so in str string we search the 


// 
// Let's see about the Anagram 
// What is that Anagram basiclly first then if two words have same alpha but in a seperate order then it will call as the Anagram word or somethig like 
const Str51="ABC"; const Str52="CBA";
const AnaFun=(str1,str2)=>
{
  console.log("Str 1 Sort Ans: ",str1.split("").sort());
  console.log("Str 2 Sort Ans: ",str2.split("").sort());
  return str1.split("").sort().join("") === str2.split("").sort().join("")
}
console.log("Angram Ans: ",AnaFun(Str51,Str52));
// Str 1 Sort Ans:  [ 'A', 'B', 'C' ]
// Str 2 Sort Ans:  [ 'A', 'B', 'C' ]
// Angram Ans:  true

// 
// let's see with the Map like that freq 
const Str53="Mahesh1"; const Str54="heshMa";
const AnaFun2=(str1,str2)=>
{
  if(str1.length !==str2.length) return false;
  let freq={};
  for(let char of str1) freq[char]=(freq[char] ||0 )+1;
  for(char of str2) if(!freq[char]) return false;
  return true;
}
console.log("Ans with the freq obj: ",AnaFun2(Str53,Str54));
