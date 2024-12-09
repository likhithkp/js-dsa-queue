// Queue
// Operations --> enqueue, dequeue, peek, isEmpty, size

class Queue{
    constructor(){
        this.queue = []
    }

    enqueue(item){
        this.queue.push(item);
    };

    dequeue(){
        if(this.isEmpty()){
            return "Queue Underflow"
        }
        return this.queue.shift();
    };

    peek(){
        return this.queue[0];
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    size(){
        return this.queue.length
    };
}

const queue = new Queue();

// Circular queue
// Operations --> enqueue, dequeue, rear, front, isEmpty, isFull, size

var circularQueue = function(k){
    this.queue = [];
    this.length = k;
}

circularQueue.prototype.enqueue = function(item){
    return this.queue.push();
}

circularQueue.prototype.dequeue = function(){
    return this.queue.shift();
}

circularQueue.prototype.front = function(){
    if(this.queue.length === 0) return -1;
    return this.queue[0]
}

circularQueue.prototype.rear = function(){
    if(this.queue.length === 0) return -1;
    return this.queue[this.queue.length - 1]
}

circularQueue.prototype.isEmpty = function(){
    return this.queue.length === 0;
}

circularQueue.prototype.isFull = function(){
    return this.queue.length === this.size
}