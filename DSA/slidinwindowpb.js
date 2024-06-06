function slidingWindowPb(arr, k) {
  let currsum = 0;
  let maxsum = -Infinity;

  for (let i = 0; i < k; i++) {
    currsum = currsum + arr[i];
  }

  maxsum = currsum;
  for (let i = k; i < arr.length; i++) {
    currsum = currsum - arr[i - k] + arr[i];
    maxsum = Math.max(maxsum, currsum);
  }
  return maxsum;
}
