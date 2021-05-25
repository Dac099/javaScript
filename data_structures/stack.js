class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Sktack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length === 0){
            console.log("Stack empty!");
        }else if(this.length === 1){
            this.top = null;
            this.bottom = null;
            this.length--;
        }else{
            const holdingPointer = this.top.next;
            delete this.peek();
            this.top = holdingPointer;
            this.length--;
        }
        return this;
    }
}

const myStack = new Sktack();