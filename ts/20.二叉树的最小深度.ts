function minDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  // 叶子节点直接返回1
  if (root.left === null && root.right === null) return 1;
  let minDep = Number.MAX_SAFE_INTEGER;
  if (root.left) {
    minDep = Math.min(minDepth(root.left), minDep);
  }
  if (root.right) {
    minDep = Math.min(minDepth(root.right), minDep);
  }
  return minDep + 1;
}
