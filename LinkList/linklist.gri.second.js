class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  traverse() {
    let current = this.head;
    let linki = new Array();
    while (current) {
      linki.push(current.value);
      current = current.next;
    }
    return linki;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }

  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;

    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

  unshift(value) {
    let newHead = new Node(value);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;

    let currentHead = new Node(value);
  }
}

let list = new LinkList();
list.push(2);
list.push(3);
list.push(4);
list.shift();
// list.pop(  );

console.log(list.shift());
