
/**
206.链表翻转
https://leetcode.cn/problems/reverse-linked-list/
 */
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        if(head == null || head.next == null){
            return head;
        }
        ListNode a = head.next;
        head.next = null;
        ListNode b = a.next;
        while(true){
            a.next = head;
            head = a;
            a = b;
            if(a == null){
                return head;
            }
            if(b.next == null){
                a.next = head;
                return a;
            }else{
                b = b.next;
            }
        }
    }
}

/**
 * 递归方式.
 */
class Solution2 {
    public ListNode reverseList(ListNode head) {
        if(head == null || head.next == null){
            return head;
        }
        return reverse(head, null);
    }

    private ListNode reverse(ListNode head, ListNode last){
        if(head == null){
            return last;
        }
        ListNode a = head;
        head = head.next;
        a.next = last;
        last = a;
        return reverse(head, last);
    }
}