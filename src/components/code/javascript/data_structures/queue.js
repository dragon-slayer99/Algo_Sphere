class myQueue {
    constructor(capacity) {
 
        //Maximum number of elements the queue can hold.
        this.capacity = capacity;
 
        // Array to store queue elements.
        this.arr = new Array(capacity);
 
        // Current number of elements in the queue.
        this.size = 0;
    }
}