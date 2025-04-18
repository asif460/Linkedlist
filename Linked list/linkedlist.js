class Node {
    constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.nextNode = newNode;
        this.tail = newNode;
      }
      this.length++;
    }
  
    prepend(value) {
      const newNode = new Node(value, this.head);
      this.head = newNode;
      if (!this.tail) this.tail = newNode;
      this.length++;
    }
  
    size() { return this.length; }
  
    getHead() { return this.head; }
  
    getTail() { return this.tail; }
  
    at(index) {
      if (index < 0 || index >= this.length) return null;
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.nextNode;
      }
      return current;
    }
  
    pop() {
      if (!this.head) return null;
      let current = this.head;
      let previous = null;
      while (current.nextNode) {
        previous = current;
        current = current.nextNode;
      }
      if (previous) {
        previous.nextNode = null;
        this.tail = previous;
      } else {
        this.head = null;
        this.tail = null;
      }
      this.length--;
      return current.value;
    }
  
    contains(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) return true;
        current = current.nextNode;
      }
      return false;
    }
  
    find(value) {
      let current = this.head;
      let index = 0;
      while (current) {
        if (current.value === value) return index;
        current = current.nextNode;
        index++;
      }
      return null;
    }
  
    toString() {
      let current = this.head;
      let str = '';
      while (current) {
        str += `( ${current.value} ) -> `;
        current = current.nextNode;
      }
      str += 'null';
      return str;
    }
  
    insertAt(value, index) {
      if (index < 0 || index > this.length) return false;
      if (index === 0) {
        this.prepend(value);
        return true;
      }
      if (index === this.length) {
        this.append(value);
        return true;
      }
      const newNode = new Node(value);
      const prevNode = this.at(index - 1);
      newNode.nextNode = prevNode.nextNode;
      prevNode.nextNode = newNode;
      this.length++;
      return true;
    }
  
    removeAt(index) {
      if (index < 0 || index >= this.length) return null;
      if (index === 0) {
        const removed = this.head;
        this.head = this.head.nextNode;
        if (!this.head) this.tail = null;
        this.length--;
        return removed.value;
      }
      const prevNode = this.at(index - 1);
      const removed = prevNode.nextNode;
      prevNode.nextNode = removed.nextNode;
      if (index === this.length - 1) this.tail = prevNode;
      this.length--;
      return removed.value;
    }
  }
  
  // Export for use in other files (Node.js environment)
  module.exports = LinkedList;