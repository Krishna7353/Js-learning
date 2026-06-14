const accountId=12345;
let email = "krishnarathod@.com";
var accountPassword="098765";
accountCity="Jaipur"
let accountState;


// accountId=98; re-initializtion will not done here in const 
email="google.com"; // re-initializtion will  be  done here in let but Re-declaration will notdone 
accountPassword="1234"; //re-initializtion  and  Re-declaration  will be done 
accountCity="Bengaluru"

console.table([accountId,accountPassword,email,accountCity,accountState]);

//  console.log(city);

/*
 var prefered Not to use 
 because of block Scop and Functional Scop
*/ 
