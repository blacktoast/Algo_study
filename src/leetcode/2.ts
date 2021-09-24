/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  console.log("==============================================================");
  let head = new ListNode(0);
  let root = head;
  let point;
  let carry = 0;
  while (l1 && l2) {
    //    console.log(l1, l2);
    let t = l1.val + l2.val + carry;
    let tmp: ListNode = new ListNode(0);
    if (carry) {
      carry = 0;
    }
    carry = Math.floor(t / 10);
    t = t % 10;

    tmp.val = t;
    l1 = l1.next;
    l2 = l2.next;
    head.next = tmp;
    //  console.log(head);
    head = head.next;
    // console.log(root);
  }

  if (l2) {
    while (carry && l2) {
      let tmp: ListNode = new ListNode(0);
      let t = 0;
      let t2 = 0;
      t = carry + l2.val;
      t2 = t;
      t = t % 10;
      tmp.val = t;
      l2 = l2.next;
      head.next = tmp;
      head = head.next;
      if (carry) {
        carry = 0;
      }
      carry = Math.floor(t2 / 10);
      console.log(carry);
    }

    head.next = l2;
    if (carry) {
      let tmp: ListNode = new ListNode(0);
      tmp.val = carry;
      head.next = tmp;
    }
  } else {
    while (carry && l1) {
      let tmp: ListNode = new ListNode(0);
      let t = 0;
      let t2 = 0;
      t = carry + l1.val;
      t2 = t;
      t = t % 10;
      tmp.val = t;
      l1 = l1.next;
      head.next = tmp;
      head = head.next;
      if (carry) {
        carry = 0;
      }
      carry = Math.floor(t2 / 10);
      console.log(carry);
    }

    head.next = l1;
    console.log("l1 " + l1);
    if (carry) {
      let tmp: ListNode = new ListNode(0);
      tmp.val = carry;
      head.next = tmp;
    }
  }

  return root.next;
}

/**
 *  let head = new ListNode();
    let tail = head;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        
        tail.next = new ListNode(sum % 10);
        tail = tail.next;
        
        carry = Math.trunc(sum / 10);
        
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    
    return head.next;
*/
