/**
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree
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
  public int maxDepth(TreeNode root) {
      return depth(root, 0);
  }

  public int depth(TreeNode root, int depth){
      if(root == null){
          return depth;
      }else{
          return Math.max(depth(root.left, depth+1), depth(root.right, depth+1));
      }
  }
}