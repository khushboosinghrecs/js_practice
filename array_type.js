const n = 5;
let arr = new Array(n);
console.log(arr)

const num = 5;
let arr2= new Array(n).fill(0);
console.log(arr2);

const n1 = 5;
let arr3 = Array.from({length: n},(_, index)=> index +1);
console.log(arr3)


const n3 = 5;
const arr4 = [...Array(n)].map((_, index) => index +1);