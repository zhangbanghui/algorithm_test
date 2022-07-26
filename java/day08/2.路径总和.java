/**
 * https://leetcode.cn/problems/path-sum/submissions/
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
  public boolean hasPathSum(TreeNode root, int targetSum) {
      return has(root, targetSum, 0);
  }

  public boolean has(TreeNode root, int targetSum, int sum){
      if(root == null){
          return false;
      }
      sum += root.val;
      if(sum == targetSum && root.left == null && root.right == null){
          return true;
      }
      if(has(root.left, targetSum, sum)){
          return true;
      }
      if(has(root.right, targetSum, sum)){
          return true;
      }
      return false;
  }
}