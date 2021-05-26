class Node{
    constructor(value){
        this.left =  null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;

    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        }else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    if(currentNode.left === null){
                        currentNode.left = newNode;
                        return this;
                    }else{
                        currentNode = currentNode.left;
                    }
                }else{
                    if(currentNode.right === null){
                        currentNode.right = newNode;
                        return this;
                    }else{
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }
}

let tree = new BinarySearchTree();