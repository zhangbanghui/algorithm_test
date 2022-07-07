function isPalindrome(head: ListNode | null): boolean {
  const stack: ListNode[] = [];
  const dummy = head;
  while (head !== null) {
    stack.push(head);
    head = head.next;
  }
  head = dummy;
  while (head !== null && stack.length > 0) {
    if (head.val !== stack.pop().val) {
      return false;
    }
    head = head.next;
  }
  return true;
}
