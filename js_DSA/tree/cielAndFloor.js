class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right= null;
    }
}

function findCiel(){

    let ciel = null;
    while(root !== null){
        if(root.data === key){
            ciel = root.data;
            break
        }
        if(root.data > key){
            root = root.left;
        }else{
            ciel = root.data;
            root = root.right;
        }
    }
}

function findFloor(){
    let floor = null;
    while(root!== null){
        if(root.data === key){
            floor = root.data;
            return;
        }

        if(root.data < key){
            root = root.right;
        }else{
            floor= root.data;
            root = root.left;
        }
    }
}