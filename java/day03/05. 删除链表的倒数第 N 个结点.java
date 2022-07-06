/**
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        if (head.next == null) {
            return null;
        }
        ListNode x = head;
        ListNode y = head;
        int i = 0;
        while (y.next != null) {
            if (i == n) {
                x = x.next;
            } else {
                i++;
            }
            y = y.next;
        }
        if (i < n) {
            x = x.next;
            return x;
        }
        x.next = x.next.next;
        return head;
    }
}