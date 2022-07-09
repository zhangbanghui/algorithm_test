/**
 * https://leetcode.cn/problems/odd-even-linked-list
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
  public ListNode oddEvenList(ListNode head) {
      if(head == null || head.next == null){
          return head;
      }
      ListNode odd = null;
      ListNode oddy = null;
      ListNode oddx = null;
      ListNode heada = head;
      ListNode headx = null;
      int x = 0;
      while(head != null){
          if(x % 2 == 1){
              oddx = head;
              if(heada == head){
                  heada = head.next;
              }
               head = head.next;
              if(headx != null){
                  headx.next = head;
              }
              oddx.next = null;
              if(odd == null){
                  odd = oddx;
                  oddy = odd;
              }else{
                  oddy.next = oddx;
                  oddy = oddy.next;
              }
          }else{
              headx = head;
              head = head.next;
          }
          x++;
      }
      headx.next = odd;
      return heada;
  }
}