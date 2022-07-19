function findSecondMinimumValue(root: TreeNode | null): number {
  if (root === null) return 0;
  let ans = -1;

  function dfs(node: TreeNode | null) {
    if (node === null) return 0;

    if (node.val > ans && ans !== -1) {
      ans = node.val;
    }

    if (node.val >= ans) return;

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return ans;
}
