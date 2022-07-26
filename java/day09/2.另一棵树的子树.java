/**
 * https://leetcode.cn/problems/subtree-of-another-tree/submissions/
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
  public boolean isSubtree(TreeNode root, TreeNode subRoot) {
      return sub(root, subRoot);
  }

  public boolean sub(TreeNode root, TreeNode subRoot){
      if(root == null){
          return false;
      }
      if(subtree(root, subRoot)){
          return true;
      }
      if(sub(root.left, subRoot)){
          return true;
      }
      if(sub(root.right, subRoot)){
          return true;
      }
      return false;
  }

  public boolean subtree(TreeNode root, TreeNode subRoot){
      if((root == null && subRoot != null) || (root != null && subRoot == null)){
          return false;
      }
      if((root == null && subRoot == null) || root.val == subRoot.val){
          if(root != null){
              return subtree(root.left, subRoot.left) && subtree(root.right, subRoot.right);
          } else{
              return true;
          }
      }
      return false;
  }
}