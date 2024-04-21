let arr = ['a', 'd', 'c', 'f', 'b', 'i'];
let arr2 = [5, 4, 3, 8, 2, 1];
let arr3 = [9, 4, 4, 'a', '2', '1'];

let arr4 = [{ a: 1 }, { e: 2 }, { d: 3 }, { b: 4 }]

console.log(arr.sort());
console.log(arr2.sort());
console.log(arr3.sort());
console.log(arr4.sort());
// function sortbykey(arr4, k){

// return arr4.sort((a, b)=>{
//     console.log(a, b, 'jjooj');
//     return a[k]-b[k];
// })
// }

// console.log(sortbykey(arr4, 'a'));

function sortByKey(arr, key) {
    const newArr = [...arr];
    newArr.sort((a, b) => {
        const valA = a[key];
        const valB = b[key];
        console.log(a, b, 'joiiiiio');
        if (valA < valB) {
            return -1;
        } else if (valA > valB) {
            return 1;
        } else {
            return 0;
        }
    });

    return newArr;
}

// Test example
const people = [
    { name: "Alice", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "Boby", age: 35 }
];

// Sort by age
const sortedByAge = sortByKey(people, "age");
const sortName= sortByKey(people, 'name');
console.log(sortedByAge);
console.log(sortName);
// Output: [
//   { name: "Bob", age: 25 },
//   { name: "Alice", age: 30 },
//   { name: "Charlie", age: 35 }
// ]
