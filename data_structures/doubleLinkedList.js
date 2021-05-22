class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyLinkedList{
    constructor(value){
        this.head = {
            value : value,
            next : null,
            prev : null,
        };
        this.tail = this.head;
        this.lenght = 1;
    }

    append(value){
        let newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.lenght++;

        return this; 
    }

    preApend(value){
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        newNode.prev = null;
        this.head = newNode;
        this.lenght++;

        return this;
    }

    getTheIndex(index){
        let counter = 0;    
        let currentNode = this.head;
        while(counter != index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode; 
    }

    insert(index, value) {
        if (index >= this.length) {
          return this.append(value);
        }
    
        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        holdingPointer.prev = newNode;
        newNode.next = holdingPointer;
        newNode.prev = firstPointer;
        this.lenght++;
    
        return this;
      }
}

let myDoublyList = new MyDoublyLinkedList(1);