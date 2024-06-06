function same(arrOne, arrTwo) {
  // ele of arr1, aree square of arr2;
  for (let k of arrOne) {
    if (!arrTwo.includes(k ** 2)) {
      return false;
    }
    arrTwo.splice(arrTwo.indexOf(ele ** 2), 1);
  }
  return true;
}

function samet(arrOne, arrTwo) {
  const frequencyOne = {};
  const frequnceyTwo = {};
  for (let k of arrOne) {
    frequencyOne[k] = (frequencyOne[k] || 0) + 1;
  }

  for (let value of arrTwo) {
    frequnceyTwo[value] = (frequnceyTwo[value] || 0) + 1;
  }

  for (let k in frequencyOne) {
    const sqrt = parseInt(k, 10) ** 2;
    const sq = k ** 2;
    console.log(k, sqrt, sq, sqrt in frequnceyTwo, "hhhhh");

    if (!sqrt in frequnceyTwo || frequnceyTwo[sqrt] !== frequencyOne[k]) {
      return false;
    }
  }
  return true;
}

// Example where the function should return true
console.log(samet([1, 2, 3], [1, 4, 9])); // true

// Example where the function should return false
console.log(samet([1, 2, 3], [1, 4, 8])); // false

// Example where there are different frequencies
console.log(samet([1, 2, 2], [1, 4, 4, 9])); // true
console.log(samet([1, 2, 2], [1, 4, 9])); // false

const frequencyTwo = {
  1: 2,
  4: 3,
  9: 1,
};

// Let's check if 16 is in frequencyTwo
const square = 2;
const result = !(square in frequencyTwo); // true, because 16 is not in frequencyTwo

console.log(result); // Outputs: true
