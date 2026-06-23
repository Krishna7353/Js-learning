// const tinderUser=  new Object(); // Singleton object 

const tinderUser ={};
//console.log(tinderUser); // non-singleton object

tinderUser.id="abcd@123";
tinderUser.name="krishn";
tinderUser.isLoggedIn=false;
// console.log(tinderUser);

const regularUser={
    email:"krishna16rathod@gmail.com",
    fullname:{
        userfullname:{
            fristname:"krishna",
            lastname:"rathod"
        }
    }
}

// console.log(regularUser?.fullname.userfullname.fristname);



const obj1={1:"a",2:"b",3:"c",4:"d"}
const obj2={1:"a",2:"b",3:"c",4:"d"}

//const obj3={obj1,obj2}
//const   obj3 = Object.assign(obj1,obj2);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj3 ={...obj1,...obj2} //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//console.log(obj3);



console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('id'));



