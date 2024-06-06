class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  buildTreeFromArrau(arr) {
    if (!arr.length) return null;

    this.root = new Node(arr[0]);
    const queue = [this.root];
    let i = 1;
    while (i < arr.length) {
      let curr = queue.shift();

      if (i < arr.length) {
        curr.left = new Node(arr[i]);
        queue.push(curr.left);
        i++;
      }

      if (i < arr.length) {
        curr.right = new Node(arr[i]);
        queue.push(curr.right);
        i++;
      }
    }
  }
  // In-order traversal (left, root, right)
  // Pre-order traversal (root, left, right)

  // Post-order traversal (left, right, root)
  inorder(node = this.root) {
    if (node === null) return null;

    this.inorder(node.left);
    console.log(node.data);
    this.inorder(node.right);
  }
}
