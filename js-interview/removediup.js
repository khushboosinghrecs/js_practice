function removeDuplicates(arr) {
    return [...new Set(arr)]; // Convert the array to a Set and then back to an array
}

// Example
const arrayWithDuplicates = [1, 2, 3, 1, 4, 2, 5, 3, 6];
const uniqueArray = removeDuplicates(arrayWithDuplicates);

console.log(uniqueArray);  // Output: [1, 2, 3, 4, 5, 6]


function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Example
const arrayWithDuplicatesg = [1, 2, 3, 1, 4, 2, 5, 3, 6];
const uniqueArrayg = removeDuplicates(arrayWithDuplicatesg);

console.log(uniqueArrayg);  // Output: [1, 2, 3, 4, 5, 6]

function removeDuplicates(arr) {
    return arr.reduce((unique, item) => {
        if (!unique.includes(item)) {
            unique.push(item); // Add to the unique array if it's not already there
        }
        return unique; // Return the unique array for the next iteration
    }, []);
}

// Example
const arrayWithDuplicates = [1, 2, 3, 1, 4, 2, 5, 3, 6];
const uniqueArray = removeDuplicates(arrayWithDuplicates);

console.log(uniqueArray);  // Output: [1, 2, 3, 4, 5, 6]

const arr = [1, 2, 3, 4, 5];
const indexToRemove = 2; // Index of the element to remove

arr.splice(indexToRemove, 1); // Remove one element at index 2
console.log(arr); // Output: [1, 2, 4, 5]

const arr = [1, 2, 3, 2, 4, 5];
const valueToRemove = 2; // Value to remove

const newArr = arr.filter(item => item !== valueToRemove); // Keep all elements that are not 2
console.log(newArr); // Output: [1, 3, 4, 5]

const arr = [1, 2, 3, 4, 5];
const isEven = (n) => n % 2 === 0; // Condition to check if a number is even

const newArr = arr.filter(item => !isEven(item)); // Keep only odd numbers
console.log(newArr); // Output: [1, 3, 5]


