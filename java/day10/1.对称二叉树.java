/**
 * https://leetcode.cn/problems/symmetric-tree/submissions/
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
  public boolean isSymmetric(TreeNode root) {
      return compare(root.left, root.right);
  }

  public boolean compare(TreeNode a, TreeNode b){
      if(a == null && b == null){
          return true;
      }
      if((a == null && b != null) || (a != null && b == null)){
          return false;
      }
      if(a.val == b.val){
          return compare(a.right, b.left) && compare(a.left, b.right);
      }else{
          return false;
      }
  }
}