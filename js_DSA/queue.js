class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null; // or throw an error
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  // Example usage:
  const queue = new Queue();
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log("Front of the queue:", queue.front()); // Output: 1
  console.log("Size of the queue:", queue.size());   // Output: 3
  
  console.log("Dequeue:", queue.dequeue());          // Output: 1
  
  console.log("Size of the queue after dequeue:", queue.size()); // Output: 2
  