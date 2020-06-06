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

  // =============================GET`
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0; //2
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // ============================Set
  set(index, value) {
    let node = this.get(index);
    node.value = value;
    return node;
  }

  ///Insert

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    let newNode = new Node(value);
    let prev = this.get(index - 1);
    let tempNode = prev.next;
    prev.next = newNode;
    newNode.next = tempNode;
    this.length++;
    return true;
  }

  //remove====
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();
    let prev = this.get(index - 1);
    let nextNode = this.get(index + 1);
    prev.next = nextNode;
    this.length--;
    return true;
  }

  //Reverse

  reverse() {}
}

let list = new LinkList();
list.push("Hello");
list.push("There");
list.push("insert..");
list.push("bye..");
// list.shift();
// list.pop(  );
console.log(list.traverse());
console.log("=============");
console.log(list.remove(0));
console.log(list.traverse());
