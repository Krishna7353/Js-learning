//Dates
let mydate = new Date();
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
//console.log(typeof mydate);


// let createmydate= new Date(2026,7,12);
// console.log(createmydate.toDateString());
// let mycreatedate = new Date("01-12-2003") 
let mycreatedate = new Date(2023,0,23,5,5,2) ;
// console.log(mycreatedate.toLocaleString());

let mytimestamp= Date.now();
// console.log(mycreatedate.getTime());

console.log(Math.floor(Date.now()/1000));


const newDate= new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());


// `${newDate.getDay()  } and the time`


// newDate.toLocaleString('default',{ weekday:'long' , hour:"2-digit",month:"long"})
// console.log(newDate);


