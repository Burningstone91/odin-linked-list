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
    for (let i = 1; i <= index; i++) {
      if (node == null) {
        return `No node exists at index ${index}!`;
      }
      node = node.nextNode;
    }
    return node;
  }

  pop() {
    let currentNode = this.listHead;
    let prevNode = null;

    if (currentNode == null) return "The list is empty";

    while (currentNode.nextNode != null) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    if (prevNode == null) {
      this.listHead = null;
      return;
    } else {
      prevNode.nextNode = null;
    }
  }

  contains(value) {
    let currentNode = this.listHead;
    while (currentNode.nextNode != null) {
      if (currentNode.value == value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let currentNode = this.listHead;
    while (currentNode.nextNode != null) {
      if (currentNode.value == value) return index;
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let currentNode = this.listHead;
    let string = "";
    while (currentNode.nextNode != null) {
      string += `( ${currentNode.value} ) => `;
      currentNode = currentNode.nextNode;
    }
    string += "null";
    return string;
  }

  insertAt(value, index) {
    let prevNode = this.at(index - 1);
    let nextNode = this.at(index);

    prevNode.nextNode = new Node(value);
    prevNode.nextNode.nextNode = nextNode;
  }
  removeAt(index) {
    let prevNode = this.at(index - 1);
    let nextNode = this.at(index + 1);

    prevNode.nextNode = nextNode;
  }
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
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
