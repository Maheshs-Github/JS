// for (var i=0;i<3;i++)
// {
//   setTimeout(()=>console.log("i time: ",i),1000)
//   console.log("i: ",i);
// }
// Ans
// i:  0
// i:  1
// i:  2
// i time:  3
// i time:  3
// i time:  3
// So here basically as i is var fun scoped , it will have the final value of the iteration (for loop) also why are we getting the  alos bcoz as u know the setTimeOut callback will be shedule after whole code runs by event loop even the timer is 0 sec (async opn)
// for (let i=0;i<3;i++)
// {
//   setTimeout(()=>console.log("i time: ",i),1000)
//   console.log("i: ",i);
// }
// Ans 
// i:  0
// i:  1
// i:  2
// i time:  0
// i time:  1
// i time:  2
// But with the let it will have to take value from the each iteration it can't have the values later that is how closure works with the let 




// var a=10;
// console.log("a outside: ",a)
// const ab=function(){
// console.log("a in: ",a)
// var a=20;
// console.log("a in2: ",a)
// }
// ab();
// Ans
// a outside:  10
// a in:  undefined
// a in2:  20
// Here i thought the ans will be 10, as globally we have decalred with the 10 , so even in a function , we have anothere value of it , it will be take that first , but in a function a is scoped with the var so it will take function value first 
// And as we are clg before intializing it will have the hoisted vakue that is undefined 

// let a=10;
// console.log("a outside: ",a)
// const ab=function(){
// console.log("a in: ",a)
// let a=20;
// console.log("a in2: ",a)
// }
// ab();
// Ans
// console.log("a in: ",a)
//                      ^

// ReferenceError: Cannot access 'a' before initialization
// Sure it will give teh Refrence Error as the let scoped variable is in a TDZ before intializing statement that is why refrence error


// var a=10;
// console.log("a outside: ",a)
// const ab=function(){
// console.log("a in: ",a)
// a=20;
// console.log("a in2: ",a)
// }
// ab();
// Ans 
// a outside:  10
// a in:  10
// a in2:  20
// Now we are just reassignng the value , we have declared it gloabaaly not in a function so global value is used no need to 



// for(var i=0;i<3;i++){
//   setTimeout(()=>console.log("i: ",i),0)
// }
// Ans 
// i:  3
// i:  3
// i:  3
// Got the ans but had one question that our conditions say we are not going to the 3 , then how is asign to the 3 
//  Ans is that as we now how for loops works (intialization,condition,execution body,termination)
// for the i=2, 2<3, body ,2++ i.e 3, for i=3,i<3 wrong , but here our i is assign to the 3 , doesn't matter we execute the body as we are of the fun scope, and i is set to the 3 





// Let's see about this keyword use 

// const obj={
//   Name:"Mahesh",
//   Show(){
//     setTimeout(function(){console.log(this.Name)},1000)
//   }
// }
// obj.Show()
// Ans 
// undefined
// It gives undefined bcoz here our Show have the setTimeout which gives the callback which takes the value of this but Show-> setTimeout-> callback , here callback fun loses this of the object, so it point to global that is why window.name=undefined 

// const obj={
//   Name:"Mahesh",
//   Show(){
//     setTimeout(()=>console.log(this.Name),1000)
//   }
// }
// obj.Show()
// Ans
// Mahesh
// It gives the Mahesh, why is that , in a first if u have noticed that the callback of setTimeOut is normal fun but here Arrow fun last we lost the value of the object 
// but here Arrow fun does not have it's own , it inherites from the parent that is why we bale to keep up 
// value Mahesh 


// const obj={
//   Name:"Mahesh",
// show(){
//     console.log(this.Name)
//   }
// }
// obj.show();
// Mahesh
// const fn=obj.show;
// fn()
// ans 
// undefined
// so here we basically don't call the obj method (how obj.show() gives the Mahesh) rathere we just take the refrence then we called but we call the show() 
// but loss the obj scope for this 
// that is why undefined 
// Aslos one more thing that is 
// const fn=obj.show;
// fn()
// At 1st we just store the refrence of it then in 2nd we called it , else we could have did like the obj.show()

// Well we can use the Arrow fun then that prolem can be solved 
// const obj={
//   Name:"Mahesh",
// show:()=>
//     console.log(this.Name)
// }
// const fn=obj.show;
// fn()
// Ans
// undefined
// well u could be a right, but our dear Arrow function takes the value of this from parent 
// here parnet is a global so we got messed up here too



const obj={
  Name:"Mahesh",
show(){
  const Ans=()=>
    console.log(this.Name)
  Ans()
}
}
obj.show();
// Ans 
// Mahesh
