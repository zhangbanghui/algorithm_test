/**
 * https://leetcode.cn/problems/palindrome-linked-list
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
  public boolean isPalindrome(ListNode head) {
      List<Integer> arr = new ArrayList();
      while(head != null){
          arr.add(head.val);
          head = head.next;
      }
      int size = arr.size();
       for(int i=0;i<size/2;i++){
          if(arr.get(i) != arr.get(size - i - 1)){
              return false;
          }
      }
      return true;
  }
}