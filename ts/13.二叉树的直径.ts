function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;

  // 记录最大直径
  let result = 0;
  // 获取二叉树高度方法
  function depth(root: TreeNode | null): number {
    if (!root) return 0;
    const leftDepth = depth(root.left);
    const rightDepth = depth(root.right);
    result = Math.max(result, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
  }
  depth(root);
  return result;
}
