const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Find the first even number
const evenNumber = numbers.find((num) => num % 2 === 0);
console.log(evenNumber); // Output: 2

// Find the index of the first even number
const evenNumberIndex = numbers.findIndex((num) => num % 2 === 0);
console.log(evenNumberIndex); // Output: 1
