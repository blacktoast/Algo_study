var removeNthFromEnd = function (head, n) {
  const start = new ListNode();
  let fast = head;
  let slow = start;
  start.next = head;
  console.log(fast, slow);
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  console.log(fast, slow);

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  console.log(fast, slow);

  slow.next = slow.next.next;
  return start.next;
};
