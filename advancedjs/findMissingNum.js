function findMissingnum(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = arr.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}
