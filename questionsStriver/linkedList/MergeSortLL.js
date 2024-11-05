/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head;
  let mid = getMid(head);
  let lefth = head;
  let righth = mid.next;
  mid.next = null;
  let left = sortList(lefth);
  let right = sortList(righth);
  return mergeLL(left, right);
};
function getMid(head) {
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function mergeLL(left,right){
    let dummy=new ListNode(0)
    let temp1=left
    let temp2=right
    let curr=dummy
    while(temp1 && temp2){
        if(temp1.val > temp2.val){
            curr.next=temp2
            temp2=temp2.next
        }else{
            curr.next=temp1
            temp1=temp1.next
        }
        curr=curr.next
    }
    //for remaining elements
    if(temp1) curr.next=temp1
    if(temp2) curr.next=temp2
    return dummy.next
}
