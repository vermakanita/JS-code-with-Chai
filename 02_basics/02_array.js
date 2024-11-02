// merge two array 
const a=[1,2,3,4];
const b=[5,6,7,8];
// const c=[a+b];
// console.log(c);
// a.push(b);
// console.log(a)

// const d=a.concat(b)
// console.log(d)

// const e=[...a,...b];
// console.log(e);

const k=[1,2,3[4,5,6],7,[6,7[4,5]]]
const l=k.flat(Infinity);
console.log(l)


// console.log(Array.isArray("h"))// check aliment in 
console.log(Array.from("kanita"))// create an array
console.log(Array.from({name:"kanita"}))//interesting case of array

let score=100;
let score2=200;
let score3=300;
console.log(Array.of(score,score2,score3));
