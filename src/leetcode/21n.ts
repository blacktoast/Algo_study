class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/*
  
 */
function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let tmp;
  let tmpNode: ListNode;
  let test: ListNode;
  console.log("start   ");

  if (!l1 || (l2 && l1.val > l2.val)) {
    console.log("tes   ");
    tmpNode = l1;
    l1 = l2;
    l2 = tmpNode;
  }

  if (l1) {
    console.log(l1, l2);

    l1.next = mergeTwoLists(l1.next, l2);
  }
  //  console.log("after   ");
  //console.log(l1, l2);
  return l1;
}

let l1: ListNode = new ListNode(1);
let l11: ListNode = new ListNode(2);
let l12: ListNode = new ListNode(4);
l1.next = l11;
l11.next = l12;

let l2: ListNode = new ListNode(1);
let l21: ListNode = new ListNode(3);
let l22: ListNode = new ListNode(4);
l2.next = l21;
l21.next = l22;
//console.log(l1, l2);
console.log(mergeTwoLists(l1, l2));
