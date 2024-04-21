function findSum(arr) {
    return arr.reduce((sum, num) => {
        sum += num; 
        return sum; 
    }, 0); 
}

console.log(findSum([8, 7, 6, 5, 4])); // Output: 30
