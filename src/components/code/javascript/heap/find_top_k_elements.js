class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = 
                        Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= 
                        this.heap[index]) break;
            [this.heap[parentIndex], 
                this.heap[index]] = [this.heap[index], 
                                    this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild > element) 
                    || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

function topKElementsMaxHeap(arr, k) {
    const heap = new MaxHeap();
    arr.forEach(num => heap.insert(num));
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(heap.extractMax());
    }
    return result;
}

// Example
// const arr = [3, 1, 4, 2, 3, 4, 4];
// const k = 3;
// console.log("Top", k, "elements:", topKElementsMaxHeap(arr, k));