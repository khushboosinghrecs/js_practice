function removeduplicate(arr) {
  return [...new Set(arr)].sort((a, b) => b - a);
}

function removeDuplicate(arr) {
  let seen = {};
  let result = [];

  for (let ele of arr) {
    if (!seen[ele]) {
      result.push(ele);
      seen[ele] = true;
    }
  }
}

console.log(removeduplicate([7, 7, 4, 4, 3, 2, 1, 1, 8]));
