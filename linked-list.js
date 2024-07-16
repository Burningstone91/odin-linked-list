class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head == null) {
      this.prepend(value);
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode != null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = new Node(value);
    }
  }

  prepend(value) {
    let prev = null;
    if (this.head != null) prev = this.head;
    this.head = new Node(value);
    this.head.nextNode = prev;
  }

  size() {}

  head() {}

  tail() {}

  at(index) {}

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
console.log(list);
