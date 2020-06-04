// 10->15-->16

class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;

    // return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    // this.tail = newNode;
    // return this;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }

  insert(index, value) {
    const newNode = {
      value,
      next: null
    };

    const leader = this.traverseToIndex(index - 1);
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
    console.log("aaa", this.head);
  }
}

const newLinkList = new LinkedList(10);
newLinkList.append(15);
newLinkList.append(20);
newLinkList.prepend(1);
newLinkList.prepend(2);
newLinkList.insert(2, 4);
newLinkList.printList();
const newNode = new Node(20);

console.log(newLinkList.printList());
