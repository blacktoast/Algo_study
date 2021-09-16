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

function reverseList(head: ListNode | null): ListNode | null {
  let nod: ListNode, prev: ListNode, tmp: ListNode, tmp2: ListNode;
  nod = head;
  tmp = head;
  prev = null;
  console.log();
  while (nod) {
    tmp = nod.next;
    nod.next = prev;
    //  console.log(prev, nod.next);
    prev = nod;
    //     console.log(tmp);

    nod = tmp;
    //       console.log(nod.next);
  }

  return prev;
}
