/**
 * https://leetcode.cn/problems/average-of-levels-in-binary-tree/submissions/
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
  List<Long> sumList = new ArrayList();
  List<Long> countList = new ArrayList();
  public List<Double> averageOfLevels(TreeNode root) {
      dfs(root, 0);
      List<Double> result = new ArrayList();
      for(int i = 0; i< sumList.size(); i++){
          result.add(sumList.get(i)*1.0/countList.get(i));
      }
      return result;
  }

  public void dfs(TreeNode root, int depth){
      if(root == null){
          return;
      }
      if(sumList.size() == depth){
          sumList.add(0L);
      }
      sumList.set(depth, sumList.get(depth) + root.val);

      if(countList.size() == depth){
          countList.add(0L);
      }
      countList.set(depth, countList.get(depth) + 1);
      dfs(root.left, depth + 1);
      dfs(root.right, depth + 1);
  }
}