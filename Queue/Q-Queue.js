//Queue in JavaScript
//Queue has two methods 'add' & 'remove'
//Peek next element to go.
//It follows FIFO

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

// let newQue = new Queue();
// newQue.add(2);Prepare Launch
// newQue.add(3);
// // newQue.remove(3);

// console.log(newQue);

module.exports = Queue;
