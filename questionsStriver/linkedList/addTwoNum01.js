/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2){
    if(l1==null && l2==null)return null
    let temp1=l1
    let temp2=l2
    let dummyNode=new ListNode(0)
    let curr=dummyNode
    let carry=0
    while(temp1!= null && temp2!=null){
       temp1.val+=temp2.val+carry
        if(temp1.val>=10){
            temp1.val=temp1.val-10
            carry=1
        }else{
            carry=0
        }
        curr.next=temp1
        curr=curr.next
        temp1=temp1.next
        temp2=temp2.next
    }
    while(temp1!=null){
        if(carry==0){
            curr.next=temp1
            break
        }else{
            temp1.val+=carry
            if(temp1.val>=10){
                carry=1
                temp1.val=temp1.val-10
            }else {
                carry=0
            }
            curr.next=temp1
            curr=curr.next
        }
        temp1=temp1.next
    }
    while(temp2!=null){
        if(carry==0){
            curr.next=temp1
            break
        }else{
            temp2.val+=carry
            if(temp2.val>=10){
                carry=1
                temp2.val=temp2.val-10
            }else {
                carry=0
            }
            curr.next=temp2
            curr=curr.next
        }
        temp2=temp2.next
    }
    if(carry=1){
        let newNode=new ListNode(1)
        curr.next=newNode
    }
    return dummyNode.next

}