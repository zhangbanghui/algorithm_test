function oddEvenList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  // 奇数指针
  let odd = head;
  // 偶数指针
  let even = head.next;
  // 记录偶数指针
  const evenHead = even;
  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
}
