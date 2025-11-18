class myStack {
    
    // array to store elements
    int *arr;       
    
    // maximum size of stack
    int capacity;   
    
    // index of top element
    int top;          

public:
    
    // constructor
    myStack(int cap) {
        capacity = cap;
        arr = new int[capacity];
        top = -1;
    }
};