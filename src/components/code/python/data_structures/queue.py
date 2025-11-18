class myQueue:
    def __init__(self, capacity):
        
        # Maximum number of elements the queue can hold.
        self.capacity = capacity
        
        # Array to store queue elements.
        self.arr = [0] * capacity
        
        # Current number of elements in the queue.
        self.size = 0