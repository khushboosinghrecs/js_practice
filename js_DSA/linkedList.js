// Node definition for a linked list
class ListNode {
    constructor(value) {
      this.value = value; // Value of the node
      this.next = null;  // Reference to the next node
    }
  }
  
  // Singly Linked List definition
  class LinkedList {
    constructor() {
      this.head = null; // First node in the list
    }
  
    // Add a node to the end of the list
    append(value) {
      const newNode = new ListNode(value);
      if (!this.head) {
        // If the list is empty, the new node becomes the head
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next; // Traverse to the end
        }
        current.next = newNode; // Append the new node
      }
    }
  
    // Remove a node with a given value from the list
    remove(value) {
      if (!this.head) {
        return; // List is empty, nothing to remove
      }
  
      if (this.head.value === value) {
        // If the head node is the one to be removed
        this.head = this.head.next; // Shift the head
        return;
      }
  
      let current = this.head;
      while (current.next && current.next.value !== value) {
        current = current.next; // Traverse the list
      }
  
      if (current.next) {
        // If the node to be removed is found, unlink it
        current.next = current.next.next;
      }
    }
  
    // Convert the list to a string for display
    toString() {
      const values = [];
      let current = this.head;
      while (current) {
        values.push(current.value);
        current = current.next;
      }
      return values.join(" -> ");
    }
  }
  
  // Example usage
  const list = new LinkedList();
  list.append("A");  // Append "A"
  list.append("B");  // Append "B"
  list.append("C");  // Append "C"
  console.log(list.toString());  // Output: "A -> B -> C"
  
  list.remove("B");  // Remove "B"
  console.log(list.toString());  // Output: "A -> C"
  