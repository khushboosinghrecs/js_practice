// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(node) {
      this.children.push(node);
    }
  
    removeChild(node) {
      this.children = this.children.filter(child => child !== node);
    }
  }
  
  class Tree {
    constructor(rootValue) {
      this.root = new TreeNode(rootValue);
    }
  
    // Depth-First Search (DFS) to find a node
    find(value, node = this.root) {
        console.log(value ,'val', node, 'hooho');
      if (node.value === value) {
        return node;
      }
      for (let child of node.children) {
        const found = this.find(value, child);
        if (found) {
          return found;
        }
      }
      return null;
    }
  
    // Breadth-First Search (BFS) to find a node
    findBFS(value) {
      const queue = [this.root];
      console.log(queue, 'hhodhoho')
      while (queue.length > 0) {
        const node = queue.shift();
            console.log(queue, 'hhodhoho')
        if (node.value === value) {
          return node;
        }
        queue.push(...node.children);
      }
      return null;
    }
  
    // Adding a node to a specific parent node
    addNode(parentValue, newValue) {
      const parentNode = this.find(parentValue);
      if (parentNode) {
        const newNode = new TreeNode(newValue);
        parentNode.addChild(newNode);
      } else {
        throw new Error('Parent node not found');
      }
    }
  
    // Removing a node
    removeNode(value) {
      const nodeToRemove = this.find(value);
      if (nodeToRemove && nodeToRemove !== this.root) {
        const parentNode = this.findParent(value);
        if (parentNode) {
          parentNode.removeChild(nodeToRemove);
        }
      } else {
        throw new Error('Node not found or is the root node');
      }
    }
  
    // Helper method to find a parent node
    findParent(value, node = this.root, parent = null) {
      if (node.value === value) {
        return parent;
      }
      for (let child of node.children) {
        const foundParent = this.findParent(value, child, node);
        if (foundParent) {
          return foundParent;
        }
      }
      return null;
    }
  
    // Method to print the tree (for debugging/visualization)
    printTree(node = this.root, indent = 0) {
      console.log(' '.repeat(indent) + node.value);
      for (let child of node.children) {
        this.printTree(child, indent + 2);
      }
    }
  }
  
  const tree = new Tree('root');
  tree.addNode('root', 'child1');
  tree.addNode('root', 'child2');
  tree.addNode('child1', 'child1.1');
  tree.addNode('child1', 'child1.2');
  tree.addNode('child2', 'child2.1');
  tree.findBFS('root');
  
  console.log('Tree Structure:');
  tree.printTree();
  // Output:
  // root
  //   child1
  //     child1.1
  //     child1.2
  //   child2
  //     child2.1
  
  const foundNode = tree.find('child1.1');
  console.log('Found Node:', foundNode ? foundNode.value : 'Not found'); // Output: Found Node: child1.1
  
  tree.removeNode('child1.1');
  console.log('Tree Structure after removal:');
  tree.printTree();
  // Output:
  // root
  //   child1
  //     child1.2
  //   child2
  //     child2.1
  
