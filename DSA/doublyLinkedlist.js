class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  deleteNode(data) {
    let curr = this.head;
    while (curr!==null) {
      if (curr.data === data) {
        if (curr === this.head) {
          this.head = curr.next;
          if (this.head) {
            this.head.prev = null;
          }
        } else if (curr === this.tail) {
            this.tail = curr.prev;
            this.tail.next = null;
        }
        else {
            curr.prev.next = curr.next;
            curr.next.prev = curr.prev;
          }
      }
        curr = curr.next;
    }
      
      display(){
          let curr = this.head;
          while (curr! == null) {
              console.log(curr.data);
              curr = curr.next;
          }
      }
  }
}
