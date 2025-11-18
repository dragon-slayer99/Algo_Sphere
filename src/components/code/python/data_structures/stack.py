class myStack:

    def __init__(self, cap):
        
        # array to store elements
        self.arr = [0] * cap
        
        # maximum size of stack
        self.capacity = cap
        
        # index of top element
        self.top = -1