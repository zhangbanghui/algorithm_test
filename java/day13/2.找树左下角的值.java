/**
 * https://leetcode.cn/problems/find-bottom-left-tree-value/submissions/
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
  int depth = 0;
  int val = 0;
  public int findBottomLeftValue(TreeNode root) {
      val = root.val;
      dfs(root, 0);
      return val;
  }

  public void dfs(TreeNode root, int d){
      if(root == null){
          return;
      }
      if(root.left == null && root.right == null && d > depth){
          depth = d;
          val = root.val;
          return;
      }
      dfs(root.left, d + 1);
      dfs(root.right, d + 1);
  }
}