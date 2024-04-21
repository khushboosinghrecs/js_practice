function meergeSortedArray(arr1, arr2){
    return [...arr1, ...arr2].sort((a, b)=> a-b);
}

console.log(meergeSortedArray([1, 4, 3, 6], [8, 2, 1,2]));