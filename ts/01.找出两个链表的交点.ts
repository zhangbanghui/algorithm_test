/**
 * leetcode: 160. 相交链表
 * desciption: 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
 */
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let h1 = headA;
  let h2 = headB;

  while (h1 !== h2) {
    if (h1 === null) {
      h1 = headB;
    } else {
      h1 = h1.next;
    }

    if (h2 === null) {
      h2 = headA;
    } else {
      h2 = h2.next;
    }
  }

  return h1;
}
