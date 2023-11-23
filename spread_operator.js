const abc= ['a', 'b', 'c', 'd', 'e']
console.log(abc); //(5) ['a', 'b', 'c', 'd', 'e']
console.log([...abc], 'hjhh');
// (5) ['a', 'b', 'c', 'd', 'e'] 'hjhh'
console.log(...abc, 'jjjj');
// a b c d e
let p = "jjj"
let a =[...abc].map(e=> `${e} / ${p}`);
console.log(abc, a)

// spread operator

console.log(..."khushi");
//  k h u s h i

console.log({..."khushi"});
// {0: 'k', 1: 'h', 2: 'u', 3: 's', 4: 'h', 5: 'i'}

console.log([..."khushi"]);
//  (6) ['k', 'h', 'u', 's', 'h', 'i']

const user = {name: "Lydia", age : 21, fullName: "K Singh", addr:{
    state: 'up',
    district: 'vns'
}};
const admin = {admin: true, ...user};
console.log(admin);

const u ={a: "a",
          b: "b",
          c: "c"}
const v= {a: 'x', ...u}
console.log(u);
// VM225:5 {a: 'a', b: 'b', c: 'c'}