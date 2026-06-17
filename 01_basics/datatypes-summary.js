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

console.log(typeof myObj);

//++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitve)                -> COPY Milte h 
// Heap(Non-Primitive )          -> Original value reffernce
   

let myYoutubename ="krishnarathod@google.com";
let anotherYoutubename =myYoutubename;

anotherYoutubename="krishna@google.com"

// console.log(myYoutubename); //krishnarathod@google.com
// console.log(anotherYoutubename); //krishna@google.com

let userOne= {
    namename:"krishna@12",
    upiId:"krishna@ybl"
}
console.log(userOne); //{ namename: 'krishna@12', upiId: 'krishna@ybl' }
let anotherUser=userOne;

// here anptherUser came chnage the username , upiid changes in both user ### Reffernce 
console.log(anotherUser); //{ namename: 'krishna@12', upiId: 'krishna@ybl' }

anotherUser.upiId="DummyId";
console.log(userOne);//{ namename: 'krishna@12', upiId: 'DummyId' }

console.log(anotherUser);//{ namename: 'krishna@12', upiId: 'DummyId' }


 




