class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    addChild(childNode){
        if(!this.left){
            this.left = childNode;
        }else if(!this.right){
            this.right = childNode;
        }else {
            console.log("Node is full");
        }
    }
}


const root = new TreeNode('root');
const child1 = new TreeNode('child1');
const child2 = new TreeNode('child2');
const child3 = new TreeNode('child3');
const child4 = new TreeNode('child4');


root.addChild(child1);
root.addChild(child2);
root.addChild(child3);
root.addChild(child4);


function levelOrderTraversal(root){

    if(!root) return;
    let queue = [];
    queue.push(root);

    while(queue.length>0){
        for(let i=0; i< queue.length; i++){
            let currentNode = queue.shift();
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
   
    }
}