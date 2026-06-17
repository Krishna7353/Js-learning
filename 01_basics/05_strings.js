const name = "Krishna";
const repoCount =50;



// console.log( name+ repoCount+ " Value");

// `` -> Backtics 
// ${}-> String interputaion -- getting value of the varible 
// console.log(`Hello my is ${name} and my repocount ${repoCount}`);

const gameName = new String("Krisha");
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("K"));



const Substring = gameName.substring(0,4);// last index not included 
// console.log(Substring);

const cutThePart = gameName.slice(-4,4);  // last index not included  and starting index will  be start feom the reverse form 
// console.log(cutThePart);


let checkTrimMethod = "      krishna      "
// console.log(checkTrimMethod);

let findAnswerforTrim="      krishna      ";
// console.log(findAnswerforTrim.trim());



let url="https://friendly-space-memory-v6p974xvjxr42wv9x.github.dev/";
console.log(url.replace(".","...")); // used for replceses the value ;

console.log(url.includes("9")); /// used for check the value 


// split()
let checksplit= "I Love Coding"
console.log(checksplit.split(` `));









