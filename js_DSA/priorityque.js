const arr = [10, 22, 4, 5, 21, 8, 9, 59];
const numbersMinQueue = new MinPriorityQueue();
const numbersMaxQueue = new MaxPriorityQueue();

for (const num of arr) {
  numbersMinQueue.enqueue(num);
  numbersMaxQueue.enqueue(num);
}

console.log(numbersMinQueue.toArray());