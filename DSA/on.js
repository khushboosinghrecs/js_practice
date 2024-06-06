const array = [1, 2, 3, 4, 5];

console.time("push");
array.push(6);
console.timeEnd("push"); // takes a very small amount of time
console.log(array);
array.pop();
console.log(array);

console.time("unshift");
array.unshift(0);
console.timeEnd("unshift"); // takes a longer amount of time

console.log(array);
array.shift();
console.log(array);
