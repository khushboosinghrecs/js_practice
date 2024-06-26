function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const merge = [];
  let i = 0;
  let j = 0;
  while (i <= left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merge.push(arr[i]);
      i++;
    } else {
      merge.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    merge.push(left[i]);
  }
  while (j < right.length) {
    merge.push(right[j]);
  }

  return merge;
}
