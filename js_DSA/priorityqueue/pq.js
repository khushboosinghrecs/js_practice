const { MinPriorityQueue, MaxPriorityQueue } = require("@datastructures-js/priority-queue");

const arr = [10, 22, 4, 5, 21, 8, 9, 59];

const numbersMinQueue = new MinPriorityQueue();
const numberMaxQueue = new MaxPriorityQueue();

for (const num of arr) {
    numberMaxQueue.enqueue(num);
    numbersMinQueue.enqueue(num);
}

console.log(numberMaxQueue.front()); // Output: { element: 59, priority: 59 }
console.log(numbersMinQueue.front()); // Output: { element: 4, priority: 4 }
console.log(numbersMinQueue.dequeue()); // Output: { element: 4, priority: 4 }
console.log(numbersMinQueue.dequeue()); // Output: { element: 5, priority: 5 }
console.log(numberMaxQueue.toArray()); // Output: [59, 22, 21, 10, 9, 8, 5]

const heightArr = [
    { name: 'John', height: 170 },
    { name: 'Jane', height: 160 },
    { name: 'Bob', height: 150 },
    { name: 'Mary', height: 180 }
];

const heightQueue = new MinPriorityQueue({
    priority: (person) => person.height
});

for (const person of heightArr) {
    heightQueue.enqueue(person);
}

console.log(heightQueue.front()); // Output: { element: { name: 'Bob', height: 150 }, priority: 150 }
console.log(heightQueue.dequeue()); // Output: { element: { name: 'Bob', height: 150 }, priority: 150 }
console.log(heightQueue.dequeue()); // Output: { element: { name: 'Jane', height: 160 }, priority: 160 }
console.log(heightQueue.toArray()); // Output: [{ element: { name: 'John', height: 170 }, priority: 170 }, { element: { name: 'Mary', height: 180 }, priority: 180 }]
