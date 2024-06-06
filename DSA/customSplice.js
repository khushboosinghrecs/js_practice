Array.prototype.customSplice = function (start, deleteCount, ...items) {
  // Validate start index
  if (start < 0) {
    start = Math.max(this.length + start, 0);
  } else {
    start = Math.min(start, this.length);
  }

  // Calculate number of elements to delete
  let count = Math.min(deleteCount, this.length - start);

  // Copy elements to be removed
  const removed = this.slice(start, start + count);

  // Shift elements to fill the gap left by removal
  const len = this.length - count + items.length;
  for (let i = start + count; i < len; i++) {
    const item = items[i - start - count];
    this[i] = item;
  }

  // Remove elements
  this.length = len;

  return removed;
};

// Example usage
let array = [1, 2, 3, 4, 5];
let removed = array.customSplice(2, 2, "a", "b");
console.log(array); // Output: [1, 2, 'a', 'b', 5]
console.log(removed); // Output: [3, 4]
