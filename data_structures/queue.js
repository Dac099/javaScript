class Node{
    constructor(value){
        this.value = value;
        this.next = null;

    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
        this.lenght = 0;
    }

    enqueue(value){
        const newNode = new Node(value);
        if(this.lenght === 0){
            this.front = newNode;
            this.back = newNode;
        }else{
            this.back.next = newNode;
            this.back = newNode;    
        }
        this.lenght++;
        return this;
    }

    dequeue(){
        if(this.lenght === 0){
            console.log("The queue is empty!");
        }else if(this.lenght === 1){
            this.front = null;
            this.back = null;
            this.lenght--;
        }else{
            this.front = this.front.next;
            this.lenght--;
        }
        return this;
    }

    peek(){
        return this.front;
    }
}
let myQueue = new Queue();