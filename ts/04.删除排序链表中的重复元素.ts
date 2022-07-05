function deleteDuplicates(head: ListNode | null): ListNode | null {
  const includedArr = [];
  const dummy = head;
  let prev: ListNode = null;
  while (head !== null) {
    const value = head.val;
    if (includedArr.includes(value)) {
      // 如果已经存在值
      prev.next = head.next;
      head = head.next;
    } else {
      // 如果不存在，将数值加入到数组中
      includedArr.push(value);
      prev = head;
      head = head.next;
    }
  }
  return dummy;
}
