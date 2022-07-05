function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let newList = new ListNode();
  const dummy = newList;
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      newList.next = list1;
      list1 = list1.next;
    } else {
      newList.next = list2;
      list2 = list2.next;
    }
    newList = newList.next;
  }
  if (list1 !== null) {
    newList.next = list1;
  }
  if (list2 !== null) {
    newList.next = list2;
  }
  return dummy.next;
}
