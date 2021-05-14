class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class MySingleLinkedList{
    constructor(value){
        this.head = {
            value : value,
            next : null,
        };
        this.tail = this.head;
        this.lenght = 1;
    }

    append(value){
        let newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.lenght++;

        return this; 
    }

    preApend(value){
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.lenght++;

        return this;
    }

    getTheIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter != index){
            currentNode = currentNode.next;
            counter
        }
        return currentNode;
    }

    insert(index, value){
        if(index >= this.lenght){
            const newNode = new Node(value);
            const firstPointer = this.getTheIndex(index - 1);
            const holdingPointer = firstPointer.next;
            newNode.next = holdingPointer;
            firstPointer.next = newNode;
            this.lenght++;

            return this;
        }
        return undefined;
    }
}

let myLinkedList = new MySingleLinkedList(1);