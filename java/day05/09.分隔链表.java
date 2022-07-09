/**
 * https://leetcode.cn/problems/split-linked-list-in-parts
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
  public ListNode[] splitListToParts(ListNode head, int k) {
      int len = 0;
      ListNode x = head;
      while(x != null){
          x = x.next;
          len ++ ;
      }
      int blockLen = len / k;
      int mod = len % k;
      ListNode[] result = new ListNode[k];
      x = head;
      boolean add = false;
      int i = 0;
      int tmpBlockLen = blockLen;
      ListNode y = null;
      while(head != null){
          if(tmpBlockLen > 0){
              tmpBlockLen --;
              y = head;
              head = head.next;
              continue;
          }else if(!add && mod > 0){
              add = true;
              y = head;
              head = head.next;
              mod --;
              continue;
          }            
          if(add){
              add = false;
          }
          
          result[i] = x;
          i++;
          y.next = null;
          x = head;
          tmpBlockLen = blockLen;
      }
      if(x != null){
          result[i] = x;
      }
      return result;
  }
}