class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right=null;
    }
}

class BinaryTree{
    constructor(){
        this.root =null;
    }

    buildTreeFromArray(arr){
        if(!arr.length) return null;
        this.root = new Node(arr[0]);
        const queue = [this.root];

        let i=1;
        while(i<arr.length){
            const current = queue.shift();
            if(i< arr.length){

                current.left = new Node(arr[i]);
                queue.push(current.left);
                i++;
            }

            if(i<arr.length){
                current.right = new Node(arr[i]);
                queue.push(current.right);
                i++;
            }
        }
    }
  // In-order traversal (left, root, right)

    inOrder(node = this.root){
        if(node !== null){
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }
  // Pre-order traversal (root, left, right)

    preOrder(node = this.root){
        if(node !== null){
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
  // Post-order traversal (left, right, root)
    postOrder(node = this.root){
        if(node !== null){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }
}

const nodes = [1, 2, 3, 4, 5, 6, 7];

// Create a new binary tree
const tree = new BinaryTree();

// Build the tree from the array
tree.buildTreeFromArray(nodes);

// Traverse the tree
console.log("In-order traversal:");
tree.inorder(); // Output: 4, 2, 5, 1, 6, 3, 7

console.log("Pre-order traversal:");
tree.preorder(); // Output: 1, 2, 4, 5, 3, 6, 7

console.log("Post-order traversal:");
tree.postorder(); // Output: 4, 5, 2, 6, 7, 3, 1
