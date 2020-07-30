// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor (val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue (val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.front = newNode;

        } else {
            this.back.next = newNode;

        }
        this.back = newNode;
        this.length++;
        return this.length;
    }
    dequeue () {
        if(this.length === 0) return null;
        let oldNode = this.front;
        if(this.length === 1) {
            this.front = null;
            this.back = null;
        } else {
            this.front = oldNode.next;
        }
        this.length--;
        return oldNode.value;
    }
    size () {
        return this.length;
    }
}

exports.Node = Node;
exports.Queue = Queue;
