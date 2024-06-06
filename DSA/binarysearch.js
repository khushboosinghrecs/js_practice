function binarysearch(arr, k) {
  let minIndex = 0;
  let maxIndex = 0;

  while (minIndex < maxIndex) {
    let mid = Math.floor((min + maxIndex) / 2);
    if (arr[mid] < k) {
      min = mid + 1;
    } else if (arr[mid] > k) {
      maxIndex = mid - 1;
    }
    return mid;
  }
  return -1;
}
