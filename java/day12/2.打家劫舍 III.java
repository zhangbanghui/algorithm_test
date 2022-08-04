/**
 * https://leetcode.cn/problems/house-robber-iii/
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
  Map<TreeNode, Integer> robMap = new HashMap();
  Map<TreeNode, Integer> noRobMap = new HashMap();
  public int rob(TreeNode root) {
      return max(root, true);
  }

  public int max(TreeNode root, boolean canRob){
      if(root == null){
          return 0;
      }
      
      if(canRob){
          if(robMap.containsKey(root)){
          return robMap.get(root);
      }
          int result = Math.max(root.val + max(root.left, false) + max(root.right, false), max(root.left, true) + max(root.right, true));
          robMap.put(root, result);
          return result;
      }else{
          if(noRobMap.containsKey(root)){
          return noRobMap.get(root);
      }
          int result = max(root.left, true) + max(root.right, true);
          noRobMap.put(root, result);
          return result;
      }
  }
}