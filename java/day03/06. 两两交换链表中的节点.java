/**
 * https://leetcode.cn/problems/swap-nodes-in-pairs/
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
    public ListNode swapPairs(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode x = head;
        ListNode y = head.next;
        ListNode z = head;
        head = head.next;
        while (x != null && y != null) {
            z.next = y;
            x.next = y.next;
            y.next = x;
            z = x;
            x = x.next;
            if (x != null) {
                y = x.next;
            }
        }
        return head;
    }
}