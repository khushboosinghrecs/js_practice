var subsetsWithDup = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b); // Sort the array to handle duplicates
    generateSubsets(nums, 0, [], res);
    return res;
};

function generateSubsets(arr, start, current, res) {
    res.push([...current]); // Add the current subset to the result
    for(let i = start; i < arr.length; i++) {
        if(i > start && arr[i] === arr[i - 1]) continue; // Skip duplicates
        current.push(arr[i]); // Include arr[i] in the current subset
        generateSubsets(arr, i + 1, current, res); // Recurse with the next index
        current.pop(); // Backtrack
    }
}



// subsetsWithDup([1, 2, 2])
//   |
//   |-- generateSubsets([1, 2, 2], 0, [], [])
//        |
//        |-- [] (Add current subset to result)
//        |
//        |-- i=0
//        |   |
//        |   |-- current = [1]
//        |   |-- generateSubsets([1, 2, 2], 1, [1], [...])
//        |        |
//        |        |-- [1]
//        |        |
//        |        |-- i=1
//        |        |   |
//        |        |   |-- current = [1, 2]
//        |        |   |-- generateSubsets([1, 2, 2], 2, [1, 2], [...])
//        |        |        |
//        |        |        |-- [1, 2]
//        |        |        |
//        |        |        |-- i=2
//        |        |        |   |
//        |        |        |   |-- current = [1, 2, 2]
//        |        |        |   |-- generateSubsets([1, 2, 2], 3, [1, 2, 2], [...])
//        |        |        |        |
//        |        |        |        |-- [1, 2, 2]
//        |        |        |
//        |        |        |-- Backtrack (current = [1, 2])
//        |        |        
//        |        |-- Backtrack (current = [1])
//        |        |
//        |        |-- i=2 (Skip, as arr[2] == arr[1])
//        |        |
//        |        |-- Backtrack (current = [])
//        |
//        |-- i=1
//        |   |
//        |   |-- current = [2]
//        |   |-- generateSubsets([1, 2, 2], 2, [2], [...])
//        |        |
//        |        |-- [2]
//        |        |
//        |        |-- i=2
//        |        |   |
//        |        |   |-- current = [2, 2]
//        |        |   |-- generateSubsets([1, 2, 2], 3, [2, 2], [...])
//        |        |        |
//        |        |        |-- [2, 2]
//        |        |
//        |        |-- Backtrack (current = [2])
//        |
//        |-- i=2 (Skip, as arr[2] == arr[1])
//        |
//        |-- Backtrack (current = [])
