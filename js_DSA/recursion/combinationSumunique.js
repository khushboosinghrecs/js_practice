function findCombinations(arr, target) {
    let results = [];
    
    arr.sort((a, b) => a - b);
    
    function backtrack(start, currentCombination, currentSum) {
        if (currentSum === target) {
            results.push([...currentCombination]);
            return;
        }
        if (currentSum > target) {
            return;
        }
        
        for (let i = start; i < arr.length; i++) {
            if (i > start && arr[i] === arr[i - 1]) continue;
            currentCombination.push(arr[i]);
            backtrack(i + 1, currentCombination, currentSum + arr[i]);
            currentCombination.pop();
        }
    }
    
    backtrack(0, [], 0);
    return results;
}
