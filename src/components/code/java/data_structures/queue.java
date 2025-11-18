class myQueue {
    private int[] arr;
    private int capacity;
    private int size;

    // Constructor
    public myQueue(int capacity) {
        
         //Maximum number of elements the queue can hold.
        this.capacity = capacity;
        
        // Array to store queue elements.
        arr = new int[capacity];
        
        // Current number of elements in the queue.
        size = 0;
    }
}