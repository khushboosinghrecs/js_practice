function findMinMax(arr){
    let min = Math.min(...arr);
    let max= Math.max(...arr);
    return [min, max];
}

let arr=findMinMax([1, 7, 8, 9, 2])
console.log(arr[0] , arr[1]);

function getUniqueElemnts(arr){
   console.log( new Set(arr));
    return Array.from(new Set(arr));
}

console.log(getUniqueElemnts([1, 7, 8, 9, 2, 5, 5, 5, 5]));

