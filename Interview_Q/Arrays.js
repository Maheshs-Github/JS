// Let's see the differnt Array Interview related Question
// 1. Reverse Array (8)
// 2. Let's see how we can find the max in the Array (96)
// 3. Let's see about teh finding teh duplicate of teh Array (138)


// 
// 
// 
// 1. Reverse Array
let Arr11 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Reversed Array with Reverse: " + Arr11.reverse());
// Ans -> Reversed Array with Reverse: 8,7,6,5,4,3,2,1

// Let's try to Reverse it with the Loop
// First directly print the
let Arr111 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Reversed Array: ");
for (let i = Arr111.length-1; i >= 0; i--) {
  console.log(Arr111[i]);
}
// Ans -> Reversed Array:
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// 2. Let's store them in some arrr then print that arr variable
let RevArr = [];
let Arr12 = [1, 3, 4, 67, 80, 9];
for (let i = Arr12.length; i > 0; i--) RevArr.push(i);
console.log("Rev Array with the another Varibale" ,RevArr);
// And -> Rev Array with the another Varibale [ 6, 5, 4, 3, 2, 1 ]
// Does it the right ans ofc not, look at the array and ouput, Actually it is just the index , u hace missed something here 
// Let's take the example fro it 
let RevArr11 = [];
let Arr112 = [1, 3, 4, 67, 80, 9];
// for (let i = Arr112.length; i > 0; i--) RevArr11.push(Arr112[i]);
for (let i = Arr112.length-1; i >= 0; i--) RevArr11.push(Arr112[i]);
// console.log("Rev Array with the another Varibale 2" ,RevArr11);
// Ans -> Rev Array with the another Varibale [ undefined, 9, 80, 67, 4, 3 ]
console.log("Rev Array with the another Varibale 3" ,RevArr11);
// Ans -> Rev Array with the another Varibale 3 [ 9, 80, 67, 4, 3, 1 ]
// As u can see , the array is 0 based index that is why it is goes from len-1 to 0 , that's all here


// Let's try with the unshift
let RevArr1 = [];
let Arr13 = [1, 2, 34, 5, 67, 8];
for (let Num of Arr13) RevArr1.unshift(Num);
console.log(RevArr1);
// Ans -> [ 8, 67, 5, 34, 2, 1 ]

// Let's see with the simple for loop
let RevArr2 = [];
let Arr15 = [1, 3, 4, 67, 80, 9];
for (let i = 0; i < Arr15.length; i++) {
  RevArr2.unshift(Arr15[i]);
}
console.log("USHIFTED ARR: ", RevArr2);
// Ans USHIFTED ARR:  [ 9, 80, 67, 4, 3, 1 ]

// Let's see with teh Reduce
let Arr14 = [1, 2, 3, 4, 5, 6, 6, 7, 8, 889];
// let RevArr2=[];
const ArrAns = Arr14.reduce((Ans, CVal) => [CVal, ...Ans], []);
console.log("ANs: ", ArrAns);
// Ans ANs:  [
// 889, 8, 7, 6, 6,
// 5, 4, 3, 2, 1
// ]

// Let's simply tell u how it's works
// At 1st we will get teh CVAl=1,Ans=[](As we have intialize it with the []) so the Ans=1
// then for 2ns one , we will get the CVAl=2, Ans=1, [2,1]
// ?3rd one , CVal==3, ANs=[2,1] , [3,2,1]
// u will might have the confusion about how the values are getting reverse , i'll just discuss 3rd one
// Ans =[2,1] and CVal=3    , [CVal,...Ans] -> [3,2,1]   simple as that , (we are just taking the CVal at 1st then old values, that giving the sequece in reverse)


// Let's see with the pop and unshift i think that i did something with it, let's see 
const Arr151=[1,2,3,4,56,6];
const NewAnsArr=[];
// for(let arr of Arr151) NewAnsArr.push(arr.pop);
// for(let arr of Arr151) console.log(arr);
// console.log("Arr Ans with unshift and pop: ",NewAnsArr)
// Ans -> Arr Ans with unshift and pop:  [ undefined, undefined, undefined, undefined, undefined, undefined ]
// U got all the Ans as the undefined why is that , if u can see u have nice logic , u are iterating then pop and push nice and resonable but the problem is that , we taking the single Val which is Number and applying the pop on that num do not have pop , rather it that Array have that method that is why it is not woring 
// 
// let's see something lese
// while(Arr151.length >0)NewAnsArr.push(Arr151.pop());
// 
const NewArr151=[...Arr151]
for(let i=0;i<Arr151.length;i++) NewAnsArr.push(NewArr151.pop())
console.log("Ans of rev with Pop and Push: ",NewAnsArr)
// Ans -> Ans of rev with Pop and Push:  [ 6, 56, 4, 3, 2, 1 ]
// Ans of rev with Pop and Push:  [ 6, 56, 4, 3, 2, 1 ]


// 
// 
// 
// 2. Let's see how we can find the max in the Array
let Arr21 = [1, 23, 32, 455, 6, 767578, 54535, 5, 4, 43, 3556];
console.log("Max of the Array: ", Math.max(...Arr21));
// console.log("Max of the Array: ",Math.max(Arr21));
console.log("Data: ", ...Arr21);
console.log("Data1: ", Arr21);
// Ans -> Max of the Array:  767578
// Data:  1 23 32 455 6 767578 54535 5 4 43 3556
// Data1:  [
// 1,   23,     32,
// 455,    6, 767578,
// 54535,    5,      4,
// 43, 3556
// ]

// /So her simple observation would be taht, firstly undersstand this with the spread(...) we only take the values from Array, nice yaar if i want to take teh value (Only) from the Array or something
// Well i g that is all here t know

// Let's check with teh consditipnal statement
// let Learget = 0;
// let Learget = Number.MIN_VALUE;
let Learget = Number.NEGATIVE_INFINITY;

// console.log("ALr: ",Learget);
for (i = 0; i < Arr21.length; i++) {
  if (Arr21[i] > Learget) Learget = Arr21[i];
}
console.log("Largest: ", Learget);
// Ans ALr:  0
// Largest:  767578

// Let's try to find the Max with the reduce too
let Arr22 = [1, 23, 32, 455, 6, 767578, 54535, 5, 4, 43, 3556];
let MAns = Arr22.reduce((Max, CVal) => (CVal > Max ? CVal : Max), -Infinity);
console.log("Max with teh REduceL: ", MAns);
let MAddAns = Arr22.reduce((Max, CVal) => CVal + Max, 0);
console.log("Infi: ", -Infinity);
// console.log("Add, just checking the Add to know about the reduce: ",MAddAns)
// Ans -> Max with teh REduceL:  767578
// Add, just checking the Add to know about the reduce:  826238
// Infi:  -Infinity

// 
// Q. Let's see about the Infinity
console.log("Number.MAX_VALUE: ", Number.MAX_VALUE);
console.log("Number.MIN_VALUE: ", Number.MIN_VALUE);
// Number.MAX_VALUE:  1.7976931348623157e+308
// Number.MIN_VALUE:  5e-324
console.log("Number.MIN_VALUE: ", (Number.POSITIVE_INFINITY > Number.MIN_VALUE));
// Number.MIN_VALUE:  true

/* Q1. What is Infinity and realted  

Good one 👍 let’s go step by step on **`Infinity` in JavaScript**.

---

### 🔹 1. What is `Infinity`?

* It’s a **special numeric value** in JavaScript that represents something larger than the largest possible number (`Number.MAX_VALUE`).
* Type of `Infinity` is **`number`**.

```js
console.log(typeof Infinity); // "number"
```

---

### 🔹 2. How do we get `Infinity`?

* By dividing a nonzero number by `0`:

```js
console.log(5 / 0);  // Infinity
console.log(-5 / 0); // -Infinity
```

* Using constants:

```js
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
```

* Math operations that overflow:

```js
console.log(1e308 * 2); // Infinity (too large for JS to store)
```

---

### 🔹 3. Properties

* `Infinity` is **greater than any finite number**:

```js
console.log(Infinity > 999999999999); // true
```

* Negative infinity is **smaller than any number**:

```js
console.log(-Infinity < -999999999999); // true
```

---

### 🔹 4. Special behavior

* `Infinity + Infinity` → `Infinity`
* `Infinity - Infinity` → `NaN` (Not a Number)
* `Infinity * 0` → `NaN`
* `1 / Infinity` → `0`
* `Infinity / Infinity` → `NaN`

---

### 🔹 5. Use cases in code

* Representing very large values.
* As a placeholder when finding **minimum/maximum** values.

Example:

```js
let arr = [3, 8, -2, 5];
let min = Infinity;

for (let num of arr) {
  if (num < min) min = num;
}
console.log("Min:", min); // -2
```

---

✅ So in short:
`Infinity` is a **special numeric constant** in JS that behaves mathematically like infinity but with quirks (`NaN` in some operations).

---

Do you want me to also cover **`NaN` vs `Infinity`** together? That’s a very common interview comparison.

 */

/* Q2. How to read those max or min values in JS
Great question 👍 — those look scary at first but they’re just **scientific notation** (exponential form). Let’s break it down simply.

---

### 🔹 1. `Number.MAX_VALUE`

```js
console.log(Number.MAX_VALUE); 
// 1.7976931348623157e+308
```

This means:
👉 `1.7976931348623157 × 10^308`

That’s a **1.79 followed by 308 zeros** 😲
(huge number, close to the largest number JS can represent before going to `Infinity`).

---

### 🔹 2. `Number.MIN_VALUE`

```js
console.log(Number.MIN_VALUE);
// 5e-324
```

This means:
👉 `5 × 10^-324`

That’s **0.000...0005** (with **323 zeros after the decimal point** before the `5`).
It’s the **smallest positive number** JS can store, not the most negative (that’s `-Number.MAX_VALUE`).

---

### 🔹 3. How to *read* such numbers

The `e` just means "times 10 raised to the power of".

* `e+308` → move decimal **308 places to the right** (very large).
* `e-324` → move decimal **324 places to the left** (very small).

Example:

```js
1.2e3   // 1.2 × 10^3 = 1200
4.5e-2  // 4.5 × 10^-2 = 0.045
```

---

✅ So:

* **`MAX_VALUE` ≈ 1.79 × 10^308** → largest finite number
* **`MIN_VALUE` ≈ 5 × 10^-324** → smallest positive number

---

👉 Do you want me to show you a **trick to quickly expand / read these numbers in JS** (without manually counting 308 zeros 😅)?

*/



// 
// 
// 
// 3. Let's see about teh finding teh duplicate of teh Array
// Let's see with te set
let Arr31 = [1, 2, 3, 4, 555, 67, 67, 4];
console.log("Non Dup DataL: ", [...new Set(Arr31)]);
console.log("Non Dup DataL non Arry to i g: ", new Set(Arr31));
// Ans ->
// Non Dup DataL:  [ 1, 2, 3, 4, 555, 67 ]
// Non Dup DataL non Arry to i g:  Set(6) { 1, 2, 3, 4, 555, 67 }
// As u have seen that to get the values in a Array we used ... (Spread ) with the Array

// 
// 
// ------- Q. Let's see about the  [...new Set(Arr31)] -------
/* Q1. Why we have to use the new there?
1️⃣ Why new Set(...)?

Yes → Set is a constructor function (like a class).
You must use new to create a new instance:
const s = new Set([1,2,3]); 

Without new, Set([1,2,3]) will throw an error.
So new Set(Arr31) means → make a Set object from the array.

2️⃣ Why not new Array(...) usually?
You can do it:
const a = new Array(3);   // [ <3 empty items> ]
const b = new Array(1,2,3); // [1,2,3]

👉 But it’s confusing (sometimes makes empty slots instead of numbers).
So, developers prefer array literals:
const a = []; 
const b = [1,2,3]; 

const s = new Set([1, 2, 3, 2]);
console.log(s); 
// 👉 Set(3) {1, 2, 3}
A Set is like a collection (no duplicate values).
*/

// 
/* Q2. What [...s] this does?  

Using spread ...
console.log(...s);
// 👉 1 2 3
Spread just pulls out all the values one by one.

Wrapping with []
const arr = [...s];
console.log(arr);
// 👉 [1, 2, 3]
Here, [] makes a new array.

...s spreads the values of the Set inside it.
So finally → you get a normal array [1,2,3].
*/
// 
/* Q3. What is the difference between if you do Array.from(s) instead of [...s] 
Perfect 👍 let’s explore this step by step:

---

### 1. Using `[...s]` (spread syntax)

```js
const s = new Set([1, 2, 3, 2]);
const arr1 = [...s];
console.log(arr1); 
// 👉 [1, 2, 3]
```

* Spread pulls values out of the Set.
* `[]` wraps them into a new array.

---

### 2. Using `Array.from(s)`

```js
const s = new Set([1, 2, 3, 2]);
const arr2 = Array.from(s);
console.log(arr2);
// 👉 [1, 2, 3]
```

* `Array.from()` is a **built-in method** that converts *iterables* (like Set, Map, String, etc.) into an array.
* Since Set is iterable, `Array.from(s)` gives the same result.

---

✅ Both give the same `[1, 2, 3]`.
The difference is more about **style and flexibility**:

* `[...s]` is shorter & popular in modern JS.
* `Array.from()` can also take a **mapping function**:

  ```js
  const arr3 = Array.from(s, x => x * 2);
  console.log(arr3); 
  // 👉 [2, 4, 6]
  ```

  (Here, it doubled each element while creating the array.)

---

👉 So, `[...s]` is like a quick shorthand, while `Array.from()` is more flexible.

*/

/* Q4. To do teh Work of Array.from we need [...].map (Conversion + transform) 
Ahh, good catch 👍 Let’s compare this carefully.

---

### 1. `Array.from(s, x => x * 2)`

* Here, the **second argument is a mapping function**.
* It runs **while building the array**.
* So you don’t need an extra `.map()` call later.

Example:

```js
const s = new Set([1, 2, 3]);
const arr = Array.from(s, x => x * 2);
console.log(arr); 
// 👉 [2, 4, 6]
```

---

### 2. `[...s].map(x => x * 2)`

* First, spread `s` into an array.
* Then, run `.map()` on that array.

Example:

```js
const s = new Set([1, 2, 3]);
const arr = [...s].map(x => x * 2);
console.log(arr); 
// 👉 [2, 4, 6]
```

---

### 🔑 Difference:

* **Array.from(s, fn)**:

  * Conversion + mapping in **one step**.
  * Slightly more efficient, since it avoids creating an intermediate array before mapping.

* **[...s].map(fn)**:

  * More explicit — first make array, then transform.
  * Commonly seen in code because `.map()` is very familiar.

---

👉 Both give the same result in your Set case.
The difference is mostly **readability + performance (tiny)**.

Would you like me to also show you how this works with something non-Set, like a string (`Array.from("123", Number)` vs `[..."123"].map(Number)`) — it makes the contrast clearer?

*/

/* Q5. How we convert the Object into the Array, well not exactly into Array but map is only avliable for Array that is why we need it's values only to take  

Exactly 👍 you got it right.

* **`.map()` is an **array method only**.**
  You can’t directly call `.map()` on objects, sets, or strings.

That’s why in my earlier example:

```js
[...s].map(fn)
```

I had to spread `Set` into an **array first**, then `.map()` works.

---

### Why not on objects?

Objects (`{}`) are not inherently iterable like arrays.
Example:

```js
const obj = { a: 1, b: 2 };
obj.map(x => x * 2); // ❌ TypeError
```

If you want to use `.map()` on an object, you must first convert it into an array form — usually with `Object.keys()`, `Object.values()`, or `Object.entries()`:

```js
const obj = { a: 1, b: 2 };

// Values
const doubledVals = Object.values(obj).map(v => v * 2);
console.log(doubledVals); // [2, 4]

// Keys
const upperKeys = Object.keys(obj).map(k => k.toUpperCase());
console.log(upperKeys); // ["A", "B"]

// Entries
const arrEntries = Object.entries(obj).map(([k, v]) => [k, v * 2]);
console.log(arrEntries); // [["a", 2], ["b", 4]]
```

---

👉 So yes, `.map()` is strictly an **array method**.
For non-arrays (Set, String, Object), we first **convert to array** then use `.map()`.

Do you want me to make a **simple table** comparing how `map` works across Array, Set, String, Object? That might make it very clear.
*/

/*Q6. What is the output of it  console.log(Array.from("hello")); 
console.log([..."hello"]); 

Exactly 👍 you’ve got it!

If we use a **string**:

```js
console.log(Array.from("hello")); // ['h', 'e', 'l', 'l', 'o']
console.log([..."hello"]);        // ['h', 'e', 'l', 'l', 'o']
```

👉 Both `Array.from("hello")` and `[..."hello"]` create an **array of characters**.
That’s because a **string is iterable**, and both `Array.from` and the spread operator `...` consume iterables element by element.

---

✨ Difference:

* `Array.from` also lets you **apply a transform** while creating:

```js
console.log(Array.from("hello", ch => ch.toUpperCase()));
// ['H', 'E', 'L', 'L', 'O']
```

* Spread `[...]` can’t do that — you’d need a `.map` afterward.

```js
console.log([..."hello"].map(ch => ch.toUpperCase()));
// ['H', 'E', 'L', 'L', 'O']
```

---

So yeah 🚀 both create **array of chars** from a string, but `Array.from` can also *transform on the fly*.

Want me to also show how it behaves with a **Set** and a **Map**? That makes the difference even more interesting.
*/

// With the filter and indexof
let Arr32 = [1, 2, 3, 4, 555, 67, 67, 4];
const DupFilt = Arr32.filter((Data, index) => Arr32.indexOf(Data) === index);
console.log("Let's check the Dupliacte with the filter and indexOF: ", DupFilt);
// Let's check the Dupliacte with the filter and indexOF:  [ 1, 2, 3, 4, 555, 67 ]

console.log(
  "Let's see how we can get the Duplicate and non dupliacte with this approch "
);
const NonDA = [];
const DA = [];
Arr32.filter((Data, index) => {
  if (Arr32.indexOf(Data) === index) NonDA.push(Data);
  else DA.push(Data);
});
console.log("Uniue Data: ", NonDA, " Data repetaed: ", DA);
// Ans ->  Let's check the Dupliacte with the filter and indexOF:  [ 1, 2, 3, 4, 555, 67 ]
// So here basically we are just taking the Arr32 and amtching with the Data(which is also the data of the Arr32) but here we are matching Arr32 index with the data(copy of the arr32) , we just comparing the arr32 index and it's copy index, if there is any no cpme again it already have the index assign to it so it can filter out
// Uniue Data:  [ 1, 2, 3, 4, 555, 67 ]  Data repetaed:  [ 67, 4 ]

// I have one more task to add there, that is if the values is duplicate don't add the value in the Ans 
let NonDA1 = [];
const DA1 = [];
Arr32.filter((Data, index) => {
  if (Arr32.indexOf(Data) === index) NonDA1.push(Data);
  else {NonDA1=NonDA1.filter((Data1)=>Data1!==Data); DA1.push(Data)};
});
console.log("Uniue Data New : ", NonDA1, " Data repetaed New: ", DA1);
// Ans-> Uniue Data New :  [ 1, 2, 3, 555 ]  Data repetaed New:  [ 67, 4 ]

// With the Set
let Arr33 = [1, 2, 3, 4, 555, 67, 67, 4];
let Dup = new Set();
let NonDup = new Set();
for (let Num of Arr33) {
  if (NonDup.has(Num)) Dup.add(Num);
  else NonDup.add(Num);
}
console.log("Non Duppliate Values: ", NonDup);
console.log("Duppliate Values: ", Dup);
// Ans -> Non Duppliate Values:  Set(6) { 1, 2, 3, 4, 555, 67 }
// Duppliate Values:  Set(2) { 67, 4 }

// let's see with more constraint 
let Arr331 = [1, 2, 3, 4, 555, 67, 67, 4];
let Dup1 = new Set();
let NonDup1 = new Set();
for (let Num of Arr331) {
  if (NonDup1.has(Num)){ Dup1.add(Num); NonDup1.delete(Num)}
  else { NonDup1.add(Num)};
}
console.log("Non Duppliate Values: ", [...NonDup1]);
console.log("Duppliate Values: ", [...Dup1])
// well those more constaint were the Removing the any duplicate from the NonDup and converting the Set into the Array 

// Let's see with the reduce
let Arr34 = [1, 2, 3, 4, 555, 67, 67, 4];
const DAns = Arr34.reduce((Ans, Val) => {
  Ans[Val] = (Ans[Val] || 0) + 1;
  return Ans;
}, {});

const NDUP = Object.keys(DAns).filter((Data) => DAns[Data] > 1);

console.log("And: ", NDUP);
// And:  [ '4', '67' ]

// 
// 
// 
// 4. Let's see about the Flattening the Array
let Arr41 = [1, 2, [3, 4, 5, [32, 34, 21, 44], 6, 7], 3, 4];
console.log("Flattend Array: ", Arr41.flat(1));
// Depth 2
console.log("Flattend Array: ", Arr41.flat(2));
console.log("Flattend Array With Infinity: ", Arr41.flat(Infinity));

// With teh Reduce
//   let Arr42=[1,2,[3,4,5,[32,34,21,44],6,7],3,4];
// const FlattenA=()=> {return(Arr42.reduce((Data,CVal)=>{
//   return  Data.concat(Array.isArray(CVal)?FlattenA(CVal):CVal),[]
// }))}
// console.log("Flatted Dtaa with the Reduce: ",FlattenA(Arr42));

let Arr42 = [1, 2, [3, 4, 5, [32, 34, 21, 44], 6, 7], 3, 4];

const FlattenA = (arr) => {
  return arr.reduce((Data, CVal) => {
    return Data.concat(Array.isArray(CVal) ? FlattenA(CVal) : CVal);
  }, []);
};

console.log("Flattened Data with Reduce: ", FlattenA(Arr42));
// Ans -> Flattened Data with Reduce:  [
  //  1,  2,  3, 4, 5, 32,
  // 34, 21, 44, 6, 7,  3,
  //  4
// ]


// Anpother trick woth the help[ of toString 
let Arr43 = [1, 2, [3, 4, 5, [32, 34, 21, 44], 6, 7], 3, 4];
const FlattedAns=Arr43.toString().split(",").map(Number);
console.log("Flattened String: ",FlattedAns)
const FlattedStr=Arr43.toString()
// const FlattedStr=(...Arr43);
console.log("Ans of Spread hereL :",...Arr43)
console.log("Flattened String: ",FlattedStr)
const FlattedStrA=[...Arr43.toString()];
console.log("Flattened String: ",FlattedStrA)
// Ans of Spread hereL : 1 2 [ 3, 4, 5, [ 32, 34, 21, 44 ], 6, 7 ] 3 4
// Flattened String:  [
//    1,  2,  3, 4, 5, 32,
//   34, 21, 44, 6, 7,  3,
//    4
// ]
// Flattened String:  1,2,3,4,5,32,34,21,44,6,7,3,4
// Flattened String:  [
//   '1', ',', '2', ',', '3', ',',
//   '4', ',', '5', ',', '3', '2',
//   ',', '3', '4', ',', '2', '1',
//   ',', '4', '4', ',', '6', ',',
//   '7', ',', '3', ',', '4'
// ]

/*toString()
Converts the whole array (including nested arrays) into a string.
Example:

Arr43.toString()
// "1,2,3,4,5,32,34,21,44,6,7,3,4"


split(",")
Splits the string back into an array of strings.
Example:
["1","2","3","4","5","32","34","21","44","6","7","3","4"]


map(Number)
Converts each string into a number.
Final result:
[1, 2, 3, 4, 5, 32, 34, 21, 44, 6, 7, 3, 4] */









//5. Let's see about how we can count the frequesncy of the element
let Arr51=[1,2,3,4,3,4,5,67,7,8,7,3,9];
const Arr51Ans=Arr51.reduce((Data,CVal)=>{Data[CVal]=(Data[CVal] || 0)+1
  return Data;
},{})
console.log("Freq Obj: ",Arr51Ans);
// Ans -> Freq Obj:  {
  // '1': 1,
  // '2': 1,
  // '3': 3,
  // '4': 2,
  // '5': 1,
  // '7': 2,
  // '8': 1,
  // '9': 1,
  // '67': 1
// }

/* Example array
let arr = ['a', 'b', 'a'];


We run:

let freq = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

Step 1: Start

acc = {} (empty object, because of the {} at the end of reduce).

val = 'a' (first element).

Now:

acc[val] means acc['a'].

Does acc have 'a' as a property? → ❌ No → so it’s undefined.

(undefined || 0) = 0.

0 + 1 = 1.

So we assign acc['a'] = 1.

Now acc = { a: 1 }.

Step 2

Next element: val = 'b'.

acc[val] = acc['b'].

But acc has no b yet → so undefined.

(undefined || 0) + 1 = 0 + 1 = 1.

So we assign acc['b'] = 1.

Now acc = { a: 1, b: 1 }.

Step 3

Next element: val = 'a' again.

acc[val] = acc['a'].

But this time it already exists: 1.

(1 || 0) + 1 = 1 + 1 = 2.

So we update acc['a'] = 2.

Now acc = { a: 2, b: 1 }.

✅ So the key point:

acc[val] doesn’t mean “actual array value”.

It means: the count stored in the object for that array value as a key.

At first occurrence → undefined.
Next times → a number (the current count). */




// Let's try to find the frequency with teh for of loop
let Arr52=[1,2,3,5,3,6,36,34,3,34,1,32,3,2,1];
let freq={};
for(let Data of Arr52)
{
  freq[Data]=(freq[Data] ||0 )+1;
}
console.log("Freq with the for of : ",freq)
// ans ->  Freq with the for of :  { '1': 3, '2': 2, '3': 4, '5': 1, '6': 1, '32': 1, '34': 2, '36': 1 }










// Let's see about rotataing the array by k steps 
let Arr61=[1,2,3,4,5,6];
const RotFun=(Arr,Steps)=>
{
  Steps=Steps%Arr.length;
return Arr.slice(-Steps).concat(Arr.slice(0,-Steps));
}
console.log("Rotate Data: ",RotFun(Arr61,3));
// Ans -> Rotate Data:  [ 4, 5, 6, 1, 2, 3 ]
// It is so simple 
  // Steps=Steps%Arr.length;    why is this one , well let's take the Steps as 9 now
console.log("Rotate Data with 9 Steps: ",RotFun(Arr61,9));
// Rotate Data with 9 Steps:  [ 4, 5, 6, 1, 2, 3 ]
// It will be Same bcoz we can't go out of the len , we have to be in a range , also 
// 3%6=3   and 9%6=3  that is why the same ans and more importanlty consistentent bcoz it have more steps than the len 
//  one mpore thing to know, Arr.slice(-3) will return the Arr.sliec(6-3) -> Arr.sliec(3)  i.e from 3-6 range [4,5,6]
// and Arr.sliec(0,-3), the elements will be [1,2,3]



//  Let's see with the splice 
let Arr62=[1,2,3,4,5,6];
const rotateFun=(Arr,Steps)=>{
  Steps=Steps%Arr.length;
  return Arr.splice(Arr.length-Steps).concat(Arr);
}
console.log("Ans of Roate with the Splice",rotateFun(Arr62,3));
// Ans -> Ans of Roate with the Splice [ 4, 5, 6, 1, 2, 3 ]
// So simply here splice will get the count from where to srart i.e [4,5,6] and then with the remianing [1,2,3]


// Let's see how we do it with the unshift and pop
let Arr63=[1,2,3,4,5,6,7,8];
const rfun=(Arr,Steps)=>
{
  Steps=Steps%Arr.length;
  for(i=0;i<Steps;i++)
  {
    Arr.unshift(Arr.pop());
  } 
  return Arr;

}
console.log("Rotating the Array with the Unshift and pop: ",rfun(Arr63,3));
// Ans -> Rotating the Array with the Unshift and pop:  [
  // 6, 7, 8, 1,
  // 2, 3, 4, 5
// ]

// Here is the simple thing is that we want to rotate the array by 3 places that loop is for that , so how the pop and unshift working here 
// poping 8 then unshifting to 1st [8], then popping 7 , unsifting [7,8], then poping 6, Ans [6,7,8]


/*Step-by-step:

Iteration 1

pop() → removes 8

unshift(8) → inserts 8 at start

Array → [8, 1, 2, 3, 4, 5, 6, 7]

Iteration 2

pop() → removes 7

unshift(7) → inserts 7 at start

Array → [7, 8, 1, 2, 3, 4, 5, 6]

Iteration 3

pop() → removes 6

unshift(6) → inserts 6 at start

Array → [6, 7, 8, 1, 2, 3, 4, 5]

✅ Final Result after Steps = 3:

[6, 7, 8, 1, 2, 3, 4, 5]


So yes, it mutates the original array and rotates it to the right.*/





// Let's see how we can divide teh Array into Chuncks 
let Arr71=[1,2,3,4,5,6,7];
let CAns=(Arr,CSize)=>
{
let CArr=[];
for(let i=0;i<Arr.length;i+=CSize) CArr.push(Arr.slice(i,i+CSize));
return CArr;
}
console.log("Chuncks Ans: ",CAns(Arr71,3));
// Ans -> Chuncks Ans:  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]
// So her thing is simple we are just taking the substring of an Array , and we have given the how much len chuncks we wnwt to 
// we are traversing the array, our for loop just taking the iteration in chuncks (like for Size=1 0to 2) i.e part of Increment 
// we are just slice the from i to i+Size (i.e o to 2)=> [1,2]
// And below splice is just deletdting the elements of chunck and adding into teh Ans[] and for traversing we are using the while , 1st chunck is already been deleted from array now to remining array for 2nd and futhere part
// 1st with slice is iterating with the for loop and size of Chunck , but 2nd Splice directly deleting and checking till len with the while 


// Let's see with the splice 
let Arr72=[1,2,3,4,5,67,8,9,0,5,1];
const CFun=(Arr,Size)=>{
  let Ans=[]
  while(Arr.length>0) Ans.push(Arr.splice(0,Size));
  return Ans;
}
console.log("Cunks Ans with the Splice ",CFun(Arr72,2))
// Ans -> Cunks Ans with the Splice  [ [ 1, 2 ], [ 3, 4 ], [ 5, 67 ], [ 8, 9 ], [ 0, 5 ], [ 1 ] ]


// let's see with the reduce now then 
let Arr73=[1,2,3,4,5,6,7,7,8,9];
const CRFun=(Arr,Size)=>{
  const CAns=Arr.reduce((Ans,Val,i)=>{
    if(i%Size===0) Ans.push([]) ;
    Ans[Ans.length-1].push(Val);
    return Ans;
  },[])
  return CAns;
}
console.log("Chunks with the Reduce: ",CRFun(Arr73,3));
// So here we have break the array into the chunks of the data, for that we are using the reduce here and reduce is lo giving the index just like the map, and if i%Size===0 we are creating th enew arry into the array, like if 0%2===0 (0)  creating new artry 1%2===0 (not 0) not creating the new array, if not creating the array then we are pushing val into the array 
// And her is important thing we are pushing the val into the len-1 bcoz it is the nested arrya and we want to push the val into the innere array that is teh reaon the reason we are doing it so and returning with reduce , well reduce does return each time 










// 
// 
// 
// 
// 
// let's check sometings about throry Questions
// Q1. let's see how we chack if the given Array is Array or not 
const Arrt1=[1,2,3,545,6]
const ObjT1={1:1,2:2}
console.log("Array.isArray(Arrt1): ",Array.isArray(Arrt1))
console.log("Array.isArray(ObjT1): ",Array.isArray(ObjT1))
console.log("Arrt1 instanceof Array: ",Arrt1 instanceof Array)