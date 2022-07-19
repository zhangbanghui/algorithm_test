function rob(root: TreeNode | null): number {
  if (root === null) return 0;
  // 选择map
  const chooseMap = new Map();
  // 不选择map
  const ignoreMap = new Map();

  function dfs(node: TreeNode | null) {
    if (node === null) return;
    dfs(node.left);
    dfs(node.right);
    chooseMap.set(
      node,
      node.val +
        (ignoreMap.get(node.left) || 0) +
        (ignoreMap.get(node.right) || 0)
    );
    ignoreMap.set(
      node,
      Math.max(chooseMap.get(node.left) || 0, ignoreMap.get(node.left) || 0) +
        Math.max(chooseMap.get(node.right) || 0, ignoreMap.get(node.right) || 0)
    );
  }

  dfs(root);

  return Math.max(chooseMap.get(root) || 0, ignoreMap.get(root) || 0);
}
