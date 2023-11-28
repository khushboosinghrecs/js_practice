function removeKdigits(num, k) {
    const stack = [];

    for (let digit of num) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    // Handle the case where we still have remaining k to remove
    while (k > 0) {
        stack.pop();
        k--;
    }

    // Remove leading zeros
    while (stack.length > 0 && stack[0] === '0') {
        stack.shift();
    }

    // If the result is empty, return '0'
    return stack.length === 0 ? '0' : stack.join('');
}

// Example usage:
console.log(removeKdigits("1432219", 3)); // Output: "1219"
console.log(removeKdigits("10200", 1));   // Output: "200"
console.log(removeKdigits("10", 2));       // Output: "0"
