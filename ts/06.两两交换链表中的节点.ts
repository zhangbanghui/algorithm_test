function swapPairs(head: ListNode | null): ListNode | null {
  // 如果当前节点或者下一个节点为null，则直接返回当前节点
  if (head === null || head.next === null) {
    return head;
  }

  const next = head.next;

  head.next = swapPairs(next.next);
  next.next = head;

  return next;
}
