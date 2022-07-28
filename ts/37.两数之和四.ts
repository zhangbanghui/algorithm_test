function findTarget(root: TreeNode | null, k: number): boolean {
  if (root === null) return false;

  const set = new Set();

  function dfs(root: TreeNode | null, k: number) {
    if (root === null) return false;
    if (set.has(k - root.val)) {
      return true;
    }
    set.add(root.val);
    return dfs(root.left, k) || dfs(root.right, k);
  }
  return dfs(root, k);
}
