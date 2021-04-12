const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
    this.currentNode = null;
  }

  get size() {
    this.currentNode = this.head;
    this.length = 0;
    while (this.currentNode.next) {
      this.length++;
    }
    return this.length;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    newNode.value = element;
    if (!this.head) {
      this.head = newNode;
    } else {
      this.currentNode = this.head;
      while (this.currentNode.next) {
        this.currentNode = this.currentNode.next;
      }
      this.currentNode.next = newNode;
    }
  }

  dequeue() {
    const currentHead = this.head;
    this.head = this.head.next ? this.head.next : null;
    return currentHead.value;
  }
}

module.exports = Queue;
