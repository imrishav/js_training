// STACKS

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
     }
}
 
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0
    }

    push(val) {
        let newNode = new Node(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        } 

        return ++this.size;
    }

    pop() {

        if (!this.first) return null;
        let firstNode = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        }


    }
}