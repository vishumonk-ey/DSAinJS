// follows LIFO principle
// used in-->undo/redo,function invocations, browser history, etc
// array implementation and linkedlist implementaion-:
// is just a concept with rules(lifo)

let stack=[];
stack.push("vishal");
stack.push("is");
stack.push("goooood");
// first thing is the last thing in 
stack.pop()
// the last thing added in will be popped 
// follows the lifo principle.

// can be done by shift and unshift also,doesnt depends upon direction . only the principle of last thing in and first thing out matters

let newStack=[]
newStack.unshift("vishal")
newStack.unshift("is")
newStack.unshift("good")
// newStack=["good","is","vishal"]
newStack.shift();

// but if using array implementation then shift/unshift should be avoided because of reindexing O(n)

// Linked List implementation-:
class node{
    constructor(val){
        this.val=val
        this.next=null
    }
}

class Stack{
    constructor(){
        this.start=null
        this.end=null
        this.size=0
    }
    push(val){
        let newNode=new node(val)
        if(this.length==0){
            this.start=newNode
            this.end=newNode
            this.length++
            return this.length
        }
        let prevFirst=this.start
        newNode.next=prevFirst
        this.start=newNode
        this.length++
         return this.length
    }
    pop(){
        let removedNode;
        if(this.length==0)return null
        if(this.length==1) {
            removedNode=this.start
            this.end=null
        }
        removedNode=this.start
        this.start=removedNode.next
            this.length--
            return removedNode;
    }
}
// linked list vala method is more accha because push and pop are simmilar time taking ... kyuki stack ke end se nikalna and add krna should be same time taking...

let s =new Stack();
s.push(1)
s.push(2)
s.push(3)
s.push(4)
console.log(s.start);
console.log(s.pop());
console.log(s);
