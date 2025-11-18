class myStack {

    // array to store elements
    private int[] arr;

    // maximum size of stack
    private int capacity;

    // index of top element
    private int top;

    // constructor
    public myStack(int cap) {
        capacity = cap;
        arr = new int[capacity];
        top = -1;
    }
}

//          OR          //

Stack<Integer> myStack = new Stack<>()
myStack.pop();
myStack.push();
myStack.search();
myStack.peek();
myStack.empty();
