// Node.js ES6 Linked List Implementation

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
    } else {
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.headNode;
  }

  tail() {
    if (!this.headNode) return null;
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.headNode;
    let counter = 0;
    while (counter < index) {
      current = current.nextNode;
      counter++;
    }
    return current;
  }

  pop() {
    if (!this.headNode) return;
    if (!this.headNode.nextNode) {
      this.headNode = null;
    } else {
      let current = this.headNode;
      while (current.nextNode.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = null;
    }
    this.length--;
  }

  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.headNode;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let result = "";
    let current = this.headNode;
    while (current) {
      result += ` ( ${current.value} ) ->`;
      current = current.nextNode;
    }
    return result + " null";
  }

  insertAt(value, index) {
    if (index < 0 || index > this.length) return;
    const newNode = new Node(value);
    if (index === 0) {
      this.prepend(value);
      return;
    }
    let current = this.headNode;
    let counter = 0;
    while (counter < index - 1) {
      current = current.nextNode;
      counter++;
    }
    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
    this.length++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) {
      this.headNode = this.headNode.nextNode;
    } else {
      let current = this.headNode;
      let counter = 0;
      while (counter < index - 1) {
        current = current.nextNode;
        counter++;
      }
      current.nextNode = current.nextNode.nextNode;
    }
    this.length--;
  }
}

export default LinkedList;
