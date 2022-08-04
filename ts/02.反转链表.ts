// 递归
function reverseList1(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  const next = head.next;
  const newHead = reverseList(next);
  next.next = head;
  head.next = null;
  return newHead;
}

// 迭代
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  let prev = null;
  let curr = head;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
