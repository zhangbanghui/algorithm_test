/**
 * https://leetcode.cn/problems/second-minimum-node-in-a-binary-tree/submissions/
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
  int min = 0;
  int secondMin = -1;
  public int findSecondMinimumValue(TreeNode root) {
      if(root == null){
          return -1;
      }
      min = root.val;
      dfs(root);
      return secondMin == min ? -1 : secondMin;
  }

  public void dfs(TreeNode root){
      if(root == null){
          return;
      }
      if(root.val < min){
          secondMin = min;
          min = root.val;
      }else if((root.val < secondMin || secondMin == -1 || secondMin == min)&&root.val != min){
          secondMin = root.val;
      }
      dfs(root.left);
      dfs(root.right);
  }
}