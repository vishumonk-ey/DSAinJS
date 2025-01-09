//tree->the node cant point to its sibling and parent and can only point to its children

//binary search tree-:
// tree where atmost 2 nodes are psbl
// left side will contain all the nodes which are lesser than parent nodes
// right side will contain all the nodes which are greater than parent nodes
// -->each node will behave like an individual bst

// BINARY SEARCH TREE-:
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let curr = this.root;
    while (true) {
      if (curr.val === val) return undefined;
      if (curr.val > val) {
        if (curr.left === null) {
          curr.left = newNode;
          return this;
        } else {
          curr = curr.left;
        }
      } else if (curr.val < val) {
        if (curr.right === null) {
          curr.right = newNode;
          return this;
        } else {
          curr = curr.right;
        }
      }
    }
  }
  contains(val) {
    if (this.root === null) return false;
    let curr = this.root;
    while (true) {
      if (curr.val === val) {
        return true;
      } else if (curr.val > val) {
        if (curr.left === null) return false;
        curr = curr.left;
      } else if (curr.val < val) {
        if (curr.right === null) return false;
        curr = curr.right;
      }
    }
  }
  find(val) {
    if (this.root === null) return undefined;
    let curr = this.root;
    while (true) {
      if (curr.val === val) {
        return curr;
      } else if (curr.val > val) {
        if (curr.left == null) return undefined;
        curr = curr.left;
      } else {
        if (curr.right == null) return undefined;
        curr = curr.right;
      }
    }
  }
  BFS() {
    let queue = [];
    let resultArr = [];
    queue.push(this.root);
    while (queue.length != 0) {
      let node = queue.shift();
      resultArr.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return resultArr;
  }
  DFSPreOrder() {
    let resultArr = [];
    function traverse(node) {
      resultArr.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return resultArr;
  }
}
//average time complexity of insert/search is O(log n)-->we consider avg case when our tree is almost balanced.. agar mai size double krdunga to bass ek step badhega-->logn
//best case of inserting/searching is O(1)
//worst case of inserting/searching is O(n)-->skewed bst-->bass ek trf

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
