/**
 * https://leetcode.cn/problems/path-sum-iii/submissions/
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
  public int count = 0;

  public int pathSum(TreeNode root, int targetSum) {
      if(root == null){
          return count;
      }
      hasPathSum(root, targetSum);
      return count;
  }

  public boolean hasPathSum(TreeNode root, int targetSum) {
    has(root, targetSum, 0);
    if(root != null){
      hasPathSum(root.left, targetSum);
      hasPathSum(root.right, targetSum);
    }
    return false;
  }

  public boolean has(TreeNode root, int targetSum, long sum){
    if(root == null){
        return false;
    }
    sum += root.val;
    if(sum == targetSum){
        count ++;
    }
    has(root.left, targetSum, sum);
    has(root.right, targetSum, sum);
    return false;
}
}