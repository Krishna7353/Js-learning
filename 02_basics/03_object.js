// Singleton
//jsuser.create;


//Object literals 
const mysym =Symbol("key1");
const jsuser= {
    name : "krishna",
    "Fullname":"krishnaRathod",
    [mysym]: "mykey1",
    age:21,
    email:"krishna16rathod@gmail.com",
    isLoggedIn:false,
    lastLoginDays:['Monday','Tuesday','Thursday']
}
// console.log(jsuser.age);
// console.log(jsuser["Fullname"]);
// console.log(jsuser["lastLoginDays"]);


//console.log(jsuser[mysym]);

//console.log(jsuser);
jsuser.email="krishnarathod@chatgpt.com";
console.log(jsuser);

// Object.freeze(jsuser);

jsuser.email="krishnarathod@microsoft.com";
// console.log(jsuser); no changes


jsuser.greeting=function(){
    console.log("Hello js User");
}
jsuser.greetingTwo=function(){
    console.log(`Hello js User ${this.name}`);
}

jsuser.greeting();
jsuser.greetingTwo();



