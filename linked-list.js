class LinkedList {
  constructor() {
    this.listHead = null;
  }

  append(value) {
    if (this.listHead == null) {
      this.prepend(value);
    } else {
      let currentNode = this.listHead;
      while (currentNode.nextNode != null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = new Node(value);
    }
  }

  prepend(value) {
    let prev = null;
    if (this.listHead != null) prev = this.listHead;
    this.listHead = new Node(value);
    this.listHead.nextNode = prev;
  }

  size() {
    let count = 0;
    let currentNode = this.listHead;
    while (currentNode != null) {
      currentNode = currentNode.nextNode;
      count++;
    }
    return count;
  }

  head() {
    return this.listHead;
  }

  tail() {
    let lastNode = this.listHead;
    while (lastNode.nextNode != null) {
      lastNode = lastNode.nextNode;
    }
    return lastNode;
  }

  at(index) {
    let node = this.listHead;
    for (let i = 0; i <= index; i++) {
      node = node.nextNode;
      if (node == null) {
        return `No node exists at index ${index}!`;
      }
    }
    return node;
  }

  pop() {}

  contains(value) {}

  find(value) {}

  toString() {}

  insertAt(value, index) {}

  removeAt(index) {}
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.prepend("mouse");
console.log(list.at(3));
