// primitive 

// types : String,number,boolean,null,undefined,symbol
// JS-> Dynamically typed
  const score =100;
  const scoreValue=100.5;

  const isLoggedin=false;
  const outSidewheather = null;
  let userEmail;

  const id = Symbol("123");
  const anotherId= Symbol("123");
//   console.table([id,anotherId])
//   console.log(id===anotherId);
  
// const bigNumbers = 9123456789099763135653626n; --> Example for bigInt




// Non_primitive--> refference Type
// Arrays ,  Object , Function


const heros =["Shaktiman","xyz","yxz"];

//{}-> anything which is wrriten inside the currly braces will called as Oject 

let myObj={
    name :"Krishna",
    age:21
}
 
let func=function(){
    console.log("Hello World ");
    
}
// console.log(func);

console.log(typeof func);




