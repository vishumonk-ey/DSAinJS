// val -> value stored at the node 
// next-> pointer to next node
class node{
    constructor(val){
        this.val=val
        this.next=null
    }
}
class SinglyLinkedList{
    constructor(){
        this.head=null
        this.length=0
        this.tail=null
    }
    //  PUSH METHOD
    push(val){
        let newNode=new node(val)
        if(this.head==null){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++
     return this
    }
    pop(){
        if(!this.head){
            return undefined
        }
        let temp=this.head
        let pre=this.head
        while(temp.next){
            pre=temp
            temp=pre.next
        }
        pre.next=null
        this.tail=pre
        this.length--
        // if list is one element long then the loop isnt working and popping nhi horha 
        if(this.length==0){
            this.head=null
            this.tail=null
        }
        return temp
    }
    shift(){
        if(this.length===0) return undefined
        let temp
        if(this.length===1){
            temp=this.head
            this.head=null
            this.tail=null
        }else{
            temp=this.head
            this.head=this.head.next
        }
        this.length--
        return temp
    }
    // if it would have been an array then all other elements would've to be reindexed
   }
 let newSLL=new SinglyLinkedList
console.log( newSLL.push(1))
console.log( newSLL.push(3))
console.log(newSLL)


 

