// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

/**
 * add(item) -> push()
 * []
 * [1]
 * [1,2]
 * [1,2,3]
 * ------>
 * remove() -> filter()
 * [1,2,3]
 * [2,3]
 * [3]
 * <-----
 */
class QueueInvert {
  constructor() {
    this.data = [];
  }

  add(item) {
    this.data = [...this.data, item];
  }

  remove() {
    let removedItem = this.data[0];
    this.data = this.data.filter((item, index) => index !== 0);

    return removedItem;
  }
}

/**
 * add(item) -> unshift()
 * []
 * [1]
 * [2,1]
 * [3,2,1]
 * <------
 * remove() -> pop()
 * [3,2,1]
 * [3,2]
 * [3]
 * ----->
 */

class Queue {
  constructor() {
    this.data = [];
  }

  add(item) {
    this.data.unshift(item);
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;
