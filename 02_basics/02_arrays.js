const marvel_heros=["thror","ironman","Spiderman"];
const dc_heros=["Superman","flash","batman"];
// marvel_heros.push(dc_heros);

// console.log(marvel_heros[1]);
// console.log(marvel_heros[3][2]);


const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);//[ 'thror', 'ironman', 'Spiderman', 'Superman', 'flash', 'batman' ]


const all_new_heros= [...marvel_heros,...dc_heros];
console.log(all_new_heros);//[ 'thror', 'ironman', 'Spiderman', 'Superman', 'flash', 'batman' ]

const anotherarray=[1,2,3,[4,5,6],[7,8,[9,10]]];
// console.log(anotherarray.flat(Infinity));
//[
 // 1, 2, 3, 4,  5,
 // 6, 7, 8, 9, 10
//]

// console.log( Array.isArray("Krishna"));
// console.log(Array.from("Krishna"));
// console.log(Array.of("krishna"));


console.log(Array.from({name:"Krishna"}))// intersting


const score1=100;
const score2=200;
const score3=300;

const all_score= Array.of(`${score1},${score2},${score3}`);

console.log(all_score);


