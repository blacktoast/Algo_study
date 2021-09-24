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
    console.log(l1, l2);
    let t = l1.val + l2.val;
    let tmp: ListNode = new ListNode(0);
    tmp.val = t;
    l1 = l1.next;
    l2 = l2.next;
    head.next = tmp;
    console.log(head);
    head = head.next;
    console.log(root);
  }

  if (l2) {
    head.next = l2;
    console.log("l2 " + l2);
  } else {
    head.next = l1;
    console.log("l1 " + l1);
  }
  return root.next;
}
