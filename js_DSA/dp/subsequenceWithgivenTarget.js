/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var subsequencesWithSum = function(nums, target) {
    const memo = {};

    function findSubsequences(start, currentSum, path) {
        const key = `${start}-${currentSum}-${path.join(',')}`;
        if (key in memo) {
            return memo[key];
        }

        // Base case: If we have reached the end of the array
        if (start === nums.length) {
            if (currentSum === target && path.length > 0) {
                return [path.slice()]; // Include the current path
            } else {
                return [];
            }
        }

        const result = [];

        // Include the current element
        result.push(...findSubsequences(start + 1, currentSum + nums[start], [...path, nums[start]]));

        // Exclude the current element
        result.push(...findSubsequences(start + 1, currentSum, path));

        memo[key] = result;
        return result;
    }

    return findSubsequences(0, 0, []);
};

// Example usage:
const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
console.log(subsequencesWithSum(nums, target));
