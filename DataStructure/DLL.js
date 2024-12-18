class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //push-O(1)
  pop() {
    if (this.length === 0) return null;
    let toRemove = this.tail;
    if (this.length === 1) this.head = null;
    else {
      toRemove.prev.next = null;
      this.tail = toRemove.prev;
      toRemove.prev = null;
    }
    this.length--;
    return toRemove;
  }
  //O(1)
  shift() {
    if (this.length === 0) return null;
    let toRemove = this.head;
    if (this.length == 1) {
      this.tail = null;
    } else {
      toRemove.next.prev = null;
      this.head = toRemove.next;
      toRemove.next = null;
    }
    this.length--;
    return toRemove;
  }
  //O(1)
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }//O(1)
  //0-based indexing in get set
  get(indx) {
    if (indx < 0 || indx >= this.length) return null;
    if (indx >= Math.floor(this.length / 2)) {
      let temp = this.tail;
      let count = this.length - indx - 1;
      while (count > 0) {
        temp = temp.prev;
        count--;
      }
      return temp;
    } else {
      let count = indx;
      let temp = this.head;
      while (count > 0) {
        temp = temp.next;
        count--;
      }
      return temp;
    }
  }
  //O(n)
  set(val, indx) {
    let node = this.get(indx);
    if (node) {
      node.val = val;
    } else {
      return null;
    }
  }
  //O(n)
  insert(indx, val) {
    if (indx < 0 || indx > this.length) return null;
    if (indx == 0) {
      this.unshift(val);
    } else if (indx === this.length) {
      this.push(val);
    } else {
      let newNode = new Node(val);
      let backNode = this.get(indx - 1);
      let frontNode = backNode.next;
      backNode.next = newNode;
      frontNode.prev = newNode;
      newNode.next = frontNode;
      newNode.prev = backNode;
      this.length++;
    }
    return this;
  }
  //O(n)
  remove(indx) {
    let toRemove;
    if (indx < 0 || indx >= this.length) return null;
    if (indx == 0) {
      toRemove = this.shift();
    } else if (indx == this.length - 1) {
      toRemove = this.pop();
    } else {
      toRemove = this.get(indx);
      let frontNode = toRemove.next;
      let backNode = toRemove.prev;
      backNode.next = frontNode;
      frontNode.prev = backNode;
      toRemove.next = null;
      toRemove.prev = null;
      this.length--;
    }
    return toRemove;
  }
  //O(n)
  reversal(){
    
  }
}
