/**
https://leetcode.cn/problems/remove-duplicates-from-sorted-list/description/
 */
/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
  public ListNode deleteDuplicates(ListNode head) {
    if (head == null) {
      return null;
    }
    ListNode x = head;
    ListNode y = head.next;
    while (y != null) {
      if (x.val == y.val) {
        x.next = y.next;
        y = y.next;
      } else if (y != null) {
        x = x.next;
        y = y.next;
      }
    }
    return head;
  }
}