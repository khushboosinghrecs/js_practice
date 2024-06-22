function combinationSum(candidates, target){
    let result = [];
    findCombinations(candidates, target, 0, [], result);
    return result;
}

function findCombinations(candidates, target, start, current, result){
    if(target <0){
        return;
    }
    if(target ===0){
        result.push([...current]);
        return;
    }

    for(let i=start; i<candidates.length; i++){
        current.push(candidates[i]);
        findCombinations(candidates, target-candidates[i], i, current, result);
        current.pop();
    }
}

let candidates = [2, 3, 6, 7];
let target = 7;
console.log(combinationSum(candidates, target)); 