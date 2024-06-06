function maxSumSubarray(arr) {
  let start = 0;

  let maxSum = -Infinity;
  let currsum = 0;
  for (let i = 0; i < arr.length; i++) {
    currsum = currsum + arr[i];
    maxSum = Math.max(maxSum, currsum);
    if (currsum < 0) {
      currsum = 0;
    }
  }
  return maxSum;
}

console.log(maxSumSubarray([1, 2, 3])); // Output: 6
console.log(maxSumSubarray([-1, -2, -3])); // Output: -1
console.log(maxSumSubarray([-1, 2, -3, 4])); // Output: 4
console.log(maxSumSubarray([1, -2, 3, 10, -4, 7, 2, -5])); // Output: 18
