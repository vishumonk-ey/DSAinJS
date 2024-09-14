// works on FIFO (First In First Out) principle
// priority queue in asynchoronous programming
// array implementation-:

let queue = [];
queue.push("first");
queue.push("2nd");
queue.push("3rd");
console.log(queue);
queue.shift();
// push combined with shift or unshift combined with pop gives us the same functionality as queue (FIFO principle)
// but not recommended due to extra garbage of index number and O(n) while shift/unshift

// LinkedList implementation-:

class Node {
  constructor(val) {
    this.value = value;
    this.next = null;
  }
}
// enqueue->adding(push)
// dequeue->removing(shift)
// for a singlylinkedlist-> we can just use push and shift but not unshift and pop because while using pop method we would have to traverse through the entire length.
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.first.next = newNode;
      this.first = newNode;
    }
    return ++this.length;
  }
  dequeue(){
    let removedNode;
    if(this.length==0)return null
    else if(this.length==1){
        removedNode=this.last
        this.first=null
    }
    this.last=this.last.next;
    this.length--;
    return removedNode;
  }
}
// O(1)->insertion/removal
// O(n)->search/access
