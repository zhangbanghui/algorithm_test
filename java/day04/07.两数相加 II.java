/**
 * https://leetcode.cn/problems/add-two-numbers-ii
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
  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
      l1 = reverseList(l1);
      l2 = reverseList(l2);
      boolean one = false;
      ListNode x = new ListNode();
      ListNode l3 = x;
      while(true){
          int a = l1 == null ? 0 : l1.val;
          int b = l2 == null ? 0 : l2.val;
          if(l1 != null){
              l1 = l1.next;
          }
          if(l2 != null){
              l2 = l2.next;
          }
          int c = a+b;
          if(one){
              c += 1;
              one = false;
          }
          if(c > 9){
              one = true;
              c = c - 10;
          }
          x.val = c;
          if(l1 == null && l2 == null && !one){
              break;
          }
          x.next = new ListNode();
          x = x.next;
          
      }
      return reverseList(l3);
  }

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