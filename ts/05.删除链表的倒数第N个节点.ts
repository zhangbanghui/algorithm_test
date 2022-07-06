// 双遍历
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = head;

  // 记录链表长度
  let length = 0;
  while (head !== null) {
    head = head.next;
    length += 1;
  }

  // 计算需要删除的第N个节点
  const sortNum = length - n;
  let i = 1;
  // 如果是第一个，直接返回第二个节点
  if (sortNum === 0) {
    return dummy.next;
  }
  // 重置表头
  head = dummy;
  // 找到需要删除的节点的前一个节点
  while (i < sortNum) {
    head = head.next;
    i += 1;
  }
  head.next = head.next.next;

  return dummy;
}

// 快慢指针
function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
  const dummy = head;
  // 快指针
  let fast = head;
  // 慢指针
  let slow = head;
  // 将快指针提前走n步
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  // 记录slow的前一个节点
  let prev = null;
  while (fast !== null) {
    fast = fast.next;
    prev = slow;
    slow = slow.next;
  }
  // 如果prev没有移动，则说明要删除的是第一个节点
  if (prev === null) {
    return dummy.next;
  }
  prev.next = slow.next;

  return dummy;
}
