/**
21. 合并两个有序链表
https://leetcode.cn/problems/merge-two-sorted-lists/
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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode newList = null;
        ListNode newListTail = null;
        while (!(list1 == null && list2 == null)) {
            if (list1 != null && (list2 == null || list1.val <= list2.val)) {
                if (newList == null) {
                    newList = list1;
                    newListTail = newList;
                } else {
                    newListTail.next = list1;
                    newListTail = newListTail.next;
                }
                list1 = list1.next;
            } else if (list2 != null && (list1 == null || list1.val > list2.val)) {
                if (newList == null) {
                    newList = list2;
                    newListTail = newList;
                } else {
                    newListTail.next = list2;
                    newListTail = newListTail.next;
                }
                list2 = list2.next;
            }
        }
        return newList;
    }
}