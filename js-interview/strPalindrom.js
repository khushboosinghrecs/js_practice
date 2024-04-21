function palindrorm(str){
// for(let i=0;i<str.length/2;i++){
//     if(str[i]!==str[(str.length-1 )-i]){
//         console.log('not palindrom')
//         return;
//     }
// }

console.log(str.split('p'), 'kp');
console.log(str.split(' ').reverse(), 'opopop');
console.log( (str.split("").reverse().join('')) , ' rrrrr')
console.log('palindrom');
}

palindrorm('uiui')
palindrorm('pooiioolllllllp')
palindrorm('oppo');
palindrorm('opo')

let str='khushboo';
reverseStr= str.split('').reverse().join('');

function reversearr(arr){
    for(let i=0; i<arr.length/2; i++){
        let a= arr[i];
        let b= arr[arr.length-1 - i];
        arr[i]=b ;
        arr[arr.length-1 -i ] =a; 
    }
    return arr;

}

let arr = [89, 8, 6, 5, 4];
// let arr ='uijhkokoo';
console.log(arr);
console.log(reversearr(arr));

