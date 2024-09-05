// val -> value stored at the node
// next-> pointer to next node
class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }
  //  PUSH METHOD
  push(val) {
    let newNode = new node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = pre.next;
    }
    pre.next = null;
    this.tail = pre;
    this.length--;
    // if list is one element long then the loop isnt working and popping nhi horha
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  shift() {
    if (this.length === 0) return undefined;
    let temp;
    if (this.length === 1) {
      temp = this.head;
      this.head = null;
      this.tail = null;
    } else {
      temp = this.head;
      this.head = this.head.next;
    }
    this.length--;
    return temp;
  }
  unshift(val) {
    let newNode = node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
        // agar else nhi lagata to length ==0 per mera khud ko hi point krte rehta ye because of the below code!
      newNode.next = this.head;
      this.head = newNode;     
    }
    this.length++;
    return this
  }
  get(indx){
    if(this.length<=indx || indx<0) return null
    let temp = this.head
    for(let i =0;i<indx;i++){
        temp=temp.next
    }
    return temp
  }
  set(indx,newVal){
    let node= this.get(indx)
    if(node){
       node.val=newVal 
       return true   
    }
    return false
  }
  insert(index,val){
    if(index<0 || index>this.length)return false
    if(index==this.length) return !!this.push(val)
    if(index==0)return !!this.unshift(val)
        // to return true or false we used double !! as ! will convert it into falsy value( !non empty ) and !! will convert it into truthy value 
    let prevNode=this.get(index-1)
    let newNode=new node(val)
    newNode.next=prevNode.next
    prevNode.next=newNode
    this.length++
    return true
  }
  remove(index){
    if(index<0 || index>=this.length)return undefined
    if(index==0){
       this.shift()
    }else if(this.length-1==index){
        this.pop()
    }else{
        let prev=this.get(index-1)
        let removedNode=prev.next
        prev.next=removedNode.next
        this.length--
        return removedNode
       }
    
  }
  reverse(){
    this.tail=this.head
    let left=this.head
    let middle,right;
    
    do{
        middle=left.next
        right=middle.next
        middle.next=left
        left=left.next

    }while(right!=null)
    middle.next=left
    this.head=middle
  }
  // if it would have been an array then all other elements would've to be reindexed
}
let newSLL = new SinglyLinkedList();
console.log(newSLL.push(1));
console.log(newSLL.push(3));
console.log(newSLL);
