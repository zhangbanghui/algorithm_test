/**
 * https://leetcode.cn/problems/minimum-depth-of-binary-tree/submissions/
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
  public int minDepth(TreeNode root) {
      return min(root);
  }

  public int min(TreeNode root){
      if(root == null){
          return 0;
      }
      if(root.left == null && root.right != null){
          return min(root.right) + 1;
      }else if(root.right == null && root.left != null){
          return min(root.left) + 1;
      }
      return Math.min(min(root.left), min(root.right)) + 1;
  }
}