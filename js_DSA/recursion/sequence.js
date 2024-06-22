//subsequence => contigous or non contigous sequence which follow some order

// arr = [3, 1, 2]
// 3, 1, 2, 31, 12, 32, 312;

function printSubsequences(str) {
    let result = [];
    generateSubsequences(str, "", 0, result);
    return result;
}

function generateSubsequences(str, current, index, result) {
    if (index === str.length) {
        result.push(current);
        return;
    }
    generateSubsequences(str, current + str[index], index + 1, result);
    generateSubsequences(str, current, index + 1, result);
}

let subsequences = printSubsequences('abc');
console.log(subsequences);

function printSubsequencesArr(arr){
    let result =[];
    generateSubsequencesArr(arr, [], 0, result)
    return result;
}

function generateSubsequencesArr(arr, current, index, result){

    if(index === arr.length){
        result.push([...current])
        return;
    }
    current.push(arr[index]);
    generateSubsequencesArr(arr, current, index+1, result);
    current.pop();
    generateSubsequencesArr(arr, current, index+1, result);
}

let array = [1, 2, 3];
let subsequencesArr = printSubsequencesArr(array);
console.log(subsequencesArr);


