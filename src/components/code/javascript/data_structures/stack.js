class myStack {

    // constructor
    constructor(cap) {
        
        // array to store elements
        this.arr = new Array(cap);
        
        // maximum size of stack
        this.capacity = cap;
        
        // index of top element
        this.top = -1;
    }
}