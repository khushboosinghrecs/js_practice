// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insertionAtLast(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currNode = this.head;
      while (currNode.next != null) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
    }
  }

  insertionAtKthPostion(data, k) {
    const newNode = new Node(data);
    if (k <= 0) {
      return;
    } else if (k === 1 && this.head === null) {
      this.head = newNode;
    } else if (k === 1 && this.head !== null) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currNode = this.head;
      k = k - 1;
      while (k > 0) {
        currNode = currNode.next;
        k--;
      }
      newNode.next = currNode.next;
      currNode.next = newNode;
    }
  }
  deletioinAtLast() {
    if (this.head === null) {
      return;
    } else if (this.head.next === null) {
      this.head = null;
      return;
    } else {
      let currNode = this.head;
      let nextNode = currNode.next;
      while (nextNode.next !== null) {
        currNode = currNode.next;
        nextNode = nextNode.next;
      }
      currNode.next = null;
    }
  }

  deletionAtKthPosition(k) {
    if (k <= 0) return;

    if (k === 1) {
      this.head = this.head.next;
      return;
    } else {
      let currNode = this.head;
      let prev = null;
      k = k - 1;
      while (k) {
        prev = currNode;
        currNode = currNode.next;
        k--;
      }
      prev.next = currNode.next;
    }
  }

  display() {
    if (this.head === null) {
      console.log("Linked List is empty");

      return;
    }
    let currNode = this.head;
    while (currNode !== null) {
      console.log(currNode.data + "  data ");
      currNode = currNode.next;
    }
  }
}

const linkedList = new SinglyLinkedList();
linkedList.insertionAtLast(1);
linkedList.insertionAtLast(2);
linkedList.insertionAtLast(3);
linkedList.insertionAtLast(4);
linkedList.deletioinAtLast();
linkedList.display();
console.log("----------------");
linkedList.insertionAtKthPostion(5, 2);
linkedList.insertionAtKthPostion(6, 1);
linkedList.display();
console.log("--------------");
linkedList.deletionAtKthPosition(3);
linkedList.display();
console.log("--------------");
linkedList.deletionAtKthPosition(1);
linkedList.display();
console.log("Try programiz.pro");
